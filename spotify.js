import React, {useState} from 'react'

function spotify() {
  const [currentSong, setCurrentSong] = useState('')
  const [play, setPlay] = useState(false)

  const handlePlayPause = () => {
    setPlay(!play)
  };
  
  return (
    <div>
        <div>
            Currently playing : {currentSong}
        </div>
        <div>{play ? (
            <div>
                <button onClick={handlePlayPause}>
                    Pause
                </button>
                
            </div>
        ) : (
            <div onClick={handlePlayPause}>
                Play
            </div>
        )}</div>

    </div>
  )
}

export default spotify