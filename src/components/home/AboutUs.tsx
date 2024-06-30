import { useTranslations } from 'next-intl'

export const AboutUs = () => {
    const t = useTranslations('')
    return (
        <div className='container mx-auto flex w-full flex-col-reverse gap-6 px-5 md:flex-row'>
            <div className='flex flex-1 flex-col gap-6'>
                <span className='text-3xl font-semibold md:text-4xlm'>
                    {t('About')}
                </span>
                <div className='flex flex-col gap-[20px]'>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus labore adipisci autem ut fugiat modi, culpa
                        iusto explicabo non vel.
                    </span>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus labore adipisci autem ut fugiat modi, culpa
                        iusto explicabo non vel.
                    </span>
                </div>
            </div>
            <div className='flex-1'>
                <img
                    src='/images/app/phone.png'
                    alt='enjoy'
                    className='w-full object-contain md:h-[400px]'
                />
            </div>
        </div>
    )
}
