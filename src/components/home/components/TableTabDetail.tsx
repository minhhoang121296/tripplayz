import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useWindowSize } from 'react-use'

export const TableTabDetail = () => {
    const t = useTranslations('')
    const { width } = useWindowSize()
    console.log(width, 'width')

    return (
        <>
            {width > 1024 && (
                <div className='bg-white flex w-full flex-col gap-10 rounded-lg  px-10 py-9 shadow-md'>
                    <div className='flex flex-row justify-between'>
                        <div className='tiem-center gap-2s flex flex-row gap-2'>
                            <span className='font-bold'>220</span>
                            <span className=''>{t('stocks_cfd')}</span>
                        </div>
                        <div className='tiem-center gap-2s flex flex-row gap-2'>
                            <span className='font-bold'>220</span>
                            <span className=''>{t('leverages_up_to')}</span>
                        </div>
                        <div className='tiem-center gap-2s flex flex-row gap-2'>
                            <span className='font-bold'>220</span>
                            <span className=''>{t('minimum_investment')}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='flex-[2]'>{t('name')}</div>
                            <div className='flex-1'>{t('Bid')}</div>
                            <div className='flex-1'>{t('Ask')}</div>
                            <div className='flex-[2]'>{t('1D_Change')}</div>
                            <div className='flex-[2] pl-10'>{''}</div>
                        </div>
                        <div className='flex flex-col'>
                            {[1, 2, 3, 4].map((el, index) => (
                                <div
                                    className={cn(
                                        'flex flex-row items-center border-t py-6',
                                        index === 3 && 'border-b'
                                    )}
                                    key={index}
                                >
                                    <div className='flex flex-[2] flex-row gap-2'>
                                        <Avatar>
                                            <AvatarImage src='https://github.com/shadcn.png' />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className='flex flex-col'>
                                            <span className='font-bold'>
                                                Bitcoin_BTC
                                            </span>
                                            <span className='text-gray-400'>
                                                BTC
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex-1 font-medium'>
                                        {'42.98700'}
                                    </div>
                                    <div className='flex-1 font-medium'>
                                        {'42.98700'}
                                    </div>
                                    <div className='flex flex-[2] flex-row items-center gap-3'>
                                        <span className='font-bold text-blue'>
                                            {'+0.35%'}
                                        </span>
                                        <img
                                            src='/images/app/Graph.png'
                                            alt='sparkline'
                                            className='h-full w-full object-contain'
                                        />
                                    </div>
                                    <div className='flex flex-[2] flex-row gap-2 pl-10'>
                                        <Button
                                            size={'lg'}
                                            className='w-full'
                                            variant={'outlineRed'}
                                        >
                                            {t('Sell')}
                                        </Button>
                                        <Button
                                            size={'lg'}
                                            className='w-full'
                                            variant={'outlineBlue'}
                                        >
                                            {t('Buy')}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {width < 1024 && (
                <div className='flex w-full flex-col gap-10 rounded-lg'>
                    <div className='flex flex-row flex-wrap gap-2 py-5 '>
                        <div className='tiem-center flex flex-row gap-2'>
                            <span className='font-bold'>220</span>
                            <span className=''>{t('stocks_cfd')}</span>
                        </div>
                        <div className='tiem-center flex flex-row gap-2'>
                            <span className='font-bold'>220</span>
                            <span className=''>{t('leverages_up_to')}</span>
                        </div>
                        <div className='tiem-center flex flex-row gap-2'>
                            <span className='font-bold'>220</span>
                            <span className=''>{t('minimum_investment')}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {[1, 2, 3, 4].map((el, index) => (
                            <div
                                className={cn(
                                    'bg-white flex flex-row rounded-sm p-5 shadow-xl'
                                )}
                                key={index}
                            >
                                <div className='flex w-full flex-col gap-5'>
                                    <div className='flex flex-[2] flex-row gap-2'>
                                        <Avatar>
                                            <AvatarImage src='https://github.com/shadcn.png' />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className='flex flex-col'>
                                            <span className='font-bold'>
                                                Bitcoin_BTC
                                            </span>
                                            <span className='text-gray-400'>
                                                BTC
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-row justify-between'>
                                        <span className=' font-medium'>
                                            34.323
                                        </span>
                                        <span className=' font-medium'>
                                            34.323
                                        </span>
                                        <span className='font-semibold text-blue'>
                                            34.323
                                        </span>
                                    </div>
                                    <img
                                        src='/images/app/Graph.png'
                                        alt='sparkline'
                                        className='h-12 w-full object-fill'
                                    />
                                    <div className='flex flex-[2] flex-row gap-2'>
                                        <Button
                                            size={'lg'}
                                            className='w-full'
                                            variant={'outlineRed'}
                                        >
                                            {t('Sell')}
                                        </Button>
                                        <Button
                                            size={'lg'}
                                            className='w-full'
                                            variant={'outlineBlue'}
                                        >
                                            {t('Buy')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
