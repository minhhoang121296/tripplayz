import { Colors } from '@/assets/colors'
import { ArrowDownToLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

export const Support = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col gap-[30px]   md:gap-[50px]'>
            <div className='flex w-full flex-col gap-[50px] md:px-[100px] px-2.5 rounded-2xl bg-white py-[45px] shadow-sm md:flex-row'>
                <div className='flex h-full w-full flex-col items-center gap-6 text-center'>
                    <div className='h-[120px] w-[120px] rounded-full bg-blue-100 p-4'>
                        <div className='flex h-full w-full items-center justify-center rounded-full bg-blue'>
                            <IconBase
                                icon='platform'
                                color={Colors.white}
                                size={43}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        {t('advanced_platform')}
                    </span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, mollitia.
                    </span>
                </div>
                <div className='flex h-full w-full flex-col items-center gap-6 text-center'>
                    <div className='h-[120px] w-[120px] rounded-full bg-gray-300 p-4'>
                        <div className='flex h-full w-full items-center justify-center rounded-full bg-black'>
                            <IconBase
                                icon='practice'
                                color={Colors.white}
                                size={43}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        {t('advanced_platform')}
                    </span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, mollitia.
                    </span>
                </div>
                <div className='flex h-full w-full flex-col items-center gap-6 text-center'>
                    <div className='h-[120px] w-[120px] rounded-full bg-blueGray-300 p-4'>
                        <div className='flex h-full w-full items-center justify-center rounded-full bg-blueGray-500'>
                            <IconBase
                                icon='platform'
                                color={Colors.white}
                                size={43}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        {t('advanced_platform')}
                    </span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, mollitia.
                    </span>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Button
                    className=' justify-center'
                    variant={'primary'}
                    size={'lg'}
                >
                    <ArrowDownToLine />
                    {t('download_app')}
                </Button>
            </div>
        </div>
    )
}
