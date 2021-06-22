
function polyfillDecodeAudioData(audioContext, arrayBuffer) {
  try {
    // new api
    return audioContext.decodeAudioData(arrayBuffer);
  } catch {
    // old api
    return new Promise((resolve, reject) => {
      audioContext.decodeAudioData(
        arrayBuffer,
        function (audioBuffer) {
          resolve(audioBuffer);
        }, function (error) {
          reject(error);
        });
    });
  }
}

async function decodeAudioData(arrayBuffer) {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();
  const audioBuffer = await polyfillDecodeAudioData(audioContext, arrayBuffer);
  return audioBuffer;
}