import { Ambassadors } from '@/components/about/Ambassadors'
import { BarCharDetail } from '@/components/about/BarCharDetail'
import { ChatTime } from '@/components/about/ChatTime'
import { Hero } from '@/components/about/Hero'
import { LineChartDetail } from '@/components/about/LineChartDetail'
import { OurAdvisors } from '@/components/about/OurAdvisors'
import { SummerizeInfor } from '@/components/about/SummerizeInfor'
import { OnlneTrading } from '@/components/common/OnlneTrading'
import { useTranslations } from 'next-intl'

export default function About() {
    const t = useTranslations('')
    return (
        <div className='bg-white-lightWhite flex w-full flex-col'>
            <div className='h-[60px] flex-none'></div>
            <Hero />
            <SummerizeInfor />
            <LineChartDetail />
            <Ambassadors />
            <OurAdvisors />
            <ChatTime />
            <BarCharDetail />
            <OnlneTrading />
        </div>
    )
}
