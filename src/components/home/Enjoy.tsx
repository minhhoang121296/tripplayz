import { ArrowDownToLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

export const Enjoy = () => {
    const t = useTranslations('')
    return (
        <div className='container mx-auto mb-[130px] flex w-full flex-col gap-[65px]  xl:px-[200px]'>
            <div className='flex-1'>
                <div className='flex w-full flex-col gap-[45px]'>
                    <img
                        src='/images/app/phone.png'
                        alt='enjoy'
                        className='w-full md:hidden'
                    />
                    <div className='flex w-full flex-col gap-[45px] px-5'>
                        <span className='text-3xl font-semibold md:text-4xls'>
                            {t('ultimate_platform_enjoyment')}
                        </span>
                        <div className='flex flex-col gap-5'>
                            <span className='text-basem'>
                                {t('platform_features')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full flex-row gap-[100px] px-5'>
                <div className='hidden items-start md:flex'>
                    <img
                        src='/images/app/phone.png'
                        alt='enjoy'
                        className='w-full md:h-[320px] md:w-[540px]'
                    />
                </div>
                <div className='flex flex-1 flex-col'>
                    <span className='text-2xl font-bold text-blue'>
                        {t('available')}
                    </span>
                    <div className='mt-[50px] grid grid-cols-2 gap-[37px] md:gap-x-[37px] md:gap-y-[50px]'>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase icon='googlepaly' size={36} />
                            <span className='text-base font-medium'>
                                {'Google Play'}
                            </span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase icon='apple' size={36} />
                            <span className='text-base font-medium'>
                                {'MacOS'}
                            </span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase icon='appstore' size={36} />
                            <span className='text-base font-medium'>
                                {'Apple Store'}
                            </span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase icon='android' size={36} />
                            <span className='text-base font-medium'>
                                {'Android'}
                            </span>
                        </div>
                    </div>
                    <div>
                        <Button
                            className='mt-[57px] w-full md:w-auto '
                            variant={'primaryShadow'}
                            size={'md'}
                        >
                            <ArrowDownToLine />
                            {t('download_app')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
