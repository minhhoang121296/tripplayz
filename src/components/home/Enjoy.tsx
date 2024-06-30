import { ArrowDownToLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

export const Enjoy = () => {
    const t = useTranslations('')
    return (
        <div className='container mx-auto flex w-full flex-col gap-[30px] px-5'>
            <div className='flex-1'>
                <div className='flex w-full flex-col gap-[30px]'>
                    <img
                        src='/images/app/phone.png'
                        alt='enjoy'
                        className='w-full md:hidden'
                    />
                    <div className='flex w-full flex-col gap-[30px]'>
                        <span className='text-3xl font-semibold md:text-4xlm'>
                            {t('ultimate_platform_enjoyment')}
                        </span>
                        <div className='flex flex-col gap-5'>
                            <span className=''>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatem eaque neque magnam
                                inventore asperiores quibusdam error eos
                                delectus mollitia libero repellendus itaque
                                consequatur iusto tempora, aliquid nam labore
                                perferendis. Dolores natus, dolore
                                exercitationem consequuntur, distinctio
                                cupiditate voluptates similique enim sit est
                                accusantium autem qui iure voluptate aspernatur
                                sint, quia eveniet.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full flex-row gap-10'>
                <div className='hidden flex-1 items-start md:flex'>
                    <img
                        src='/images/app/phone.png'
                        alt='enjoy'
                        className='w-full object-contain md:h-[400px]'
                    />
                </div>
                <div className='flex flex-1 flex-col gap-[30px]'>
                    <span className='text-3xl font-semibold text-blue'>
                        {t('available')}
                    </span>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase icon='googlepaly' size={36} />
                            <span className='font-medium'>{'Google Play'}</span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase icon='apple' size={36} />
                            <span className='font-medium'>{'MacOS'}</span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase icon='appstore' size={36} />
                            <span className='font-medium'>{'Apple Store'}</span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase icon='android' size={36} />
                            <span className='font-medium'>{'Android'}</span>
                        </div>
                    </div>
                    <Button
                        className='gap-2 md:w-1/2'
                        variant={'primary'}
                        size={'lg'}
                    >
                        <ArrowDownToLine />
                        {t('download_app')}
                    </Button>
                </div>
            </div>
        </div>
    )
}
