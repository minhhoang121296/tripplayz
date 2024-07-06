'use client'

import { useTranslations } from 'next-intl'

export const AboutUs = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto mb-[151px] flex w-full flex-col-reverse gap-10 md:flex-row md:gap-[70px] xl:px-[200px]'>
            <div className='flex flex-1 flex-col gap-10 px-5'>
                <span className='text-3xl font-semibold md:text-4xls'>
                    {t('home_about_us')}
                </span>
                <div className='flex flex-col gap-[20px] text-basem'>
                    <span>{t('company_overview')}</span>
                    <span>{t('our_differentiators')}</span>
                    <span>{t('our_commitment')}</span>
                </div>
            </div>
            <div className='flex-1 md:-translate-y-20'>
                <img
                    src='/images/app/phone.png'
                    alt='enjoy'
                    className='h-[266.67px] w-[540px] md:h-[400px]'
                />
            </div>
        </div>
    )
}
