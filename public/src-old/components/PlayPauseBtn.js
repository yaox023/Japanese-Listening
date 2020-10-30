import React from "react";

export default function PlayPauseBtn({
    isPlaying,
    handlePlay,
    handlePause,
    barLength,
    barFinished,
}) {
    return (
        <div className="play_pause_container">
            {isPlaying ? (
                <button type="button" onClick={handlePause}>
                    Pause
                </button>
            ) : (
                <button type="button" onClick={handlePlay}>
                    Play
                </button>
            )}
        </div>
    );
}
