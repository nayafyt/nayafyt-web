"use client";

import React, { useState, useEffect, useRef } from "react";
import { RotateCcw } from "lucide-react";
import ReversiBoardComponent from "./ReversiBoard";
import ReversiGameSetup from "./ReversiGameSetup";
import { GameService } from "@/lib/reversi/GameService";
import { GameState, GameConfig } from "@/lib/reversi/types";

export default function ReversiGame() {
    const [gameService, setGameService] = useState<GameService | null>(null);
    const [gameState, setGameState] = useState<GameState | null>(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        containerRef.current?.scrollIntoView({ block: "center" });
    }, []);

    const handleStartGame = (playerColor: "W" | "B", level: number) => {
        setIsLoading(true);
        setTimeout(() => {
            const service = new GameService();
            const config: GameConfig = { playerColor, level };
            const state = service.newGame(config);
            setGameService(service);
            setGameState(state);
            setGameStarted(true);
            setIsLoading(false);
        }, 100);
    };

    const handleCellClick = (row: number, col: number) => {
        if (!gameService || !gameState || gameState.gameOver || isLoading) return;

        setIsLoading(true);
        setTimeout(() => {
            const newState = gameService.playerMove(row, col);
            setGameState(newState);
            setIsLoading(false);
        }, 100);
    };

    const handleNewGame = () => {
        setGameStarted(false);
        setGameState(null);
        setGameService(null);
    };

    if (!gameStarted || !gameState) {
        return (
            <div className="reversi-container" ref={containerRef}>
                <div className="reversi-page-content">
                    <div className="reversi-header">
                        <h1 className="reversi-title">Reversi</h1>
                        <p className="reversi-description">
                            Play Reversi (also known as Othello) online against an intelligent computer opponent. Choose your difficulty level and enjoy a classic strategy board game with a modern twist.
                        </p>
                    </div>

                    <div className="reversi-game-init">
                        <ReversiBoardComponent
                            board={Array(8).fill(Array(8).fill(0))}
                            availableMoves={[]}
                            onCellClick={() => { }}
                            disabled={true}
                        />
                    </div>

                    <button
                        className="help-button"
                        onClick={() => setShowHowToPlay(true)}
                        title="How to Play"
                    >
                        ?
                    </button>

                    <div className="setup-overlay">
                        <ReversiGameSetup onStartGame={handleStartGame} isLoading={isLoading} />
                    </div>

                    <div className="tech-stack-section">
                        <h2>Tech Stack</h2>
                        <div className="tech-stack-list">
                            {["React", "TypeScript", "Minimax Algorithm", "JavaScript Game Logic", "Tailwind CSS"].map((tech) => (
                                <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {showHowToPlay && (
                        <div className="info-modal" onClick={() => setShowHowToPlay(false)}>
                            <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="info-modal-close" onClick={() => setShowHowToPlay(false)}>×</button>
                                <div className="info-section-text">
                                    <h2>How to Play</h2>
                                    <p><strong>Objective:</strong> Capture your opponent's pieces by trapping them between your own discs.</p>
                                    <p><strong>Gameplay:</strong> Click to place your disc on the board. Valid moves are highlighted. The player with the most pieces when no more moves are available wins.</p>
                                    <p><strong>Difficulty:</strong> Choose from Easy, Medium, or Hard AI opponents using minimax search with heuristic board evaluation.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    const playerColor = gameState.playerColor === "B" ? "⚫ Black" : "⚪ White";
    const computerColor = gameState.playerColor === "B" ? "⚪ White" : "⚫ Black";
    const currentPlayer = gameState.gameOver ? "Game Over" : "Your Turn";

    return (
        <div className="reversi-container" ref={containerRef}>
            <div className="reversi-game">
                {/* Game Info */}
                <div className="game-info">
                    <div className="info-section">
                        <div className="player-info">
                            <span className="player-label">You</span>
                            <span className="player-color">{playerColor}</span>
                            <span className="player-score">
                                {gameState.playerColor === "B"
                                    ? gameState.blackCount
                                    : gameState.whiteCount}
                            </span>
                        </div>
                        <div className="vs">vs</div>
                        <div className="player-info">
                            <span className="player-label">Computer</span>
                            <span className="player-color">{computerColor}</span>
                            <span className="player-score">
                                {gameState.playerColor === "B"
                                    ? gameState.whiteCount
                                    : gameState.blackCount}
                            </span>
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
                    <button
                        className="help-button"
                        onClick={() => setShowHowToPlay(true)}
                        title="How to Play"
                    >
                        ?
                    </button>
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
                                You:{" "}
                                {gameState.playerColor === "B"
                                    ? gameState.blackCount
                                    : gameState.whiteCount}{" "}
                                | Computer:{" "}
                                {gameState.playerColor === "B"
                                    ? gameState.whiteCount
                                    : gameState.blackCount}
                            </p>
                            <button onClick={handleNewGame} className="new-game-btn">
                                <RotateCcw size={18} />
                                Play Again
                            </button>
                        </div>
                    </div>
                )}

                {/* New Game Button */}
                <button onClick={handleNewGame} className="new-game-button">
                    <RotateCcw size={18} />
                    New Game
                </button>

                {showHowToPlay && (
                    <div className="info-modal" onClick={() => setShowHowToPlay(false)}>
                        <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="info-modal-close" onClick={() => setShowHowToPlay(false)}>×</button>
                            <div className="info-section-text">
                                <h2>How to Play</h2>
                                <p><strong>Objective:</strong> Capture your opponent's pieces by trapping them between your own discs.</p>
                                <p><strong>Gameplay:</strong> Click to place your disc on the board. Valid moves are highlighted. The player with the most pieces when no more moves are available wins.</p>
                                <p><strong>Difficulty:</strong> Choose from Easy, Medium, or Hard AI opponents using minimax search with heuristic board evaluation.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
