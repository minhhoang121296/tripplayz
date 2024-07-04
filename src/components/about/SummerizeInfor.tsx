import { useTranslations } from 'next-intl'
import { StockMarketSimulator } from './StockValue'

export const SummerizeInfor = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col items-center gap-[50px] px-5 py-[44px] md:gap-[62px] md:pb-[119px] md:pt-[94px] xl:px-[300px]'>
            <div className='flex w-full flex-col gap-[30px] text-center md:w-[430px]'>
                <p className='text-3xl font-semibold md:text-4xls'>
                    {t('support_team')}
                </p>
                <p className='text-basem'>{t('support_team_description')}</p>
            </div>
            <div className='flex w-full flex-col justify-center gap-[30px] md:flex-row md:gap-[60px]'>
                <div className='flex flex-1 flex-col gap-[14px] text-center'>
                    <div className=' flex justify-center text-7xl text-blue drop-shadow-[0_4px_40px_#0055FF80] md:text-9xl'>
                        {'+'}
                        <StockMarketSimulator
                            initialValue={5}
                            fluctuationRange={10}
                            intervalMs={2000}
                        />
                    </div>
                    <p className='text-lg font-semibold'>
                        {t('support_members')}
                    </p>
                </div>
                <div className='flex flex-1 flex-col gap-[14px] text-center'>
                    <div className=' flex justify-center text-7xl text-blue drop-shadow-[0_4px_40px_#0055FF80] md:text-9xl'>
                        {'+'}
                        <StockMarketSimulator
                            initialValue={39}
                            fluctuationRange={10}
                            intervalMs={2000}
                        />
                    </div>
                    <p className='text-lg font-semibold'>
                        {t('support_members')}
                    </p>
                </div>
                <div className='flex flex-1 flex-col gap-[14px] text-center'>
                    <div className='flex justify-center text-7xl text-blue drop-shadow-[0_4px_40px_#0055FF80] md:text-9xl'>
                        {'+'}
                        <StockMarketSimulator
                            initialValue={79}
                            fluctuationRange={10}
                            intervalMs={2000}
                        />
                    </div>
                    <p className='text-lg font-semibold'>
                        {t('support_members')}
                    </p>
                </div>
            </div>
        </div>
    )
}
