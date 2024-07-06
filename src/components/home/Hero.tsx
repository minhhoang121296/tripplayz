'use client'
import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { useWindowSize } from 'react-use'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

export const Hero = () => {
    const t = useTranslations('')
    const { width } = useWindowSize()

    return (
        <div
            className={` mb-[92px] flex h-[810px] flex-col bg-black/35 bg-cover bg-center`}
        >
            <div className='h-[100px] flex-none'></div>
            <div className='flex h-full w-full flex-col items-center justify-center gap-[61px] md:gap-[39px]'>
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

                <div className='flex flex-col gap-[19px] md:flex-row'>
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
        </div>
    )
}
