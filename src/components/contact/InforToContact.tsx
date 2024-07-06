import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'

export const InforToContact = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col gap-[30px] px-[25px] md:gap-[50px] xl:px-[235px]'>
            <div className='flex w-full flex-col gap-[30px] rounded-2xl py-[45px] md:flex-row'>
                <div className='flex h-full w-full flex-col items-center gap-2.5 text-center'>
                    <div className='h-[120px] w-[120px] rounded-full bg-blue-100 p-4'>
                        <div className='flex h-full w-full items-center justify-center rounded-full bg-blue'>
                            <IconBase
                                icon='customer-service'
                                color={Colors.white}
                                size={32}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        {t('contact_icon01_phone')}
                    </span>
                    <span className='p-2.5 text-basem'>
                        {t('contact_icon01_text')}
                    </span>
                </div>
                <div className='flex h-full w-full flex-col items-center gap-2.5 text-center'>
                    <div className='h-[120px] w-[120px] rounded-full bg-gray-300 p-4'>
                        <div className='flex h-full w-full items-center justify-center rounded-full bg-black'>
                            <IconBase
                                icon='mail-send'
                                color={Colors.white}
                                size={32}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        {t('contact_icon02_email')}
                    </span>
                    <span className='p-2.5 text-basem'>
                        {t('contact_icon02_text')}
                    </span>
                </div>
                <div className='flex h-full w-full flex-col items-center gap-2.5 text-center'>
                    <div className='h-[120px] w-[120px] rounded-full bg-blueGray-400 p-4'>
                        <div className='flex h-full w-full items-center justify-center rounded-full bg-blueGray-500'>
                            <IconBase
                                icon='message'
                                color={Colors.black['DEFAULT']}
                                size={32}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        {t('contact_icon03_chat')}
                    </span>
                    <span className='p-2.5 text-basem'>
                        {t('contact_icon03_text')}
                    </span>
                </div>
            </div>
        </div>
    )
}
