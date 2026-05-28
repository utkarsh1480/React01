import { useRef } from 'react'


function Video() {

    const videoRef = useRef(null);
    function handlePlay() {
        videoRef.current.play();
    }
    function handlePause() {
        videoRef.current.pause();
    }
    function handleStop() {
        videoRef.current.currentTime = 0;
    }
    function handleplushTen() {
        videoRef.current.currentTime+=10;
    }
    function handelbackTen() {
        videoRef.current.currentTime = Math.max(
            0,
            videoRef.current.currentTime - 10
        );
       
    }
    return (
      <>
            <video ref={videoRef} src='/song.mp4' width="600" height="400"></video>
            
      <div>
              <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
              <button onClick={handleStop}>Restart</button>
              <button onClick={handleplushTen}>+10</button>
                <button onClick={handelbackTen}>Restart</button>
                <button>Width</button>
            </div>
        </>
  )
}

export default Video