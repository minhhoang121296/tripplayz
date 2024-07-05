import { Colors } from '@/assets/colors'
import { ArrowDownToLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

export const Support = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto mb-[204px] flex w-full flex-col gap-[30px]  md:gap-[51px] xl:px-[135px]'>
            <div className='flex w-full flex-col gap-[50px] rounded-2xl bg-white px-[15px] py-[45px] shadow-sm md:flex-row md:px-[100px]'>
                <div className='flex h-full w-full flex-col items-center gap-[23px] text-center'>
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
                    <span className='text-basem'>
                        {t('platform_availability')}
                    </span>
                </div>
                <div className='flex h-full w-full flex-col items-center gap-[23px] text-center'>
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
                        {t('free_practice')}
                    </span>
                    <span className='text-basem'>
                        {t('refillable_practice_account')}
                    </span>
                </div>
                <div className='flex h-full w-full flex-col items-center gap-[23px] text-center'>
                    <div className='h-[120px] w-[120px] rounded-full bg-blueGray-300 p-4'>
                        <div className='flex h-full w-full items-center justify-center rounded-full bg-blueGray-500'>
                            <IconBase
                                icon='support'
                                color={Colors.black['DEFAULT']}
                                size={43}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        {t('24_7_support')}
                    </span>
                    <span className='text-basem'>{t('prompt_support')}</span>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center px-5'>
                <Button
                    className='w-full md:w-auto'
                    variant={'primaryShadow'}
                    size={'md'}
                >
                    <ArrowDownToLine />
                    {t('download_app')}
                </Button>
            </div>
        </div>
    )
}
