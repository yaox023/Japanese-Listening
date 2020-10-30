import React from "react";

export default function Dropzone({
    setTitle,
    setAudio,
    setBarLength,
    setBarFinished,
}) {
    const [bgcolor, setBgcolor] = React.useState("#fff");
    const [dropMsg, setDropMsg] = React.useState("拖放到此处上传");

    const handleOnDragEnter = (e) => {
        setBgcolor("rgb(230,230,230)");
        setDropMsg("松开鼠标上传");
    };
    const handleOnDragLeave = (e) => {
        setBgcolor("rgb(250,250,250)");
        setDropMsg("拖放到此处上传");
    };

    const handleOnDragOver = (e) => {
        e.preventDefault();
    };

    const handleOnDrop = (e) => {
        e.preventDefault();

        setBgcolor("rgb(250,250,250)");
        setDropMsg("拖放到此处上传");

        const file = e.dataTransfer.files[0];
        setTitle(file.name);

        const reader = new FileReader();
        reader.onerror = () => {
            console.log("读取文件出错！");
        };
        reader.onload = () => {
            // console.log("读取完成，内容为："+reader.result)
            const audio = new Audio(reader.result);
            audio.oncanplay = () => {
                setBarLength(audio.duration);
            };
            audio.ontimeupdate = () => {
                setBarFinished(audio.currentTime);
            };
            setAudio(audio);
        };

        reader.readAsDataURL(file);
        // reader.readAsText(file);
    };
    return (
        <div
            className="dropzone_container"
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            onDragEnter={handleOnDragEnter}
            onDragLeave={handleOnDragLeave}
            style={{ backgroundColor: bgcolor }}
        >
            {dropMsg}
        </div>
    );
}
