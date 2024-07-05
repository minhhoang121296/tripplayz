'use client'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useWindowSize } from 'react-use'
import AnimatedNumberOnScroll from '../ui/AnimatedNumberOnScroll'

export const Ambassadors = () => {
    const t = useTranslations('')
    const { width } = useWindowSize()

    return (
        <div className='container mx-auto flex w-full flex-col gap-[219px] px-5 pb-[209px] pt-[90px]  md:gap-[133px]  md:py-[44px] md:pb-[133px] md:pt-[100px] xl:px-[188px]'>
            <div className='flex w-full flex-col gap-[30px] text-center md:gap-[64px]'>
                <div className='flex w-full flex-col items-center justify-center gap-[30px] text-center'>
                    <p className='text-3xl font-semibold md:text-4xls'>
                        {t('accounts_registered')}
                    </p>
                    <span className='text-basem md:w-[430px]'>
                        {t('active_users_growth')}
                    </span>
                </div>
                <div className='flex flex-col justify-center gap-[30px] md:flex-row md:gap-[60px]'>
                    <div className='flex flex-col gap-5'>
                        <span className='text-center text-lg  font-semibold'>
                            {t('may')}
                        </span>
                        <span className='text-center text-5xl font-medium text-blue  drop-shadow-[0_4px_40px_#0055FF80]'>
                            <AnimatedNumberOnScroll
                                duration={3000}
                                startNumber={134560}
                                targetNumber={134580}
                            />
                        </span>
                        <p className='text-center  text-lg'>{t('per_month')}</p>
                    </div>
                    <div className='flex flex-col gap-5 text-center'>
                        <span className='text-lg font-semibold'>
                            {t('june')}
                        </span>
                        <span className='text-5xl font-medium text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                            <AnimatedNumberOnScroll
                                duration={3000}
                                startNumber={6827250}
                                targetNumber={6827280}
                            />
                        </span>
                        <p className='text-lg'>{t('per_month')}</p>
                    </div>
                    <div className='flex flex-col gap-5 text-center'>
                        <span className='text-lg font-semibold'>
                            {t('muly')}
                        </span>
                        <span className='text-5xl font-medium text-blue drop-shadow-[0_30px_40px_#0055FF80]'>
                            <AnimatedNumberOnScroll
                                duration={3000}
                                startNumber={20375087}
                                targetNumber={20375097}
                            />
                        </span>
                        <p className='text-lg'>{t('per_month')}</p>
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col  items-center justify-center rounded-xl bg-white px-5 py-[80px] text-2xl font-semibold md:py-[44px]'>
                <span className='text-center text-2xl font-semibold'>
                    {t('ambassadors_worldwide')}
                </span>
                <img
                    src='/images/app/china.png'
                    alt='ambassador'
                    className={cn(
                        'absolute',
                        { '-top-16 left-10': width < 768 },
                        { '-top-[10%] right-[30%]': width >= 768 }
                    )}
                />
                <img
                    src='/images/app/brazil.png'
                    alt='ambassador'
                    className={cn(
                        'absolute',
                        { '-top-[50%] right-[45%]': width < 768 },
                        { 'right-[20%] top-[10%]': width >= 768 }
                    )}
                />
                <img
                    src='/images/app/france.png'
                    alt='ambassador'
                    className={cn(
                        'absolute',
                        { '-top-10 right-0': width < 768 },
                        { '-right-10 top-[60%]': width >= 768 }
                    )}
                />
                <img
                    src='/images/app/germany.png'
                    alt='ambassador'
                    className={cn(
                        'absolute',
                        { '-bottom-20 right-[30%]': width < 768 },
                        { '-bottom-[10%] left-[17%]': width > 768 }
                    )}
                />
                <img
                    src='/images/app/italy.png'
                    alt='ambassador'
                    className={cn(
                        'absolute',
                        { '-bottom-10 left-10': width < 768 },
                        { '-left-[1%] top-[30%]': width >= 768 }
                    )}
                />
                <img
                    src='/images/app/portugal.png'
                    alt='ambassador'
                    className={cn(
                        'absolute',
                        { '-top-5 right-[50%]': width < 768 },
                        { '-bottom-[40%] right-[25%]': width >= 768 }
                    )}
                />
                <img
                    src='/images/app/spain.png'
                    alt='ambassador'
                    className={cn(
                        'absolute',
                        { '-bottom-10 left-10': width < 768 },
                        { '-top-[10%] left-[10%]': width >= 768 }
                    )}
                />
                <img
                    src='/images/app/united-kingdom.png'
                    alt='ambassador'
                    className={cn(
                        'absolute',
                        { '-bottom-10 right-10': width < 768 },
                        { '-top-[10%] left-[25%]': width >= 768 }
                    )}
                />
            </div>
        </div>
    )
}
