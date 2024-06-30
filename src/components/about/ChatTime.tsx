import { useTranslations } from 'next-intl'

export const ChatTime = () => {
    const t = useTranslations('')

    return (
        <div className='bg-black-darkBlack w-full'>
            <div className='container mx-auto flex w-full flex-col gap-[50px] px-5 py-[44px] md:gap-[62px] md:py-[94px]'>
                <div className='flex w-full flex-col gap-[30px] text-center text-white'>
                    <p className='text-3xl font-semibold md:text-4xl'>
                        Title Section Delirium
                    </p>
                    <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod.
                    </p>
                </div>
                <div className='flex flex-col items-center gap-[55px] md:flex md:flex-row md:gap-[55px]'>
                    <div className='flex flex-1 flex-col gap-4 text-center'>
                        <div className='pb-6 text-3xl text-white md:text-4xl'>
                            {t('chat')}
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-row border-y border-gray-lightGray py-6 text-white'>
                                <span className='flex-1 text-lg font-semibold'>
                                    2014
                                </span>
                                <span className='flex-1 text-lg font-semibold'>
                                    2016
                                </span>
                                <span className='flex-1 text-lg font-semibold'>
                                    2012
                                </span>
                            </div>
                            <div className='flex flex-row border-b border-gray-lightGray py-6 '>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-7xl text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                                        2
                                    </span>
                                    <span className='text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-7xl text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                                        48
                                    </span>
                                    <span className='text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-7xl text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                                        60
                                    </span>
                                    <span className='text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                            </div>
                            <div className='pt-6 text-center text-white '>
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? Quis autem vel eum iure.
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col gap-4 text-center'>
                        <div className='pb-6 text-3xl text-white md:text-4xl'>
                            {t('Email')}
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-row border-y border-gray-lightGray py-6 text-white'>
                                <span className='flex-1 text-lg font-semibold'>
                                    2014
                                </span>
                                <span className='flex-1 text-lg font-semibold'>
                                    2016
                                </span>
                                <span className='flex-1 text-lg font-semibold'>
                                    2012
                                </span>
                            </div>
                            <div className='flex flex-row border-b border-gray-lightGray py-6 '>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-7xl text-blue-200 drop-shadow-[0_4px_40px_#0055FF80]'>
                                        2
                                    </span>
                                    <span className='text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-7xl text-blue-200 drop-shadow-[0_4px_40px_#0055FF80]'>
                                        48
                                    </span>
                                    <span className='text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-7xl text-blue-200 drop-shadow-[0_4px_40px_#0055FF80]'>
                                        60
                                    </span>
                                    <span className='text-white'>
                                        {t('seconds')}
                                    </span>
                                </div>
                            </div>
                            <div className='pt-6 text-center text-white '>
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? Quis autem vel eum iure.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
