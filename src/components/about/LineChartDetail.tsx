import { useTranslations } from 'next-intl'

export const LineChartDetail = () => {
    const t = useTranslations('')

    return (
        <div className='w-full bg-black-darkBlack'>
            <div className='container mx-auto flex w-full flex-col gap-[50px] px-5 py-[44px] md:gap-[72px] md:py-[90px] xl:px-[235px]'>
                <div className='flex flex-col gap-[32px]'>
                    <div className='flex w-full flex-col items-center gap-[30px] text-center text-white'>
                        <p className='text-3xl font-semibold md:text-4xl'>
                            {t('trades_per_day')}
                        </p>
                        <span className='text-basem te w-[430px]'>
                            {t('trades_per_day_description')}
                        </span>
                    </div>
                    <div className='hidden flex-col items-center gap-[30px] md:flex md:flex-row'>
                        <div className='flex flex-none flex-col text-right'>
                            <p className='text-2xl text-white'>14 150</p>
                            <span className='break-keep text-6xl font-light text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                                14 150
                            </span>
                        </div>
                        <div className='w-full border-b border-gray-lightGray'></div>
                        <div className='flex flex-none flex-col text-left'>
                            <p className='text-2xl text-white'>23 456</p>
                            <span className='text-6xl font-light text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                                23 456
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex w-full flex-col items-center justify-center gap-10'>
                    <span className='text-4xl font-semibold text-white'>
                        {t('trading_volume_per_month')}
                    </span>
                    <div className='flex flex-col'>
                        <img
                            src='/images/app/lineChart.png'
                            alt='chart'
                            className='max-h-[320px] w-full object-fill  md:w-[620px]'
                        />
                        <div className='flex w-full flex-row justify-between px-10 text-lg text-white'>
                            <span className='text-lg'>{t('may')}</span>
                            <span className='text-lg'>{t('june')}</span>
                            <span className='text-lg'>{t('muly')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
