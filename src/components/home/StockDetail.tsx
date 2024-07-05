'use client'
import { TRADING_TYPE } from '@/@types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'
import { TableTabDetail } from './components/TableTabDetail'

export const StockDetail = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto mb-[105px] flex w-full flex-col gap-[34px]'>
            <Tabs defaultValue='forex' className='w-full'>
                <TabsList className='m-0 flex flex-row overflow-auto px-5 xl:px-[176px]'>
                    <TabsTrigger
                        className='flex-1 px-2.5 py-[19px] text-left text-lg'
                        value='forex'
                    >
                        {t('forex')}
                    </TabsTrigger>
                    <TabsTrigger
                        className='flex-1 px-2.5 py-[19px] text-left text-lg'
                        value='crypto'
                    >
                        {t('crypto')}
                    </TabsTrigger>
                    <TabsTrigger
                        className='flex-1 px-2.5 py-[19px] text-left text-lg'
                        value='stocks'
                    >
                        {t('stocks')}
                    </TabsTrigger>
                    <TabsTrigger
                        className='flex-1 px-2.5 py-[19px] text-left text-lg'
                        value='commodities'
                    >
                        {t('commodities')}
                    </TabsTrigger>
                    <TabsTrigger
                        className='flex-1 px-2.5 py-[19px] text-left text-lg'
                        value='etfs'
                    >
                        {t('etfs')}
                    </TabsTrigger>
                </TabsList>
                <TabsContent className='mt-0 xl:px-[134px]' value='forex'>
                    <TableTabDetail type={TRADING_TYPE.FOREX} />
                </TabsContent>
                <TabsContent className='mt-0 xl:px-[134px]' value='crypto'>
                    <TableTabDetail type={TRADING_TYPE.CRYPTO} />
                </TabsContent>
                <TabsContent className='mt-0 xl:px-[134px]' value='stocks'>
                    <TableTabDetail type={TRADING_TYPE.STOCK} />
                </TabsContent>
                <TabsContent className='mt-0 xl:px-[134px]' value='commodities'>
                    <TableTabDetail type={TRADING_TYPE.COMMODITIES} />
                </TabsContent>
                <TabsContent className='mt-0 xl:px-[134px]' value='etfs'>
                    <TableTabDetail type={TRADING_TYPE.ETF} />
                </TabsContent>
            </Tabs>
            <div className='flex flex-col gap-10 px-5 md:flex-row xl:px-[134px]'>
                <span className='text-xs text-black/75'>
                    {t('past_performance_disclaimer')}
                </span>
                {/* <Button className='gap-2' size={'lg'} variant={'outline'}>
                    <span>{t('see_all_options')}</span>
                    <ArrowRight />
                </Button> */}
            </div>
        </div>
    )
}
