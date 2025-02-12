'use client'

import { useTranslations } from 'next-intl'
import { useWindowSize } from 'react-use'
import AnimatedNumberOnScroll from '../ui/AnimatedNumberOnScroll'
import { ApexChartRealTime } from '../ui/charts/animationLineChartRealTime'

export const LineChartDetail = () => {
    const t = useTranslations('')
    const { width } = useWindowSize()

    return (
        <div className='w-full bg-black-darkBlack'>
            <div className='container mx-auto flex w-full flex-col gap-[50px]  py-[44px] md:gap-[72px] md:py-[90px] xl:px-[235px]'>
                <div className='flex flex-col gap-[32px] px-5'>
                    <div className='flex w-full flex-col items-center gap-[30px] text-center text-white'>
                        <p className='text-center text-3xl font-semibold md:text-4xl'>
                            {t('about_trade_day')}
                        </p>
                        <span className='max-w-[430px] text-basem '>
                            {t('about_trade_day_text')}
                        </span>
                    </div>
                    <div className='hidden flex-col items-center gap-[30px] md:flex md:flex-row'>
                        <div className='flex flex-none flex-col text-right'>
                            <span className='text-2xl text-white'>
                                <AnimatedNumberOnScroll
                                    duration={3000}
                                    startNumber={14000}
                                    targetNumber={14150}
                                />
                            </span>
                            <div className='flex break-keep text-6xl font-light text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                                <AnimatedNumberOnScroll
                                    duration={3000}
                                    startNumber={14130}
                                    targetNumber={14150}
                                />
                            </div>
                        </div>
                        <div className='w-full border-b border-gray-lightGray'></div>
                        <div className='flex flex-none flex-col text-left'>
                            <span className='text-2xl text-white'>
                                <AnimatedNumberOnScroll
                                    duration={3000}
                                    startNumber={23436}
                                    targetNumber={23456}
                                />
                            </span>
                            <div className='flex text-6xl font-light text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                                <AnimatedNumberOnScroll
                                    duration={3000}
                                    startNumber={23436}
                                    targetNumber={23456}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full flex-col items-center justify-center gap-10'>
                    <span className='hidden text-4xl font-semibold text-white md:flex'>
                        {t('about_trade_volume')}
                    </span>
                    <div className='flex w-full flex-col items-center md:w-[620px]'>
                        <ApexChartRealTime
                            width={width < 768 ? '100%' : 620}
                            height={350}
                        />
                        <div className='flex w-full flex-row justify-between px-10 text-lg text-white'>
                            <span className='text-lg'>
                                {t('about_trade_volume_may')}
                            </span>
                            <span className='text-lg'>
                                {t('about_trade_volume_june')}
                            </span>
                            <span className='text-lg'>
                                {t('about_trade_volume_july')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
