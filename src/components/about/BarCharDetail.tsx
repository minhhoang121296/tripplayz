'use client'

import { motion, useAnimation } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useInView } from 'react-intersection-observer'

export const BarCharDetail = () => {
    const t = useTranslations('')

    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const duration = 3;
    if (inView) {
        controls.start({ scaleY: 1, originY: 1 })
    }

    return (
        <div className='container mx-auto mb-4 flex w-full flex-col px-5 py-[44px] md:py-[80px] md:pb-[82px] xl:px-[340px]'>
            <div className='flex w-full flex-col text-center'>
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
                        <div>animate Number</div>
                        <motion.img
                            className='overflow-hidden'
                            src='/barpc1.png'
                            alt='image-animated'
                            initial={{ scaleY: 0, originY: 1 }}
                            animate={controls}
                            transition={{ duration: duration, ease: 'easeInOut' }}
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                    <div>
                        <div>animate Number</div>
                        <motion.img
                            className='overflow-hidden'
                            src='/barpc2.png'
                            alt='image-animated'
                            initial={{ scaleY: 0, originY: 1 }}
                            animate={controls}
                            transition={{ duration: duration, ease: 'easeInOut' }}
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                    <div>
                        <div>animate Number</div>
                        <motion.img
                            className='overflow-hidden'
                            src='/barpc3.png'
                            alt='image-animated'
                            initial={{ scaleY: 0, originY: 1 }}
                            animate={controls}
                            transition={{ duration: duration, ease: 'easeInOut' }}
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
