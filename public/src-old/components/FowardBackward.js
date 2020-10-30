import React from "react";

export default function FowardBackward({
    handleForward,
    handleBackward,
    moveRange,
    setMoveRange,
}) {
    return (
        <div className="forward_backward_container">
            <button type="button" onClick={handleBackward}>
                Backward
            </button>
            <select
                name="range"
                id="range"
                value={moveRange}
                onChange={(e) => setMoveRange(parseInt(e.target.value))}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
            </select>

            <button type="button" onClick={handleForward}>
                Forward
            </button>
        </div>
    );
}
