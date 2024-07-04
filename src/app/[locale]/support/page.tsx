import { Colors } from '@/assets/colors'
import { InforToContact } from '@/components/contact/InforToContact'
import { SendForm } from '@/components/contact/SendForm'
import { IconBase } from '@/components/custom/IconBase'
import { useTranslations } from 'next-intl'

export default function Contact() {
    const t = useTranslations('')
    return (
        <div className='flex w-full flex-col bg-white-lightWhite'>
            <div className='h-[100px]'></div>
            <SendForm />
            <InforToContact />
            <div className='container mx-auto flex flex-col gap-4 px-5 pb-10 text-sm md:hidden'>
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
    )
}
