'use client'
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
                        className='min-w-32 flex-1 px-2.5 py-5 text-left text-lg'
                        value='forex'
                    >
                        {t('forex')}
                    </TabsTrigger>
                    <TabsTrigger
                        className='min-w-32 flex-1 px-2.5 py-5 text-left text-lg'
                        value='crypto'
                    >
                        {t('crypto')}
                    </TabsTrigger>
                    <TabsTrigger
                        className='min-w-32 flex-1 px-2.5 py-5 text-left text-lg'
                        value='stocks'
                    >
                        {t('stocks')}
                    </TabsTrigger>
                    <TabsTrigger
                        className='min-w-32 flex-1 px-2.5 py-5 text-left text-lg'
                        value='commodities'
                    >
                        {t('commodities')}
                    </TabsTrigger>
                    <TabsTrigger
                        className='min-w-32 flex-1 px-2.5 py-5 text-left text-lg'
                        value='etfs'
                    >
                        {t('etfs')}
                    </TabsTrigger>
                </TabsList>
                <TabsContent className='mt-0 xl:px-[134px]' value='forex'>
                    <TableTabDetail />
                </TabsContent>
                <TabsContent className='mt-0 xl:px-[134px]' value='crypto'>
                    <TableTabDetail />
                </TabsContent>
                <TabsContent className='mt-0 xl:px-[134px]' value='stocks'>
                    <TableTabDetail />
                </TabsContent>
                <TabsContent className='mt-0 xl:px-[134px]' value='commodities'>
                    <TableTabDetail />
                </TabsContent>
                <TabsContent className='mt-0 xl:px-[134px]' value='etfs'>
                    <TableTabDetail />
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
