'use client'

import { motion, useAnimation } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useInView } from 'react-intersection-observer'
import { useWindowSize } from 'react-use'
import { StockMarketSimulator } from './StockValue'

export const BarCharDetail = () => {
    const t = useTranslations('')
    const { width } = useWindowSize()

    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const duration = 3
    if (inView) {
        controls.start({ scaleY: 1, originY: 1 })
    }

    return (
        <div className='container mx-auto mb-4 flex w-full flex-col px-5 py-[44px] md:py-[80px] md:pb-[82px] xl:px-[340px]'>
            <div className='flex w-full flex-col gap-[60px] text-center'>
                <div className='flex w-full flex-col items-center justify-center gap-[30px] text-center'>
                    <div className='flex flex-col px-[13.5px] py-2.5'>
                        <p className='text-3xl font-semibold md:text-4xls'>
                            {t('affiliates_monthly_profit')}
                        </p>
                    </div>
                    <span className='p-2.5 text-basem md:w-[482px]'>
                        {t('affiliates_program_description')}
                    </span>
                </div>
                <div className='flex w-full items-end justify-center' ref={ref}>
                    <div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-center text-2xl font-semibold md:text-4xls'>
                                {'$'}
                                <StockMarketSimulator
                                    initialValue={100}
                                    fluctuationRange={10}
                                    intervalMs={2000}
                                />
                            </div>
                            <span className='text-smxm md:text-lg'>
                                {t('per_month')}
                            </span>
                        </div>
                        <motion.img
                            className='overflow-hidden'
                            src={
                                width > 768
                                    ? '/barpc1.png'
                                    : '/smalTickBar1.png'
                            }
                            alt='image-animated'
                            initial={{ scaleY: 0, originY: 1 }}
                            animate={controls}
                            transition={{
                                duration: duration,
                                ease: 'easeInOut'
                            }}
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-center text-2xl font-semibold md:text-4xls'>
                                {'$'}
                                <StockMarketSimulator
                                    initialValue={200}
                                    fluctuationRange={10}
                                    intervalMs={2000}
                                />
                            </div>
                            <span className='text-smxm md:text-lg'>
                                {t('per_month')}
                            </span>
                        </div>
                        <motion.img
                            className='overflow-hidden'
                            src={
                                width > 768
                                    ? '/barpc2.png'
                                    : '/smalTickBar2.png'
                            }
                            alt='image-animated'
                            initial={{ scaleY: 0, originY: 1 }}
                            animate={controls}
                            transition={{
                                duration: duration,
                                ease: 'easeInOut'
                            }}
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-center text-2xl font-semibold md:text-4xls'>
                                {'$'}
                                <StockMarketSimulator
                                    initialValue={300}
                                    fluctuationRange={10}
                                    intervalMs={2000}
                                />
                            </div>
                            <span className='text-smxm md:text-lg'>
                                {t('per_month')}
                            </span>
                        </div>
                        <motion.img
                            className='overflow-hidden'
                            src={
                                width > 768
                                    ? '/barpc3.png'
                                    : '/smalTickBar3.png'
                            }
                            alt='image-animated'
                            initial={{ scaleY: 0, originY: 1 }}
                            animate={controls}
                            transition={{
                                duration: duration,
                                ease: 'easeInOut'
                            }}
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
