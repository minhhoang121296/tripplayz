import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { InputForm } from './FormInput'

export const SendForm = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col gap-6 px-5 py-6 md:gap-[60px]'>
            <span className='text-center text-3xl font-semibold md:text-left md:text-4xlm'>
                {t('Contact_us')}
            </span>
            <div className='flex flex-col gap-10 md:flex-row'>
                <div className='flex flex-1 flex-col gap-10'>
                    <div className='flex flex-col items-start gap-6 text-sm'>
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
                    <div className='hidden flex-col gap-6 text-sm md:flex'>
                        <span className=' font-bold'>{t('follow_us')}:</span>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='facebook-circle'
                                size={24}
                                color={Colors.black['DEFAULT']}
                            />
                            <IconBase
                                icon='instagram-line'
                                size={24}
                                color={Colors.black['DEFAULT']}
                            />
                            <IconBase
                                icon='twitter'
                                size={24}
                                color={Colors.black['DEFAULT']}
                            />
                            <IconBase
                                icon='linkedin'
                                size={24}
                                color={Colors.black['DEFAULT']}
                            />
                            <IconBase
                                icon='discord'
                                size={24}
                                color={Colors.black['DEFAULT']}
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-white flex flex-1 flex-col rounded-xl p-5'>
                    <InputForm />
                </div>
            </div>
        </div>
    )
}
