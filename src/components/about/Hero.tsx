import { useTranslations } from 'next-intl'

export const Hero = () => {
    const t = useTranslations('')

    return (
        <div
            className={`flex h-[460px] flex-col bg-[url('/images/app/about.png')] bg-cover bg-center`}
        >
            <div className='flex h-full w-full flex-col items-center justify-center gap-20'>
                <div className='flex flex-col gap-[18px] text-center'>
                    <span className='text-3xl font-semibold text-white md:text-5xl'>
                        {t('About')}
                    </span>
                    <p className='text-xss font-bold tracking-[.6em] text-blueGray md:text-base'>
                        {t('welcome_to_kerdant').toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    )
}
