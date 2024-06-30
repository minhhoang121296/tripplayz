import { Colors } from '@/assets/colors'
import { ArrowDownToLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

export const Support = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col gap-[30px]   md:gap-[50px]'>
            <div className='bg-white gap-[50px]shadow-sm flex w-full flex-col rounded-2xl py-[45px] md:flex-row'>
                <div className='flex h-full w-full flex-col items-center gap-6 text-center'>
                    <div className='bg-blue-100 h-[120px] w-[120px] rounded-full p-4'>
                        <div className='bg-blue flex h-full w-full items-center justify-center rounded-full'>
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
                    <div className='bg-gray-300 h-[120px] w-[120px] rounded-full p-4'>
                        <div className='bg-black flex h-full w-full items-center justify-center rounded-full'>
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
                    <div className='bg-blueGray-300 h-[120px] w-[120px] rounded-full p-4'>
                        <div className='bg-blueGray-500 flex h-full w-full items-center justify-center rounded-full'>
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
