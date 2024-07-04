'use client'

import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'

export const Footer = () => {
    const t = useTranslations('')
    return (
        <div className='flex w-full flex-col gap-10 bg-black-darkBlack pb-[75px] pt-[72px]'>
            <div className='container mx-auto flex w-full flex-col gap-[30px] px-10 md:flex-row  md:justify-between xl:px-[200px]'>
                <div className='flex flex-col gap-[30px] md:flex-row md:gap-[108px]'>
                    <div className='flex flex-col gap-5'>
                        <span className='text-lg font-semibold text-white'>
                            {t('navigation')}
                        </span>
                        <div className='flex flex-col'>
                            <span className='text-baselg text-white'>
                                {t('terms_and_conditions')}
                            </span>
                            <span className='text-baselg text-white'>
                                {t('contact_us')}
                            </span>
                            <span className='text-baselg text-white'>
                                {t('demo_account')}
                            </span>
                            <span className='text-baselg text-white'>
                                {t('create_account')}
                            </span>
                            <span className='text-baselg text-white'>
                                {t('sitemap')}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-lg font-semibold text-white'>
                            {t('contact')}
                        </span>
                        <div className='flex flex-col'>
                            <span className='text-baselg text-white'>
                                kerdant@kerdant.com
                            </span>
                            <span className='text-baselg text-white'>
                                +1 321 334 0223
                            </span>
                            <span className='text-baselg text-white'>
                                {t('working_hours')}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <span className='text-lg font-semibold text-white'>
                        {t('follow_us')}
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
                                Facebook
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
                                Instagram
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
                                Twitter
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
                                LinkedIn
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
                                Discord
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex flex-col gap-[30px] px-2.5 md:px-0 xl:px-[200px]'>
                <p className='text-xsm text-white/50'>{t('risk_warning')}</p>
            </div>
        </div>
    )
}
