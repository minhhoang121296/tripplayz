import { QuickContactButton } from '@/components/common/QuickContactButton'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Maincontent } from '@/components/layout/Maincontent'
import '@/style/globals.css'
import type { Metadata } from 'next'
import {
    AbstractIntlMessages,
    NextIntlClientProvider,
    useMessages
} from 'next-intl'
import { Montserrat, Rubik } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--montserrat'
})
const rubik = Rubik({
    subsets: ['arabic'],
    variable: '--rubik'
})
export const metadata: Metadata = {
    title: 'Next Temp',
    description: 'create next app By Yahya Parvar!'
}

export default function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const messages = useMessages()
    return (
        <html
            lang={locale}
            dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
            className={`${montserrat.variable} ${rubik.variable} scroll-smooth`}
            suppressHydrationWarning
        >
            <body>
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages as AbstractIntlMessages}
                >
                    <div className='relative min-h-screen w-full'>
                        <Header locale={locale} />
                        <Maincontent>{children}</Maincontent>
                        <Footer />
                        <QuickContactButton locale={locale} />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
