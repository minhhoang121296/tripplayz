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

    const imageV1 = [
        {
            src: '/images/credit_card/Mastercard.png',
            alt: 'barclays'
        },
        {
            src: '/images/credit_card/Santander.png',
            alt: 'chase'
        },
        {
            src: '/images/credit_card/Skrill_logo.png',
            alt: 'lloyds-bank-seeklog'
        },
        {
            src: '/images/credit_card/netteller.png',
            alt: 'ubs-logo'
        },
        {
            src: '/images/credit_card/BBVA_Logo.png',
            alt: 'hsbc-logo'
        },
        {
            src: '/images/credit_card/Visa_logo.png',
            alt: 'hsbc-logo'
        },
        {
            src: '/images/credit_card/Frame.png',
            alt: 'hsbc-logo'
        },
        {
            src: '/images/credit_card/wmtransfer-ar.png',
            alt: 'hsbc-logo'
        }
    ]

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
                    <div className='grid grid-cols-4  gap-x-[60px] gap-y-[42px]'>
                        {imageV1.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className='h-[75px] w-full object-contain'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
