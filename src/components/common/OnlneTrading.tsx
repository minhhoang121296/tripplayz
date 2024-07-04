import { useTranslations } from 'next-intl'

export const OnlneTrading = () => {
    const t = useTranslations('')
    return (
        <div className='w-full bg-gradient-to-r from-blue to-black-darkBlack'>
            <div className='container mx-auto flex w-full flex-col items-start gap-[61px] pb-[42px] pt-[71px] md:flex-row xl:px-[190px]'>
                <div className='flex flex-col gap-5 md:w-[525px]'>
                    <span className='text-4xls font-semibold text-white'>
                        {t('online_trading_platform')}
                    </span>
                    <span className='text-xl text-white'>
                        {t('cfd_offerings')}
                    </span>
                    <span className='text-basem text-white'>
                        {t('brand_growth')}
                    </span>
                    <span className='text-basem text-white'>
                        {t('company_growth')}
                    </span>
                    <span className='text-basem text-white'>
                        {t('refined_offerings')}
                    </span>
                </div>
                <div className='flex-1 p-2.5'>
                    <img
                        className='h-full w-full object-contain'
                        src={'/images/app/app.png'}
                        alt='app'
                    />
                </div>
            </div>
        </div>
    )
}
