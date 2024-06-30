'use client'

import { Colors } from '@/assets/colors'
import { useTranslations } from 'next-intl'
import { IconBase } from '../custom/IconBase'

export const Footer = () => {
    const t = useTranslations('')
    return (
        <div className='bg-black-darkBlack flex flex-col gap-10 py-[50px]'>
            <div className='container mx-auto  flex w-full flex-col gap-[30px] px-[40px]  md:flex-row md:justify-between'>
                <div className='flex flex-col gap-[30px] md:flex-row md:gap-[108px]'>
                    <div className='flex flex-col gap-5'>
                        <span className='text-lg font-semibold text-white'>
                            {t('navigation')}
                        </span>
                        <div className='flex flex-col gap-3'>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-lg font-semibold text-white'>
                            {t('navigation')}
                        </span>
                        <div className='flex flex-col gap-3'>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-lg font-semibold text-white'>
                            {t('navigation')}
                        </span>
                        <div className='flex flex-col gap-3'>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <span className='text-lg font-semibold text-white'>
                        {t('follow_us')}
                    </span>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='facebook-circle'
                                size={24}
                                color={Colors.white}
                            />
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='instagram-line'
                                size={24}
                                color={Colors.white}
                            />
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='twitter'
                                size={24}
                                color={Colors.white}
                            />
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='linkedin'
                                size={24}
                                color={Colors.white}
                            />
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <IconBase
                                icon='discord'
                                size={24}
                                color={Colors.white}
                            />
                            <span className='text-base text-white'>
                                {t('navigation')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex flex-col gap-[30px] px-[40px]'>
                <p className='text-sm text-white/50'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam ut eos amet hic saepe. Numquam, harum provident
                    expedita consequuntur beatae vel? Ullam, at! Atque ad est
                    itaque consectetur consequatur libero ducimus ullam deserunt
                    dignissimos! Iure sequi quod commodi et molestiae eaque,
                    magnam cupiditate quas, animi provident ex ut reiciendis
                    sed. Reiciendis ullam laborum nesciunt quam commodi!
                    Eligendi, beatae perferendis totam assumenda officiis optio
                    ullam sed maxime sit deleniti obcaecati repellendus aperiam
                    nesciunt, voluptatem saepe quas et molestias. Mollitia ab
                    illum vel, ducimus facilis placeat ea voluptatum culpa
                    explicabo repellat, voluptatem quo error qui magnam
                    blanditiis dolorem animi, soluta laborum nulla.
                </p>
                <p className='text-sm text-white/50'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam ad voluptatibus nam tenetur, placeat et
                    accusantium rem natus illum sunt excepturi tempora omnis
                    voluptate. Autem inventore vel laborum minus perferendis
                    ducimus eaque, fugiat at hic deleniti eligendi quod
                    similique ut numquam. Ad incidunt rem aperiam sit, delectus
                    mollitia eum voluptates laudantium deserunt excepturi labore
                    perspiciatis dolor corrupti, reprehenderit explicabo et
                    inventore ducimus molestiae blanditiis id, modi doloribus.
                    Quae, consequatur non aspernatur animi repudiandae impedit!
                    Ipsa in quos unde cumque voluptatum recusandae sunt,
                    asperiores soluta totam et quisquam, atque consequatur.
                    Placeat illo neque ipsam magni sed tempore laborum sunt!
                    Magnam, consectetur.
                </p>
            </div>
        </div>
    )
}
