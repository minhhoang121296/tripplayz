import { useTranslations } from 'next-intl'

export const Hero = () => {
    const t = useTranslations('')

    return (
        <div
            className={` flex h-[400px] flex-col bg-[url('/images/app/about.png')] bg-cover bg-center`}
        >
            <div className='flex h-full w-full flex-col items-center justify-center gap-20'>
                <div className='flex flex-col gap-5 text-center'>
                    <span className='text-3xl font-bold text-white'>
                        {t('About')}
                    </span>
                    <p className='text-sm font-bold tracking-[.6em] text-blue-200'>
                        {t('welcome_to_kerdant').toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    )
}
