import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'
import { InputForm } from './FormInput'

export const SendForm = () => {
    const t = useTranslations('')

    return (
        <div className='v container mx-auto flex w-full flex-col gap-6  py-6 md:mt-[53px] md:gap-[60px] md:py-0 md:pb-[115px] xl:px-[175px]'>
            <span className='text-center text-3xl font-semibold md:text-left md:text-5xl'>
                {t('contact_heading')}
            </span>
            <div className='flex flex-col gap-10 md:flex-row'>
                <div className='flex flex-1 flex-col gap-10 px-5'>
                    <div className='flex flex-col items-start gap-6 text-basem'>
                        <span className='font-bold'>
                            {t('contact_company')}
                        </span>
                        <div className='flex flex-row items-center gap-2'>
                            <span className=' font-bold'>
                                {t('contact_register')}
                            </span>
                            <span>{t('contact_register_code')}</span>
                        </div>
                        <div className='text-left'>
                            <p className=''>
                                <span className=' font-bold'>
                                    {t('contact_address')}
                                </span>{' '}
                                <span>{t('contact_address_text')}</span>
                            </p>
                        </div>
                        <span className='text-left underline'>
                            {t('contact_email')}
                        </span>
                    </div>
                    <div className='hidden flex-col gap-6 text-basem md:flex'>
                        <span className=' font-bold'>
                            {t('contact_follow_us')}
                        </span>
                        <div className='flex flex-row items-center gap-5'>
                            <a
                                href='https://www.facebook.com/kerdantofficial'
                                target='_blank'
                                rel='noreferrer'
                                title='Facebook'
                                className='text-baselg text-white'
                            >
                                <IconBase
                                    icon='facebook-circle'
                                    size={32}
                                    color={Colors.black['DEFAULT']}
                                />
                            </a>
                            <a
                                href='https://www.instagram.com/kerdantofficial/'
                                target='_blank'
                                rel='noreferrer'
                                title='Instagram'
                                className='text-baselg text-white'
                            >
                                <IconBase
                                    icon='instagram-line'
                                    size={32}
                                    color={Colors.black['DEFAULT']}
                                />
                            </a>
                            <a
                                href='https://twitter.com/kerdantofficial'
                                target='_blank'
                                rel='noreferrer'
                                title='Twitter'
                                className='text-baselg text-white'
                            >
                                <IconBase
                                    icon='twitter'
                                    size={32}
                                    color={Colors.black['DEFAULT']}
                                />
                            </a>
                            <a
                                href='https://www.linkedin.com/company/kerdantofficial/'
                                target='_blank'
                                rel='noreferrer'
                                title='LinkedIn'
                                className='text-baselg text-white'
                            >
                                <IconBase
                                    icon='linkedin'
                                    size={32}
                                    color={Colors.black['DEFAULT']}
                                />
                            </a>
                            <a
                                href='https://discord.com/invite/kerdantofficial'
                                target='_blank'
                                rel='noreferrer'
                                title='Discord'
                                className='text-baselg text-white'
                            >
                                <IconBase
                                    icon='discord'
                                    size={32}
                                    color={Colors.black['DEFAULT']}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='px-2.5'>
                    <div className=' flex w-full flex-col rounded-[20px] bg-white p-5 drop-shadow-[0_20px_40px_#00000010] md:w-[635px] md:p-10'>
                        <InputForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
