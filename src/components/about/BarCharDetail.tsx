import { useTranslations } from 'next-intl'

export const BarCharDetail = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col px-5 py-[44px] md:py-[80px] md:pb-[82px] xl:px-[340px]'>
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
                <div className='flex w-full justify-center'>
                    <img
                        src='/images/app/barchart.png'
                        alt='chart'
                        className='h-[564px] w-full'
                    />
                </div>
            </div>
        </div>
    )
}
