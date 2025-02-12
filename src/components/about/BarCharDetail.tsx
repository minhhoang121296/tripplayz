'use client'

import { motion, useAnimation } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useInView } from 'react-intersection-observer'
import { useWindowSize } from 'react-use'

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
        <div className='container mx-auto mb-4 flex w-full flex-col  py-[44px] md:py-[80px] md:pb-[82px] xl:px-[340px]'>
            <div className='flex w-full flex-col gap-[60px]  text-center'>
                <div className='flex w-full flex-col items-center justify-center gap-[30px] px-5 text-center'>
                    <div className='flex flex-col px-[13.5px] py-2.5'>
                        <p className='text-3xl font-semibold md:text-4xls'>
                            {t('about_affiliates')}
                        </p>
                    </div>
                    <span className='text-basem md:w-[482px]'>
                        {t('about_affiliates_text')}
                    </span>
                </div>
                <div
                    className='flex w-full items-end justify-center px-[26px]'
                    ref={ref}
                >
                    <div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-center text-2xl font-semibold md:text-4xls'>
                                {'$XX'}
                            </div>
                            <span className='text-smxm md:text-lg'>
                                {t('about_affiliates_month')}
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
                                {'$XX'}
                            </div>
                            <span className='text-smxm md:text-lg'>
                                {t('about_affiliates_month')}
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
                                {'$XX'}
                            </div>
                            <span className='text-smxm md:text-lg'>
                                {t('about_affiliates_month')}
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
