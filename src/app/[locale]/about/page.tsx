import { Ambassadors } from '@/components/about/Ambassadors'
import { BarCharDetail } from '@/components/about/BarCharDetail'
import { ChatTime } from '@/components/about/ChatTime'
import { Hero } from '@/components/about/Hero'
import { LineChartDetail } from '@/components/about/LineChartDetail'
import { SummerizeInfor } from '@/components/about/SummerizeInfor'
import { OnlneTrading } from '@/components/common/OnlneTrading'
import { useTranslations } from 'next-intl'

export default function About() {
    const t = useTranslations('')
    return (
        <div
            className={`flex w-full flex-col bg-white-lightWhite md:bg-[url('/images/app/grid6.png')]`}
        >
            <div className='h-[60px] flex-none md:h-[100px]'></div>
            <Hero />
            <SummerizeInfor />
            <LineChartDetail />
            <Ambassadors />
            <ChatTime />
            <BarCharDetail />
            <OnlneTrading />
        </div>
    )
}
