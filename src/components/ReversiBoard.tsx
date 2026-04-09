"use client";

import React from "react";

interface ReversiBoard {
    board: number[][];
    availableMoves: Array<{ row: number; col: number }>;
    lastMove?: { row: number; col: number };
    onCellClick: (row: number, col: number) => void;
    disabled: boolean;
}

const EMPTY = 0;
const WHITE = 1;
const BLACK = -1;

export default function ReversiBoardComponent({
    board,
    availableMoves,
    lastMove,
    onCellClick,
    disabled,
}: ReversiBoard) {
    const isAvailable = (r: number, c: number) =>
        availableMoves.some(([mr, mc]) => mr === r && mc === c);

    const isLastMove = (r: number, c: number) =>
        lastMove && lastMove.row === r && lastMove.col === c;

    return (
        <div className="reversi-board">
            {board.map((row, r) =>
                row.map((cell, c) => {
                    const available = isAvailable(r, c);
                    const isLast = isLastMove(r, c);
                    const classNames = [
                        "reversi-cell",
                        available && !disabled ? "available" : "",
                        isLast ? "last-move" : "",
                    ]
                        .filter(Boolean)
                        .join(" ");

                    return (
                        <div
                            key={`${r}-${c}`}
                            className={classNames}
                            onClick={() => available && !disabled && onCellClick(r, c)}
                        >
                            {cell === BLACK && <div className="disc black" />}
                            {cell === WHITE && <div className="disc white" />}
                        </div>
                    );
                })
            )}
        </div>
    );
}
