import React from "react";

import Info from "./components/Info";
import PlayPauseBtn from "./components/PlayPauseBtn";
import Dropzone from "./components/Dropzone";
import FowardBackward from "./components/FowardBackward";
import ProgressBar from "./components/ProgressBar";

function App() {
    const [curAudioRate, setCurAudioRate] = React.useState(1);
    const [audioRate, setAudioRate] = React.useState([
        0.5,
        0.8,
        1,
        1.2,
        1.5,
        2,
        3,
    ]);
    const [audioRes, setAudioRes] = React.useState([
        "空",
        "n2听力考前对策音频-1-01.mp3",
        "n2听力考前对策音频-1-02.mp3",
        "n2听力考前对策音频-1-03.mp3",
        "n2听力考前对策音频-1-04.mp3",
        "n2听力考前对策音频-1-05.mp3",
        "n2听力考前对策音频-1-06.mp3",
        "n2听力考前对策音频-1-07.mp3",
        "n2听力考前对策音频-1-08.mp3",
        "n2听力考前对策音频-1-09.mp3",
        "n2听力考前对策音频-1-10.mp3",
        "n2听力考前对策音频-1-11.mp3",
        "n2听力考前对策音频-1-12.mp3",
        "n2听力考前对策音频-1-13.mp3",
        "n2听力考前对策音频-1-14.mp3",
        "n2听力考前对策音频-1-15.mp3",
        "n2听力考前对策音频-1-16.mp3",
        "n2听力考前对策音频-1-17.mp3",
        "n2听力考前对策音频-1-18.mp3",
        "n2听力考前对策音频-1-19.mp3",
        "n2听力考前对策音频-1-20.mp3",
        "n2听力考前对策音频-1-21.mp3",
        "n2听力考前对策音频-1-22.mp3",
        "n2听力考前对策音频-1-23.mp3",
        "n2听力考前对策音频-1-24.mp3",
        "n2听力考前对策音频-1-25.mp3",
        "n2听力考前对策音频-1-26.mp3",
        "n2听力考前对策音频-1-27.mp3",
        "n2听力考前对策音频-1-28.mp3",
        "n2听力考前对策音频-1-29.mp3",
        "n2听力考前对策音频-1-30.mp3",
        "n2听力考前对策音频-1-31.mp3",
        "n2听力考前对策音频-1-32.mp3",
        "n2听力考前对策音频-1-33.mp3",
        "n2听力考前对策音频-1-34.mp3",
        "n2听力考前对策音频-1-35.mp3",
        "n2听力考前对策音频-1-36.mp3",
        "n2听力考前对策音频-1-37.mp3",
        "n2听力考前对策音频-1-38.mp3",
        "n2听力考前对策音频-1-39.mp3",
        "n2听力考前对策音频-1-40.mp3",
        "n2听力考前对策音频-1-41.mp3",
        "n2听力考前对策音频-1-42.mp3",
        "n2听力考前对策音频-1-43.mp3",
        "n2听力考前对策音频-1-44.mp3",
        "n2听力考前对策音频-1-45.mp3",
        "n2听力考前对策音频-1-46.mp3",
        "n2听力考前对策音频-1-47.mp3",
        "n2听力考前对策音频-1-48.mp3",
        "n2听力考前对策音频-1-49.mp3",
        "n2听力考前对策音频-1-50.mp3",
        "n2听力考前对策音频-1-51.mp3",
        "n2听力考前对策音频-1-52.mp3",
        "n2听力考前对策音频-1-53.mp3",
        "n2听力考前对策音频-1-54.mp3",
        "n2听力考前对策音频-1-55.mp3",
        "n2听力考前对策音频-1-56.mp3",
        "n2听力考前对策音频-1-57.mp3",
        "n2听力考前对策音频-1-58.mp3",
        "n2听力考前对策音频-1-59.mp3",
        "n2听力考前对策音频-1-60.mp3",
        "n2听力考前对策音频-1-61.mp3",
        "n2听力考前对策音频-1-62.mp3",
        "n2听力考前对策音频-1-63.mp3",
        "n2听力考前对策音频-1-64.mp3",
        "n2听力考前对策音频-2-01.mp3",
        "n2听力考前对策音频-2-02.mp3",
        "n2听力考前对策音频-2-03.mp3",
        "n2听力考前对策音频-2-04.mp3",
        "n2听力考前对策音频-2-05.mp3",
        "n2听力考前对策音频-2-06.mp3",
        "n2听力考前对策音频-2-07.mp3",
        "n2听力考前对策音频-2-08.mp3",
        "n2听力考前对策音频-2-09.mp3",
        "n2听力考前对策音频-2-10.mp3",
        "n2听力考前对策音频-2-11.mp3",
        "n2听力考前对策音频-2-12.mp3",
        "n2听力考前对策音频-2-13.mp3",
        "n2听力考前对策音频-2-14.mp3",
        "n2听力考前对策音频-2-15.mp3",
        "n2听力考前对策音频-2-16.mp3",
        "n2听力考前对策音频-2-17.mp3",
        "n2听力考前对策音频-2-18.mp3",
        "n2听力考前对策音频-2-19.mp3",
        "n2听力考前对策音频-2-20.mp3",
        "n2听力考前对策音频-2-21.mp3",
        "n2听力考前对策音频-2-22.mp3",
        "n2听力考前对策音频-2-23.mp3",
        "n2听力考前对策音频-2-24.mp3",
        "n2听力考前对策音频-2-25.mp3",
        "n2听力考前对策音频-2-26.mp3",
        "n2听力考前对策音频-2-27.mp3",
        "n2听力考前对策音频-2-28.mp3",
        "n2听力考前对策音频-2-29.mp3",
        "n2听力考前对策音频-2-30.mp3",
        "n2听力考前对策音频-2-31.mp3",
        "n2听力考前对策音频-2-32.mp3",
        "n2听力考前对策音频-2-33.mp3",
        "n2听力考前对策音频-2-34.mp3",
        "n2听力考前对策音频-2-35.mp3",
        "n2听力考前对策音频-2-36.mp3",
        "n2听力考前对策音频-2-37.mp3",
        "n2听力考前对策音频-2-38.mp3",
        "n2听力考前对策音频-2-39.mp3",
        "n2听力考前对策音频-2-40.mp3",
        "n2听力考前对策音频-2-41.mp3",
        "n2听力考前对策音频-2-42.mp3",
        "n2听力考前对策音频-2-43.mp3",
        "n2听力考前对策音频-2-44.mp3",
        "n2听力考前对策音频-2-45.mp3",
        "n2听力考前对策音频-2-46.mp3",
        "n2听力考前对策音频-2-47.mp3",
        "n2听力考前对策音频-2-48.mp3",
        "n2听力考前对策音频-2-49.mp3",
        "n2听力考前对策音频-2-50.mp3",
        "n2听力考前对策音频-2-51.mp3",
        "n2听力考前对策音频-2-52.mp3",
        "2012年12月N3.mp3",
        "2012年7月N3.mp3",
        "2013年12月N3.mp3",
        "2013年7月N3.mp3",
        "2014年12月N3.mp3",
        "2014年7月N3.mp3",
        "2015年12月N3.mp3",
        "2016年12月N3.mp3",
        "2016年7月N3.mp3",
        "2017年12月N3.mp3",
        "2017年7月N3.mp3",
        "2018年12月N3.mp3",
        "2018年7月N3.mp3",
        "2019年7月N3.mp3",
        "N3听力考前对策-1-01.mp3",
        "N3听力考前对策-1-02.mp3",
        "N3听力考前对策-1-03.mp3",
        "N3听力考前对策-1-04.mp3",
        "N3听力考前对策-1-05.mp3",
        "N3听力考前对策-1-06.mp3",
        "N3听力考前对策-1-07.mp3",
        "N3听力考前对策-1-08.mp3",
        "N3听力考前对策-1-09.mp3",
        "N3听力考前对策-1-10.mp3",
        "N3听力考前对策-1-11.mp3",
        "N3听力考前对策-1-12.mp3",
        "N3听力考前对策-1-13.mp3",
        "N3听力考前对策-1-14.mp3",
        "N3听力考前对策-1-15.mp3",
        "N3听力考前对策-1-16.mp3",
        "N3听力考前对策-1-17.mp3",
        "N3听力考前对策-1-18.mp3",
        "N3听力考前对策-1-19.mp3",
        "N3听力考前对策-1-20.mp3",
        "N3听力考前对策-1-21.mp3",
        "N3听力考前对策-1-22.mp3",
        "N3听力考前对策-1-23.mp3",
        "N3听力考前对策-1-24.mp3",
        "N3听力考前对策-1-25.mp3",
        "N3听力考前对策-1-26.mp3",
        "N3听力考前对策-1-27.mp3",
        "N3听力考前对策-1-28.mp3",
        "N3听力考前对策-1-29.mp3",
        "N3听力考前对策-1-30.mp3",
        "N3听力考前对策-1-31.mp3",
        "N3听力考前对策-1-32.mp3",
        "N3听力考前对策-1-33.mp3",
        "N3听力考前对策-1-34.mp3",
        "N3听力考前对策-1-35.mp3",
        "N3听力考前对策-1-36.mp3",
        "N3听力考前对策-1-37.mp3",
        "N3听力考前对策-1-38.mp3",
        "N3听力考前对策-1-39.mp3",
        "N3听力考前对策-1-40.mp3",
        "N3听力考前对策-1-41.mp3",
        "N3听力考前对策-1-42.mp3",
        "N3听力考前对策-1-43.mp3",
        "N3听力考前对策-1-44.mp3",
        "N3听力考前对策-1-45.mp3",
        "N3听力考前对策-1-46.mp3",
        "N3听力考前对策-1-47.mp3",
        "N3听力考前对策-1-48.mp3",
        "N3听力考前对策-1-49.mp3",
        "N3听力考前对策-1-50.mp3",
        "N3听力考前对策-1-51.mp3",
        "N3听力考前对策-1-52.mp3",
        "N3听力考前对策-1-53.mp3",
        "N3听力考前对策-1-54.mp3",
        "N3听力考前对策-1-55.mp3",
        "N3听力考前对策-1-56.mp3",
        "N3听力考前对策-1-57.mp3",
        "N3听力考前对策-1-58.mp3",
        "N3听力考前对策-1-59.mp3",
        "N3听力考前对策-1-60.mp3",
        "N3听力考前对策-1-61.mp3",
        "N3听力考前对策-1-62.mp3",
        "N3听力考前对策-1-63.mp3",
        "N3听力考前对策-1-64.mp3",
        "N3听力考前对策-1-65.mp3",
        "N3听力考前对策-1-66.mp3",
        "N3听力考前对策-1-67.mp3",
        "N3听力考前对策-1-68.mp3",
        "N3听力考前对策-1-69.mp3",
        "N3听力考前对策-1-70.mp3",
        "N3听力考前对策-1-71.mp3",
        "N3听力考前对策-1-72.mp3",
        "N3听力考前对策-2-01.mp3",
        "N3听力考前对策-2-02.mp3",
        "N3听力考前对策-2-03.mp3",
        "N3听力考前对策-2-04.mp3",
        "N3听力考前对策-2-05.mp3",
        "N3听力考前对策-2-06.mp3",
        "N3听力考前对策-2-07.mp3",
        "N3听力考前对策-2-08.mp3",
        "N3听力考前对策-2-09.mp3",
        "N3听力考前对策-2-10.mp3",
        "N3听力考前对策-2-11.mp3",
        "N3听力考前对策-2-12.mp3",
        "N3听力考前对策-2-13.mp3",
        "N3听力考前对策-2-14.mp3",
        "N3听力考前对策-2-15.mp3",
        "N3听力考前对策-2-16.mp3",
        "N3听力考前对策-2-17.mp3",
        "N3听力考前对策-2-18.mp3",
        "N3听力考前对策-2-19.mp3",
        "N3听力考前对策-2-20.mp3",
        "N3听力考前对策-2-21.mp3",
        "N3听力考前对策-2-22.mp3",
        "N3听力考前对策-2-23.mp3",
        "N3听力考前对策-2-24.mp3",
        "N3听力考前对策-2-25.mp3",
        "N3听力考前对策-2-26.mp3",
        "N3听力考前对策-2-27.mp3",
        "N3听力考前对策-2-28.mp3",
        "N3听力考前对策-2-29.mp3",
        "N3听力考前对策-2-30.mp3",
        "N3听力考前对策-2-31.mp3",
        "N3听力考前对策-2-32.mp3",
        "N3听力考前对策-2-33.mp3",
        "N3听力考前对策-2-34.mp3",
        "N3听力考前对策-2-35.mp3",
        "N3听力考前对策-2-36.mp3",
        "N3听力考前对策-2-37.mp3",
        "N3听力考前对策-2-38.mp3",
        "N3听力考前对策-2-39.mp3",
        "N3听力考前对策-2-40.mp3",
        "N3听力考前对策-2-41.mp3",
        "N3听力考前对策-2-42.mp3",
        "N3听力考前对策-2-43.mp3",
        "N3听力考前对策-2-44.mp3",
        "N3听力考前对策-2-45.mp3",
    ]);
    const [curAudioRes, setCurAudioRes] = React.useState("空");
    const [title, setTitle] = React.useState("未上传");
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [audio, setAudio] = React.useState(null);
    const [moveRange, setMoveRange] = React.useState(10);
    const [barLength, setBarLength] = React.useState(0);
    const [barFinished, setBarFinished] = React.useState(0);
    const [phone, setPhone] = React.useState(false);
    // const [selectedRange, setSelectedRange] = React.useState(0.0);  // 点击 progressbar 根据比例音频播放到指定位置

    React.useEffect(() => {
        if (!(typeof window.orientation === "undefined")) {
            setPhone(true);
        }
    }, []);

    const fetchAudio = (res) => {
        fetch("/audio/" + res)
            .then((r) => r.blob())
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                console.log(url, audio)
                if (audio) {
                    audio.src = url;
                } else {
                    const newAudio = new Audio(url);
                    newAudio.oncanplay = () => {
                        setBarLength(newAudio.duration);
                    };
                    newAudio.ontimeupdate = () => {
                        setBarFinished(newAudio.currentTime);
                    };
                    setAudio(newAudio);
                    console.log(22, newAudio)
                }
                console.log(audio)
            });
    };

    document.onkeydown = (e) => {
        console.log(e.keyCode, audio);
        if (e.keyCode === 32 || e.keyCode === 38) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        } else if (e.keyCode === 37) {
            audio.currentTime -= moveRange;
        } else if (e.keyCode === 39) {
            audio.currentTime += moveRange;
        }
    };

    const handlePlay = (e) => {
        e.preventDefault();

        if (!audio) {
            alert("先选择音频文件");
            return;
        }

        setIsPlaying(true);
        audio.play();
    };

    const handlePause = (e) => {
        e.preventDefault();

        if (!audio) {
            alert("先选择音频文件");
            return;
        }

        setIsPlaying(false);
        audio.pause();
    };

    const handleForward = () => {
        if (audio) {
            audio.currentTime += moveRange;
            // console.log(
            //     moveRange,
            //     audio.played,
            //     audio.currentTime,
            //     audio.duration
            // );
        }
    };
    const handleBackward = () => {
        if (audio) {
            audio.currentTime -= moveRange;
            // console.log(
            //     moveRange,
            //     audio.played,
            //     audio.currentTime,
            //     audio.duration
            // );
        }
    };

    return (
        <div className="App">
            <select
                className="audio_data_select"
                value={curAudioRes}
                onChange={(e) => {
                    const cur = e.target.value;
                    if (cur === "空") {
                        setTitle("未选择/上传");
                        return;
                    }
                    console.log(1111)
                    setCurAudioRes(cur);
                    setTitle(cur);
                    setIsPlaying(false);
                    fetchAudio(cur);
                }}
            >
                {audioRes.map((a) => (
                    <option key={a} value={a}>
                        {a}
                    </option>
                ))}
            </select>

            <p className="audio_data_title">{title}</p>

            {/* {!phone && <Dropzone
                setTitle={setTitle}
                setAudio={setAudio}
                setBarLength={setBarLength}
                setBarFinished={setBarFinished}
            />} */}

            <ProgressBar
                barLength={barLength}
                barFinished={barFinished}
                setBarFinished={setBarFinished}
                audio={audio}
            />

            <p className="progress_info">
                <span>
                    {parseInt(barFinished / 60)}:{parseInt(barFinished % 60)}
                </span>
                {"--"}
                <span>
                    {parseInt(barLength / 60)}:{parseInt(barLength % 60)}
                </span>
            </p>

            <div className="play_control">
                <select
                    className="audio_rate_select"
                    value={curAudioRate}
                    onChange={(e) => {
                        // console.log(22, e.target.value)
                        if (!audio) {
                            alert("先选择音频文件");
                            return;
                        }
                        const rate = parseFloat(e.target.value);
                        // console.log(22, rate, audio)
                        audio.playbackRate = rate;
                        setCurAudioRate(rate);
                    }}
                >
                    {audioRate.map((a) => (
                        <option key={a} value={a}>
                            {a}倍
                        </option>
                    ))}
                </select>

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

            <FowardBackward
                handleForward={handleForward}
                handleBackward={handleBackward}
                moveRange={moveRange}
                setMoveRange={setMoveRange}
            />
        </div>
    );
}

export default App;
