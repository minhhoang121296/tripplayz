import { User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

export const Deposit = () => {
    const t = useTranslations('')
    return (
        <div className='container mx-auto flex w-full flex-col gap-6 px-5 md:gap-[60px]'>
            <span className='text-3xl font-semibold md:text-4xlm'>
                {t('deposits_and_withdraw')}
            </span>
            <div className='item-start flex flex-col gap-[30px] md:flex-row'>
                <div className='flex flex-1 flex-col gap-5'>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Illum, dignissimos quas ipsam error possimus
                        voluptatibus rerum consequuntur illo aliquid facilis
                        numquam pariatur tenetur, quaerat vel obcaecati? Autem
                        quae quam aperiam?
                    </span>
                    <span className='font-bold'>
                        {t('minimum_deposit')} -- $10
                    </span>
                </div>
                <div className='flex flex-1'>
                    <img
                        src='/images/credit_card/list-card.png'
                        alt='credit_card'
                        className='w-full object-contain'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-5  md:flex-row'>
                <Button size={'lg'} variant={'outline'}>
                    {t('learn_more')}
                </Button>
                <Button size={'lg'} className='gap-2' variant={'primary'}>
                    <User />
                    <span>{t('open_account')}</span>
                </Button>
            </div>
        </div>
    )
}
