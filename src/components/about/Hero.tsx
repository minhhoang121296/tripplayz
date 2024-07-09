import { useTranslations } from 'next-intl'

export const Hero = () => {
    const t = useTranslations('')

    return (
        <div
            className={`bg-scale-50 flex h-[460px] flex-col bg-[url('/images/app/about2.png')] bg-cover bg-center md:bg-[url('/images/app/about_us_hero.png')]`}
        >
            <div className='flex h-full w-full flex-col items-center justify-center gap-20'>
                <div className='flex flex-col gap-[18px] text-center'>
                    <span className='text-3xl font-semibold text-white md:text-5xl'>
                        {t('about_heading')}
                    </span>
                    <p className='text-xss font-bold tracking-[.6em] text-blueGray md:text-base'>
                        {t('about_welcome').toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    )
}
