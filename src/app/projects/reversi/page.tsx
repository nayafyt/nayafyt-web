import { ExternalLink, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import ReversiGame from "@/components/ReversiGame";

export const metadata = {
    title: "Reversi — Online | Naya Fytali",
    description: "Play Reversi online against an intelligent computer opponent.",
};

export default function ReversiProject() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-alt)] text-[var(--color-text)]">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors mb-8"
                >
                    <ArrowLeftIcon size={18} />
                    Back to Projects
                </Link>

                <div className="space-y-12">
                    {/* Game Container */}
                    <div className="bg-[var(--color-bg-alt)] rounded-2xl p-8 border border-[var(--color-border)]">
                        <ReversiGame />
                    </div>

                    {/* Info Section */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Reversi</h1>
                            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                                Play Reversi (also known as Othello) online against an intelligent computer opponent.
                                Choose your difficulty level and enjoy a classic strategy board game with a modern twist.
                            </p>
                        </div>

                        <div className="bg-[var(--color-bg-alt)] rounded-2xl p-8 border border-[var(--color-border)]">
                            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">How to Play</h2>
                            <div className="space-y-3 text-[var(--color-text-muted)]">
                                <p>
                                    <strong className="text-[var(--color-accent)]">Objective:</strong> Capture your opponent's pieces by trapping them between your own discs.
                                </p>
                                <p>
                                    <strong className="text-[var(--color-accent)]">Gameplay:</strong> Click to place your disc on the board. Valid moves are highlighted. The player with the most pieces when no more moves are available wins.
                                </p>
                                <p>
                                    <strong className="text-[var(--color-accent)]">Difficulty:</strong> Choose from Easy, Medium, or Hard AI opponents using minimax search with heuristic board evaluation.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[var(--color-bg-alt)] rounded-2xl p-8 border border-[var(--color-border)]">
                            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-3">
                                {["React", "TypeScript", "Minimax Algorithm", "JavaScript Game Logic", "Tailwind CSS"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/nayafyt/Reversi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-bg-alt)] text-[var(--color-text)] border border-[var(--color-border)] rounded-lg font-semibold hover:border-[var(--color-accent)] transition-colors"
                            >
                                View Source
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
className = "px-4 py-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-sm font-medium"
    >
    { tech }
                                </span >
                            ))}
                        </div >
                    </div >

    <div className="flex gap-4">
        <a
            href="https://nayafyt.github.io/Reversi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-black rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
            Play Now
            <ExternalLink size={18} />
        </a>
        <a
            href="https://github.com/nayafyt/Reversi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-bg-alt)] text-[var(--color-text)] border border-[var(--color-border)] rounded-lg font-semibold hover:border-[var(--color-accent)] transition-colors"
        >
            View Source
            <ExternalLink size={18} />
        </a>
    </div>
                </div >
            </div >
        </main >
    );
}
