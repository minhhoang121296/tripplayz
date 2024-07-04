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
        <div className='container mx-auto mb-[141px] flex w-full flex-col gap-6 px-5 md:gap-[40px] xl:px-[200px]'>
            <span className='md:text-4xls text-3xl font-semibold'>
                {t('deposits_and_withdraw')}
            </span>
            <div className='item-start flex flex-col gap-[30px] md:flex-row md:gap-[120px]'>
                <div className='flex flex-1 flex-col gap-[40px]'>
                    <div className='text-basem flex flex-1 flex-col gap-5'>
                        <span>{t('payment_systems_info')}</span>
                        <span className='font-bold'>
                            {t('minimum_deposit')} - $10
                        </span>
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
                <div className='flex flex-1'>
                    <img
                        src='/images/credit_card/list-card.png'
                        alt='credit_card'
                        className='h-[110px] w-full object-contain'
                    />
                    {/* <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        className='mySwiper'
                    >
                        {[1, 2, 3].map((el, index) => (
                            <SwiperSlide key={index}>
                                <div className='pb-20'>
                                    <img
                                        src='/images/credit_card/list-card.png'
                                        alt='credit_card'
                                        className='w-full object-contain'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </div>
            </div>
        </div>
    )
}
