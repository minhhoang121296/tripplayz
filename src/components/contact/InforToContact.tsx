import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'

export const InforToContact = () => {
    const t = useTranslations('')

    return (
        <div className='container mx-auto flex w-full flex-col gap-[30px] px-5 md:gap-[50px]'>
            <div className='flex w-full flex-col gap-[50px] rounded-2xl py-[45px] md:flex-row'>
                <div className='flex h-full w-full flex-col items-center gap-6 text-center'>
                    <div className='bg-blue-100 h-[120px] w-[120px] rounded-full p-4'>
                        <div className='bg-blue flex h-full w-full items-center justify-center rounded-full'>
                            <IconBase
                                icon='customer-service'
                                color={Colors.white}
                                size={43}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        +13 456 789 000
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
                                icon='mail-send'
                                color={Colors.white}
                                size={43}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>
                        support@kerdant.com
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
                                icon='message'
                                color={Colors.white}
                                size={43}
                            />
                        </div>
                    </div>
                    <span className='text-lg font-semibold'>Live Chat</span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, mollitia.
                    </span>
                </div>
            </div>
        </div>
    )
}
