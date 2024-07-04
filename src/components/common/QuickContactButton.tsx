'use client'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { Link } from '@/lib/navigation'
import { MessageSquareMore } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'

interface IProps {
    locale: string
}

export const QuickContactButton = ({ locale }: IProps) => {
    const t = useTranslations('')

    return (
        <Link lang={locale} href='/support'>
            <div className='fixed bottom-5 right-5'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant={'primary'} size={'iconMedium'}>
                                <MessageSquareMore />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{t('contact_with_us')}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </Link>
    )
}
