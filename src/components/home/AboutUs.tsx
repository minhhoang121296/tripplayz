import { useTranslations } from 'next-intl'

export const AboutUs = () => {
    const t = useTranslations('')
    return (
        <div className='container mx-auto mb-[151px] flex w-full flex-col-reverse gap-[70px] px-5 md:flex-row xl:px-[200px]'>
            <div className='flex flex-1 flex-col gap-10'>
                <span className='md:text-4xls text-3xl font-semibold'>
                    {t('About')}
                </span>
                <div className='text-basem flex flex-col gap-[20px]'>
                    <span>{t('company_overview')}</span>
                    <span>{t('our_differentiators')}</span>
                    <span>{t('our_commitment')}</span>
                </div>
            </div>
            <div className='flex-1 -translate-y-20'>
                <img
                    src='/images/app/phone.png'
                    alt='enjoy'
                    className='h-[400px] w-[540px]'
                />
            </div>
        </div>
    )
}
