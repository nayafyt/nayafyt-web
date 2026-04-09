"use client";

import React, { useState } from "react";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";

interface GameSetupProps {
    onStartGame: (playerColor: "W" | "B", level: number) => void;
    isLoading?: boolean;
}

export default function ReversiGameSetup({
    onStartGame,
    isLoading = false,
}: GameSetupProps) {
    const [playerColor, setPlayerColor] = useState<"W" | "B">("B");
    const [difficulty, setDifficulty] = useState<number>(2);

    const handleStart = () => {
        onStartGame(playerColor, difficulty);
    };

    return (
        <div className="reversi-setup">
            <div className="setup-card">
                <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6">
                    Start New Game
                </h2>

                <div className="space-y-6">
                    {/* Player Color Selection */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text)] mb-3">
                            Choose Your Color:
                        </label>
                        <div className="flex gap-3">
                            {["B", "W"].map((color) => (
                                <button
                                    key={color}
                                    onClick={() =>
                                        setPlayerColor(color as "W" | "B")
                                    }
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${playerColor === color
                                            ? "bg-[var(--color-accent)] text-white border-2 border-[var(--color-accent)]"
                                            : "bg-[var(--color-bg-alt)] text-[var(--color-text)] border-2 border-[var(--color-border)] hover:border-[var(--color-accent)]"
                                        }`}
                                >
                                    {color === "B" ? "⚫ Black" : "⚪ White"}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Difficulty Selection */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--color-text)] mb-3">
                            Difficulty:
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setDifficulty(level)}
                                    className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all text-sm ${difficulty === level
                                            ? "bg-[var(--color-accent)] text-white border-2 border-[var(--color-accent)]"
                                            : "bg-[var(--color-bg-alt)] text-[var(--color-text)] border-2 border-[var(--color-border)] hover:border-[var(--color-accent)]"
                                        }`}
                                >
                                    {level === 1 ? "Easy" : level === 2 ? "Medium" : "Hard"}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-[var(--color-text-muted)] mt-2">
                            {difficulty === 1
                                ? "Computer looks 1-2 moves ahead"
                                : difficulty === 2
                                    ? "Computer looks 2-3 moves ahead"
                                    : "Computer looks 3-4 moves ahead (might be slow)"}
                        </p>
                    </div>

                    {/* Start Button */}
                    <button
                        onClick={handleStart}
                        disabled={isLoading}
                        className="w-full px-4 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Starting..." : "Start Game"}
                    </button>
                </div>
            </div>
        </div>
    );
}
