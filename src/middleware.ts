import { locales } from '@/lib/i18n'
import { localePrefix } from '@/lib/navigation'
import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
type CustomMiddleware = (req: NextRequest) => Promise<NextRequest>
const customMiddleware: CustomMiddleware = async req => {
    console.log('Custom middleware executed before next-intl')
    return req
}

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix
})

export default async function middleware(
    req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
    await customMiddleware(req)
    return intlMiddleware(req)
}

export const config = {
    matcher: ['/', '/(be|en|cn|fr|ge|in|it|po|ru|sp|sw|th|tu)/:path*']
}
