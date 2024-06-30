import { useTranslations } from 'next-intl'

export const OnlneTrading = () => {
    const t = useTranslations('')
    return (
        <div className='from-blue to-black-darkBlack w-full bg-gradient-to-r py-[70px]'>
            <div className='container mx-auto flex w-full flex-col gap-10 p-5 md:flex-row'>
                <div className='flex flex-[2] flex-col gap-5'>
                    <span className='text-3xl font-semibold text-white'>
                        {t('online_trading_platform')}
                    </span>
                    <span className='text-base text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Omnis eaque eum, non fugit, voluptate debitis
                        eius, aliquam voluptas illo quibusdam fugiat
                        reprehenderit numquam! Voluptatibus, explicabo molestias
                        placeat ipsam porro non deleniti natus qui, aut quisquam
                        sint numquam animi quasi fuga maiores laborum quod
                        facilis vero molestiae dolore fugit. Dolorum, vel?
                    </span>
                </div>
                <div className='flex-1'>
                    <img
                        className='h-full w-full object-contain'
                        src={'/images/app/app.png'}
                        alt='app'
                    />
                </div>
            </div>
        </div>
    )
}
