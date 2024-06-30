import { useTranslations } from 'next-intl'

export const Ambassadors = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col gap-[219px] px-5 py-[44px]  md:gap-[133px] md:py-[94px]'>
            <div className='flex w-full flex-col gap-[30px] text-center md:gap-[64px]'>
                <div className='flex w-full flex-col items-center justify-center gap-[30px] text-center'>
                    <p className='text-3xl font-semibold md:text-4xl'>
                        Title Section Delirium
                    </p>
                    <span className='md:w-1/2'>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod.
                    </span>
                </div>
                <div className='flex flex-col justify-center gap-[30px] md:flex-row md:justify-between'>
                    <div className='flex flex-col gap-4 text-center'>
                        <span className='font-semibold'>2012</span>
                        <span className='text-5xl font-medium text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                            $134 580
                        </span>
                        <p className='text-lg'>{t('per_month')}</p>
                    </div>
                    <div className='flex flex-col gap-4 text-center'>
                        <span className='font-semibold'>2018</span>
                        <span className='text-5xl font-medium text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                            $6 827 280
                        </span>
                        <p className='text-lg'>{t('per_month')}</p>
                    </div>
                    <div className='flex flex-col gap-4 text-center'>
                        <span className='font-semibold'>2023</span>
                        <span className='text-5xl font-medium text-blue drop-shadow-[0_30px_40px_#0055FF80]'>
                            $20 375 097
                        </span>
                        <p className='text-lg'>{t('per_month')}</p>
                    </div>
                </div>
            </div>
            <div className='bg-white relative flex  flex-col items-center justify-center rounded-xl px-5 py-[80px] text-2xl font-semibold md:py-[44px]'>
                <span className='text-center'>
                    {t('ambassadors_worldwide')}
                </span>
                <img
                    src='/images/app/china.png'
                    alt='ambassador'
                    className='- absolute -top-16 left-10'
                />
                <img
                    src='/images/app/brazil.png'
                    alt='ambassador'
                    className='- absolute -top-[50%] right-[50%]'
                />
                <img
                    src='/images/app/france.png'
                    alt='ambassador'
                    className='- absolute -top-10 right-0'
                />
                <img
                    src='/images/app/germany.png'
                    alt='ambassador'
                    className='- absolute -bottom-20 right-[30%]'
                />
                <img
                    src='/images/app/italy.png'
                    alt='ambassador'
                    className='- absolute -bottom-10 left-10'
                />
                <img
                    src='/images/app/portugal.png'
                    alt='ambassador'
                    className='- absolute -top-5 right-[50%]'
                />
                <img
                    src='/images/app/spain.png'
                    alt='ambassador'
                    className='- absolute -bottom-10 left-10'
                />
                <img
                    src='/images/app/united-kingdom.png'
                    alt='ambassador'
                    className='- absolute -bottom-10 right-10'
                />
            </div>
        </div>
    )
}
