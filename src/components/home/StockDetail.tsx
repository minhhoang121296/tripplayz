'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { TableTabDetail } from './components/TableTabDetail'

export const StockDetail = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col gap-10 px-5'>
            <Tabs defaultValue='forex' className='w-full'>
                <TabsList className='flex flex-row overflow-auto'>
                    <TabsTrigger className='min-w-32' value='forex'>
                        Forex
                    </TabsTrigger>
                    <TabsTrigger className='min-w-32' value='crypto'>
                        Crypto
                    </TabsTrigger>
                    <TabsTrigger className='min-w-32' value='stocks'>
                        Stocks
                    </TabsTrigger>
                    <TabsTrigger className='min-w-32' value='commodities'>
                        Commodities
                    </TabsTrigger>
                    <TabsTrigger className='min-w-32' value='etfs'>
                        ETFs
                    </TabsTrigger>
                </TabsList>
                <TabsContent value='forex'>
                    <TableTabDetail />
                </TabsContent>
                <TabsContent value='crypto'>
                    <TableTabDetail />
                </TabsContent>
                <TabsContent value='stocks'>
                    <TableTabDetail />
                </TabsContent>
                <TabsContent value='commodities'>
                    <TableTabDetail />
                </TabsContent>
                <TabsContent value='etfs'>
                    <TableTabDetail />
                </TabsContent>
            </Tabs>
            <div className='flex flex-col justify-center gap-10 md:flex-row'>
                <span>{t('past_performance_disclaimer')}</span>
                <Button className='gap-2' size={'lg'} variant={'outline'}>
                    <span>{t('see_all_options')}</span>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}
