import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

export const Hero = () => {
    const t = useTranslations('')

    return (
        <div
            className={` flex h-[810px] flex-col bg-[url('/images/app/hero.png')] bg-cover bg-center`}
        >
            <div className='h-[60px] flex-none'></div>
            <div className='flex h-full w-full flex-col items-center justify-center gap-20'>
                <div className='flex flex-col gap-5 text-center'>
                    <p className='text-sm font-semibold tracking-[0.5em] text-white'>
                        {t('welcome_to_kerdant').toUpperCase()}
                    </p>
                    <span className='text-3xl font-bold text-white'>
                        {t('instant_withdrawals_no_waiting').toUpperCase()}
                    </span>
                </div>

                <div className='flex flex-col gap-3 md:flex-row'>
                    <Button size={'lg'} variant={'outline'}>
                        {t('free_practice_account')}
                    </Button>
                    <Button className='gap-2' size={'lg'} variant={'primary'}>
                        <IconBase
                            icon='candle'
                            color={Colors.white}
                            size={16}
                        />
                        {t('trade_now')}
                    </Button>
                </div>
            </div>
        </div>
    )
}
