import { Colors } from '@/assets/colors'
import { InforToContact } from '@/components/contact/InforToContact'
import { SendForm } from '@/components/contact/SendForm'
import { IconBase } from '@/components/custom/IconBase'
import { useTranslations } from 'next-intl'

export default function Contact() {
    const t = useTranslations('')
    return (
        <div className={`flex w-full flex-col bg-white-lightWhite bg-[url('/images/app/grid6.png')]`}>
            <div className='h-[60px] md:h-[100px]'></div>
            <SendForm />
            <InforToContact />
            <div className='container mx-auto flex flex-col gap-[22px] px-5 pb-10 text-sm md:hidden md:gap-4'>
                <span className='text-basem font-bold'>{t('follow_us')}:</span>
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
    )
}
