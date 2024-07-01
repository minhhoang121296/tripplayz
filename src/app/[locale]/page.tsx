import { OnlneTrading } from '@/components/common/OnlneTrading'
import { AboutUs } from '@/components/home/AboutUs'
import { Deposit } from '@/components/home/Deposit'
import { Enjoy } from '@/components/home/Enjoy'
import { Hero } from '@/components/home/Hero'
import { Liquidity } from '@/components/home/Liquidity'
import { StockDetail } from '@/components/home/StockDetail'
import { Support } from '@/components/home/Support'
import { useTranslations } from 'next-intl'

export default function HomePage() {
    const t = useTranslations('')
    return (
        <div className='flex w-full flex-col'>
            <div
                className={`flex w-full flex-col gap-[60px] bg-white-lightWhite bg-[url('/images/app/grid6.png')]  md:gap-[130px]`}
            >
                <Hero />
                <StockDetail />
                <Deposit />
                <Support />
                <AboutUs />
                <Liquidity />
                <Enjoy />
                <OnlneTrading />
            </div>
        </div>
    )
}
