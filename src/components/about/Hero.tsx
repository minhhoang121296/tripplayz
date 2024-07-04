import { useTranslations } from 'next-intl'

export const Hero = () => {
    const t = useTranslations('')

    return (
        <div
            className={`flex h-[460px] flex-col bg-[url('/images/app/about.png')] bg-cover bg-center`}
        >
            <div className='flex h-full w-full flex-col items-center justify-center gap-20'>
                <div className='flex flex-col gap-[18px] text-center'>
                    <span className='text-5xl font-semibold text-white'>
                        {t('About')}
                    </span>
                    <p className='text-base font-bold tracking-[.6em] text-blueGray'>
                        {t('welcome_to_kerdant').toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    )
}
