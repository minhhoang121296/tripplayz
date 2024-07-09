'use client'

import { Colors } from '@/assets/colors'
import { Link } from '@/lib/navigation'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'

interface Iprops {
    locale: string
}

export const Footer = ({ locale }: Iprops) => {
    const t = useTranslations('')
    return (
        <div className='flex w-full flex-col gap-10 bg-black-darkBlack pb-[75px] pt-[72px]'>
            <div className='container mx-auto flex w-full flex-col gap-[30px] px-10 md:flex-row  md:justify-between xl:px-[200px]'>
                <div className='flex flex-col gap-[30px] md:flex-row md:gap-[108px]'>
                    <div className='flex flex-col gap-5'>
                        <span className='text-lg font-semibold text-white'>
                            {t('footer_navigation')}
                        </span>
                        <div className='flex flex-col'>
                            <span className='text-baselg text-white'>
                                {t('footer_terms')}
                            </span>
                            <Link lang={locale} href={'/support'}>
                                <span className='text-baselg text-white'>
                                    {t('footer_contact_us')}
                                </span>
                            </Link>
                            <span className='text-baselg text-white'>
                                {t('footer_demo_account')}
                            </span>
                            <span className='text-baselg text-white'>
                                {t('footer_create_account')}
                            </span>
                            <span className='text-baselg text-white'>
                                {t('footer_sitemap')}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-lg font-semibold text-white'>
                            {t('footer_contact')}
                        </span>
                        <div className='flex flex-col'>
                            <span className='text-baselg text-white'>
                                {t('footer_email')}
                            </span>
                            <span className='text-baselg text-white'>
                                {t('footer_phone')}
                            </span>
                            <span className='text-baselg text-white'>
                                {t('footer_open_hours')}
                            </span>
                        </div>
                        <div className='flex flex-col text-xsm text-white'>
                            <span>{t('register_number')}</span>
                            <span>
                                {
                                    'Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia'
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <span className='text-lg font-semibold text-white'>
                        {t('footer_follow_us')}
                    </span>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='facebook-circle'
                                size={24}
                                color={Colors.white}
                            />

                            <a
                                href='https://www.facebook.com/kerdantofficial'
                                target='_blank'
                                rel='noreferrer'
                                title='Facebook'
                                className='text-baselg text-white'
                            >
                                {t('footer_facebook')}
                            </a>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='instagram-line'
                                size={24}
                                color={Colors.white}
                            />
                            <a
                                href='https://www.instagram.com/kerdantofficial/'
                                target='_blank'
                                rel='noreferrer'
                                title='Instagram'
                                className='text-baselg text-white'
                            >
                                {t('footer_instagram')}
                            </a>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='twitter'
                                size={24}
                                color={Colors.white}
                            />
                            <a
                                href='https://twitter.com/kerdantofficial'
                                target='_blank'
                                rel='noreferrer'
                                title='Twitter'
                                className='text-baselg text-white'
                            >
                                {t('footer_twitter')}
                            </a>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='linkedin'
                                size={24}
                                color={Colors.white}
                            />
                            <a
                                href='https://www.linkedin.com/company/kerdantofficial/'
                                target='_blank'
                                rel='noreferrer'
                                title='LinkedIn'
                                className='text-baselg text-white'
                            >
                                {t('footer_linkedin')}
                            </a>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='discord'
                                size={24}
                                color={Colors.white}
                            />
                            <a
                                href='https://discord.com/invite/kerdantofficial'
                                target='_blank'
                                rel='noreferrer'
                                title='Discord'
                                className='text-baselg text-white'
                            >
                                {t('footer_discord')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex flex-col gap-[30px] px-2.5 md:px-0 xl:px-[200px]'>
                <p className='text-xsm text-white/50'>{t('footer_text03')}</p>
                <p className='text-xsm text-white/50'>{t('footer_text04')}</p>
            </div>
        </div>
    )
}
