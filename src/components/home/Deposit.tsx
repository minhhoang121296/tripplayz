'use client'
import { User } from 'lucide-react'
import { useTranslations } from 'next-intl'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from '../ui/button'

export const Deposit = () => {
    const t = useTranslations('')
    return (
        <div className='mdmb-[141px] container mx-auto mb-[101px] flex w-full flex-col gap-[40px] px-5 xl:px-[200px]'>
            <span className='text-3xl font-semibold md:text-4xls'>
                {t('deposits_and_withdraw')}
            </span>
            <div className='item-start flex flex-col gap-[30px] md:flex-row md:gap-[120px]'>
                <div className='flex flex-1 flex-col gap-[40px]'>
                    <div className='flex flex-1 flex-col gap-5 text-basem'>
                        <span>{t('payment_systems_info')}</span>
                        <span className='font-bold'>
                            {t('minimum_deposit')} - $10
                        </span>
                    </div>
                    <div className='flex flex-1 md:hidden'>
                        <img
                            src='/images/credit_card/list-card.png'
                            alt='credit_card'
                            className='h-[110px] w-full object-contain'
                        />
                    </div>
                    <div className='flex flex-col gap-5 md:flex-row'>
                        <Button size={'md'} variant={'whiteOutline'}>
                            {t('learn_more')}
                        </Button>
                        <Button size={'md'} variant={'primaryShadow'}>
                            <User />
                            <span>{t('open_account')}</span>
                        </Button>
                    </div>
                </div>
                <div className='hidden flex-1 md:flex'>
                    <img
                        src='/images/credit_card/list-card.png'
                        alt='credit_card'
                        className='h-[110px] w-full object-contain'
                    />
                </div>
            </div>
        </div>
    )
}
