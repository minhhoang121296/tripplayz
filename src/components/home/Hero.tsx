import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

export const Hero = () => {
    const t = useTranslations('')

    return (
        <div
            className={` mb-[92px] flex h-[810px] flex-col bg-black/35 bg-cover bg-center`}
        >
            <div className='h-[100px] flex-none'></div>
            <div className='flex h-full w-full flex-col items-center justify-center gap-[39px]'>
                <div className='flex flex-col gap-[39px] text-center'>
                    <p className='text-base font-extrabold tracking-[0.5em] text-white'>
                        {t('welcome_to_kerdant').toUpperCase()}
                    </p>
                    <div className='flex flex-col'>
                        <span className='text-5xl font-bold text-white'>
                            {t('no_spreads').toUpperCase()}
                        </span>
                        <span className='text-5xl font-bold text-white'>
                            {t('instant_withdrawals').toUpperCase()}
                        </span>
                        <span className='text-5xl font-bold text-white'>
                            {t('no_waiting').toUpperCase()}
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-[19px] md:flex-row'>
                    <Button size={'md'} variant={'whiteOutline'}>
                        {t('free_practice_account')}
                    </Button>
                    <Button size={'md'} variant={'primaryShadow'}>
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
