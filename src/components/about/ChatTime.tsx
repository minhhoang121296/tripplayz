'use client'

import { useTranslations } from 'next-intl'
import AnimatedNumberOnScroll from '../ui/AnimatedNumberOnScroll'

export const ChatTime = () => {
    const t = useTranslations('')

    return (
        <div className='w-full bg-black-darkBlack'>
            <div className='container mx-auto flex w-full flex-col gap-[50px]  py-[44px] md:gap-[62px] md:py-[142.5px] xl:px-[218.5px]'>
                <div className='flex w-full flex-col gap-[30px] px-5 text-center text-white md:gap-[80px]'>
                    <p className='text-3xl font-semibold md:text-4xl'>
                        {t('responding_to_inquiries')}
                    </p>
                </div>
                <div className='flex flex-col items-center gap-[55px] px-2.5 md:flex md:flex-row md:gap-[55px]'>
                    <div className='flex flex-1 flex-col gap-4 text-center'>
                        <div className='pb-6 text-3xl text-white md:text-4xl'>
                            {t('chat')}
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-row border-y border-[#949494]/50 py-[22px] text-white'>
                                <span className='font-lightmd:text-lg  flex-1 font-semibold'>
                                    {t('may')}
                                </span>
                                <span className='flex-1 text-lg font-light md:font-semibold'>
                                    {t('june')}
                                </span>
                                <span className='flex-1 text-lg font-light md:font-semibold'>
                                    {t('muly')}
                                </span>
                            </div>
                            <div className='flex flex-row border-b border-[#949494]/50 pb-6 pt-1'>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-6xl text-blue drop-shadow-[0_4px_40px_#0055FF80] md:text-7xl'>
                                        <AnimatedNumberOnScroll
                                            duration={3000}
                                            startNumber={0}
                                            targetNumber={2}
                                        />
                                    </span>
                                    <span className='text-lg text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-6xl text-blue drop-shadow-[0_4px_40px_#0055FF80] md:text-7xl'>
                                        <AnimatedNumberOnScroll
                                            duration={3000}
                                            startNumber={0}
                                            targetNumber={48}
                                        />
                                    </span>
                                    <span className='text-lg text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-6xl text-blue drop-shadow-[0_4px_40px_#0055FF80] md:text-7xl'>
                                        <AnimatedNumberOnScroll
                                            duration={3000}
                                            startNumber={0}
                                            targetNumber={60}
                                        />
                                    </span>
                                    <span className='text-lg text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                            </div>
                            <div className='pt-[34px] text-center text-xsm text-white md:text-basem '>
                                {t('support_team_efficiency')}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col gap-4 text-center'>
                        <div className='pb-6 text-3xl text-white md:text-4xl'>
                            {t('Email')}
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-row border-y border-[#949494]/50 py-[22px] text-white'>
                                <span className='flex-1 text-lg font-light md:font-semibold'>
                                    {t('may')}
                                </span>
                                <span className='flex-1 text-lg font-light md:font-semibold'>
                                    {t('june')}
                                </span>
                                <span className='flex-1 text-lg font-light md:font-semibold'>
                                    {t('muly')}
                                </span>
                            </div>
                            <div className='flex flex-row border-b border-[#949494]/50 pb-6 pt-1 '>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-6xl text-blueGray drop-shadow-[0_4px_40px_#A5BAE480] md:text-7xl'>
                                        <AnimatedNumberOnScroll
                                            duration={3000}
                                            startNumber={0}
                                            targetNumber={2}
                                        />
                                    </span>
                                    <span className='text-lg text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-6xl text-blueGray drop-shadow-[0_4px_40px_#A5BAE480] md:text-7xl'>
                                        <AnimatedNumberOnScroll
                                            duration={3000}
                                            startNumber={0}
                                            targetNumber={48}
                                        />
                                    </span>
                                    <span className='text-lg text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-6xl text-blueGray drop-shadow-[0_4px_40px_#A5BAE480] md:text-7xl'>
                                        <AnimatedNumberOnScroll
                                            duration={3000}
                                            startNumber={0}
                                            targetNumber={60}
                                        />
                                    </span>
                                    <span className='text-lg text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                            </div>
                            <div className='pt-[34px] text-center text-xsm text-white md:text-basem '>
                                {t('email_response_time')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
