'use client'
import { Colors } from '@/assets/colors'
import { mdiPause, mdiPlay } from '@mdi/js'
import Icon from '@mdi/react'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { useWindowSize } from 'react-use'
import { IconBase } from '../custom/IconBase'
import VideoComponent from '../custom/VideoComponent'
import { Button } from '../ui/button'

export const Hero = () => {
    const t = useTranslations('')
    const { width } = useWindowSize()
    const [start, setStart] = useState(false)
    const videoRef = React.useRef<any>(null)

    const handleOpenVideo = () => {
        if (start) {
            setStart(!start)
            videoRef.current?.stop()
        } else {
            setStart(!start)
            videoRef.current?.play()
        }
    }

    return (
        <div
            className={`relative mb-[92px] flex h-[810px] w-full flex-col bg-black/35 bg-cover bg-center`}
        >
            <div className='h-[100px] flex-none'></div>
            <div className='flex flex-col items-center gap-[72px] pb-[60px] pt-[150px]'>
                <div className='z-10 flex w-full flex-col items-center justify-center gap-[61px] md:gap-[39px]'>
                    <div className='flex flex-col gap-[39px] text-center'>
                        <p className='text-xss font-semibold  tracking-[0.5em] text-white md:text-base md:font-extrabold'>
                            {t('home_welcome').toUpperCase()}
                        </p>
                        <div className='flex flex-col'>
                            <span className='text-3xl font-bold text-white md:text-5xl'>
                                {t('no_spreads').toUpperCase()}
                            </span>
                            <span className='text-3xl font-bold text-white md:text-5xl'>
                                {t('instant_withdrawals').toUpperCase()}
                            </span>
                            <span className='text-3xl font-bold text-white md:text-5xl'>
                                {t('no_waiting').toUpperCase()}
                            </span>
                        </div>
                    </div>

                    <div className=' flex flex-col gap-[19px] md:flex-row'>
                        <Button
                            size={width < 1024 ? 'sm' : 'md'}
                            variant={'whiteOutline'}
                        >
                            {t('bt_home_free_account')}
                        </Button>
                        <Button
                            size={width < 1024 ? 'sm' : 'md'}
                            variant={'primaryShadow'}
                        >
                            {width > 1024 && (
                                <IconBase
                                    icon='candle'
                                    color={Colors.white}
                                    size={'24'}
                                />
                            )}
                            {t('bt_home_trade_now')}
                        </Button>
                    </div>
                </div>

                <div
                    onClick={() => {
                        handleOpenVideo()
                    }}
                    className='z-10 h-[100px] w-[100px] cursor-pointer rounded-full bg-blue/25 p-4'
                >
                    <div className='flex h-full w-full items-center justify-center rounded-full bg-blue'>
                        <Icon
                            className='text-white'
                            path={!start ? mdiPlay : mdiPause}
                            size={'24px'}
                        />
                    </div>
                </div>
            </div>

            <VideoComponent ref={videoRef} />
        </div>
    )
}
