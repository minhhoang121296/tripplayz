import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const VideoComponent = ({}, ref: any) => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        setIsPlaying(true)
        if (videoRef.current) {
            videoRef.current.play()
        }
    }

    const handlePause = () => {
        setIsPlaying(false)
        if (videoRef.current) {
            videoRef.current.pause()
        }
    }

    const handleStop = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }
    }

    // Expose methods through useImperativeHandle
    useImperativeHandle(ref, () => ({
        play: handlePlay,
        pause: handlePause,
        stop: handleStop
    }))

    return (
        <div className='absolute h-full w-full'>
            {!isPlaying ? (
                <div className='flex h-full w-full flex-col'>
                    <img
                        src='/images/app/hero.png'
                        alt='Video Thumbnail'
                        className='h-full w-full object-cover'
                    />
                </div>
            ) : (
                <video
                    ref={videoRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill'
                    }}
                    autoPlay
                    muted
                    loop
                    id='myVideo'
                >
                    <source
                        src='https://drive.google.com/file/d/185scqpgPQHDCplGTvPeF_laHLaJS7hI9/view?usp=sharing'
                        type='video/mp4'
                    />
                </video>
            )}
        </div>
    )
}

export default forwardRef(VideoComponent)
