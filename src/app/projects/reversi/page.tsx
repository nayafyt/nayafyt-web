import { ArrowLeftIcon } from "lucide-react";
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

                <ReversiGame />
            </div>
        </main>
    );
}
