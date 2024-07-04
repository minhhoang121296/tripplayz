import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { InputForm } from './FormInput'

export const SendForm = () => {
    const t = useTranslations('')

    return (
        <div className='v container mx-auto flex w-full flex-col gap-6 px-5 py-6 md:mt-[53px] md:gap-[60px] md:pb-[115px] xl:px-[175px]'>
            <span className='md:text-4xls text-center text-3xl font-semibold md:text-left'>
                {t('Contact_us')}
            </span>
            <div className='flex flex-col gap-10 md:flex-row'>
                <div className='flex flex-1 flex-col gap-10'>
                    <div className='text-basem flex flex-col items-start gap-6'>
                        <span className='font-bold'>KERDANT</span>
                        <div className='flex flex-row items-center gap-2'>
                            <span className=' font-bold'>{t('register')}:</span>
                            <span>905 LLC 2021</span>
                        </div>
                        <div className='text-left'>
                            <p className=''>
                                <span className=' font-bold'>
                                    {t('Address')}:
                                </span>{' '}
                                <span>
                                    Hinds Building, Kingstown, St. Vincent and
                                    the Grenadines
                                </span>
                            </p>
                        </div>
                        <span className='text-left underline'>
                            support@kerdant.com
                        </span>
                    </div>
                    <div className='text-basem hidden flex-col gap-6 md:flex'>
                        <span className=' font-bold'>{t('follow_us')}</span>
                        <div className='flex flex-row items-center gap-5'>
                            <IconBase
                                icon='facebook-circle'
                                size={32}
                                color={Colors.black['DEFAULT']}
                            />
                            <IconBase
                                icon='instagram-line'
                                size={32}
                                color={Colors.black['DEFAULT']}
                            />
                            <IconBase
                                icon='twitter'
                                size={32}
                                color={Colors.black['DEFAULT']}
                            />
                            <IconBase
                                icon='linkedin'
                                size={32}
                                color={Colors.black['DEFAULT']}
                            />
                            <IconBase
                                icon='discord'
                                size={32}
                                color={Colors.black['DEFAULT']}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex w-full flex-col rounded-[20px] bg-white p-10 drop-shadow-[0_20px_40px_#00000010] md:w-[635px]'>
                    <InputForm />
                </div>
            </div>
        </div>
    )
}
