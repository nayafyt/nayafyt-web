"use client";

import React, { useState, useEffect } from "react";
import { RotateCcw, Zap, Server } from "lucide-react";
import ReversiBoardComponent from "./ReversiBoard";
import ReversiGameSetup from "./ReversiGameSetup";
import { GameService } from "../../../Reversi/frontend/src/lib/reversi/GameService";
import { GameState, GameConfig, Move } from "../../../Reversi/frontend/src/lib/reversi/types";
import * as backendApi from "../lib/reversi-api";

export default function ReversiGame() {
    const [gameService, setGameService] = useState<GameService | null>(null);
    const [gameState, setGameState] = useState<GameState | null>(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [useBackend, setUseBackend] = useState(false);
    const [backendAvailable, setBackendAvailable] = useState(false);
    const [showModeWarning, setShowModeWarning] = useState(false);

    // Check if backend is available
    useEffect(() => {
        const checkBackend = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/game/state", {
                    method: "GET",
                    signal: AbortSignal.timeout(2000),
                });
                setBackendAvailable(response.ok || response.status === 400);
            } catch (e) {
                setBackendAvailable(false);
            }
        };
        checkBackend();
    }, []);

    const handleStartGame = (playerColor: "W" | "B", level: number) => {
        setIsLoading(true);

        if (useBackend) {
            // Use backend API
            backendApi
                .newGame(playerColor, level)
                .then((state) => {
                    setGameState(state);
                    setGameStarted(true);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Backend error:", error);
                    alert(
                        "Backend error: " +
                        error.message +
                        "\nMake sure the backend is running on http://localhost:8080"
                    );
                    setIsLoading(false);
                });
        } else {
            // Use JavaScript version
            setTimeout(() => {
                const service = new GameService();
                const config: GameConfig = { playerColor, level };
                const state = service.newGame(config);
                setGameService(service);
                setGameState(state);
                setGameStarted(true);
                setIsLoading(false);
            }, 100);
        }
    };

    const handleCellClick = (row: number, col: number) => {
        if (!gameState || gameState.gameOver || isLoading) return;

        setIsLoading(true);

        if (useBackend) {
            // Use backend API
            backendApi
                .makeMove(row, col)
                .then((newState) => {
                    setGameState(newState);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Backend error:", error);
                    alert("Invalid move or backend error");
                    setIsLoading(false);
                });
        } else {
            // Use JavaScript version
            if (!gameService) return;
            setTimeout(() => {
                const newState = gameService.playerMove(row, col);
                setGameState(newState);
                setIsLoading(false);
            }, 100);
        }
    };

    const handleNewGame = () => {
        setGameStarted(false);
        setGameState(null);
        setGameService(null);
    };

    if (!gameStarted || !gameState) {
        return (
            <div className="reversi-container">
                {/* Mode Toggle */}
                <div className="mode-toggle-section">
                    <div className="mode-selector">
                        <button
                            onClick={() => {
                                setUseBackend(false);
                                setShowModeWarning(false);
                            }}
                            className={`mode-btn ${!useBackend ? "active" : ""}`}
                        >
                            <Zap size={18} />
                            JavaScript Only
                        </button>
                        <button
                            onClick={() => {
                                if (backendAvailable) {
                                    setUseBackend(true);
                                    setShowModeWarning(true);
                                } else {
                                    alert(
                                        "Backend not available.\n\nTo use the backend version, run:\ncd Reversi/backend\nmvn spring-boot:run"
                                    );
                                }
                            }}
                            className={`mode-btn ${useBackend ? "active" : ""}`}
                            disabled={!backendAvailable}
                        >
                            <Server size={18} />
                            Backend {!backendAvailable && "(Unavailable)"}
                        </button>
                    </div>

                    {/* Mode Info */}
                    {useBackend && (
                        <div className="mode-info backend-info">
                            <Server size={16} />
                            <span>Running with Java Spring Boot backend</span>
                        </div>
                    )}
                    {!useBackend && (
                        <div className="mode-info js-info">
                            <Zap size={16} />
                            <span>Running pure JavaScript in your browser</span>
                        </div>
                    )}
                </div>

                <ReversiGameSetup onStartGame={handleStartGame} isLoading={isLoading} />
            </div>
        );
    }

    const playerColor = gameState.playerColor === "B" ? "⚫ Black" : "⚪ White";
    const computerColor = gameState.playerColor === "B" ? "⚪ White" : "⚫ Black";
    const currentPlayer = gameState.gameOver
        ? "Game Over"
        : "Your Turn";

    return (
        <div className="reversi-container">
            <div className="reversi-game">
                {/* Game Info */}
                <div className="game-info">
                    <div className="info-section">
                        <div className="player-info">
                            <span className="player-label">You</span>
                            <span className="player-color">{playerColor}</span>
                            <span className="player-score">{gameState.playerColor === "B"
                                ? gameState.blackCount
                                : gameState.whiteCount}</span>
                        </div>
                        <div className="vs">vs</div>
                        <div className="player-info">
                            <span className="player-label">Computer</span>
                            <span className="player-color">{computerColor}</span>
                            <span className="player-score">{gameState.playerColor === "B"
                                ? gameState.whiteCount
                                : gameState.blackCount}</span>
                        </div>
                    </div>

                    <div className="status-section">
                        <div className="status">
                            <p className="status-text">{currentPlayer}</p>
                            {gameState.message && (
                                <p className="status-message">{gameState.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Game Board */}
                <div className="board-container">
                    <ReversiBoardComponent
                        board={gameState.board}
                        availableMoves={gameState.availableMoves}
                        lastMove={gameState.lastMove}
                        onCellClick={handleCellClick}
                        disabled={isLoading || gameState.gameOver}
                    />
                </div>

                {/* Game Over Screen */}
                {gameState.gameOver && (
                    <div className="game-over">
                        <div className="game-over-content">
                            <h2 className="game-over-title">
                                {gameState.winner === "Draw"
                                    ? "Draw!"
                                    : gameState.winner === gameState.playerColor
                                        ? "You Win! 🎉"
                                        : "Computer Wins!"}
                            </h2>
                            <p className="game-over-score">
                                You: {gameState.playerColor === "B"
                                    ? gameState.blackCount
                                    : gameState.whiteCount} | Computer:{" "}
                                {gameState.playerColor === "B"
                                    ? gameState.whiteCount
                                    : gameState.blackCount}
                            </p>
                            <button
                                onClick={handleNewGame}
                                className="new-game-btn"
                            >
                                <RotateCcw size={18} />
                                Play Again
                            </button>
                        </div>
                    </div>
                )}

                {/* New Game Button */}
                <button
                    onClick={handleNewGame}
                    className="new-game-button"
                >
                    <RotateCcw size={18} />
                    New Game
                </button>
            </div>
        </div>
    );
}
