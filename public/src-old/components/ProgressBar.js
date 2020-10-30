import React from "react";

export default function ProgressBar({ barLength, barFinished, setBarFinished, audio }) {
    const selectProgress = e => {
        // console.log(e.pageX, e.pageY)
        // console.log(e.target.getBoundingClientRect())
        // console.log(e)
        const box = e.target.getBoundingClientRect();
        // console.log(box)
        // console.log(parseInt((e.pageX-box.x) / box.width * barLength))
        const cur = parseInt((e.pageX-box.x) / box.width * barLength)
        setBarFinished(cur)
        if (audio){
            audio.currentTime = cur;
        }
        

        // console.log(progressbar)
    }

    const progressbar = React.useRef(null);


    return (
        <progress
            ref={progressbar}
            className="progress_bar"
            value={barFinished}
            max={barLength}
            onClick={selectProgress}
            // onMouseDown={e => progressbar.current.onmousemove = selectProgress}
            // onMouseUp={e => {
            //     console.log("up")
            //     progressbar.current.onmousemove = null
            // } }
            // onMouseOut={e => {
            //     console.log("out")
            //     progressbar.current.onmousemove = null
            // } }
        ></progress>
    );
}
