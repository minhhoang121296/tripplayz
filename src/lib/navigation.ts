'use client'
import { routesData } from '@/constants'
import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'

export const localePrefix = 'always'

export const pathnames = routesData satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
