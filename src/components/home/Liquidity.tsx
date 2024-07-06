import { useTranslations } from 'next-intl'

export const Liquidity = () => {
    const t = useTranslations('')
    const imageV1 = [
        {
            src: '/images/branch/barclays.png',
            alt: 'barclays'
        },
        {
            src: '/images/branch/chase.png',
            alt: 'chase'
        },
        {
            src: '/images/branch/lloyds-bank-seeklogo.png',
            alt: 'lloyds-bank-seeklog'
        },
        {
            src: '/images/branch/ubs-logo.png',
            alt: 'ubs-logo'
        },
        {
            src: '/images/branch/hsbc-logo.png',
            alt: 'hsbc-logo'
        }
    ]

    const images = [
        {
            src: '/images/branch/citybank.png',
            alt: 'citibank'
        },

        {
            src: '/images/branch/Dukascopy_Swiss_Banking.png',
            alt: 'Dukascopy'
        },
        {
            src: '/images/branch/Wells_Fargo_Bank.png',
            alt: 'Wells_Fargo_Bank'
        },
        {
            src: '/images/branch/icbc-seeklogo.png',
            alt: 'icbc-seeklogo'
        },
        {
            src: '/images/branch/Deutsche_Bank-Logo.png',
            alt: 'Deutsche_Bank'
        }
    ]

    return (
        <div className='container mx-auto mb-[133px] flex w-full flex-col gap-6 px-5 md:gap-[60px] xl:px-[200px]'>
            <span className='text-3xl font-semibold md:text-4xls'>
                {t('home_liquidity_providers')}
            </span>
            <div className='grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-[92px]'>
                {imageV1.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className='h-[75px] w-full object-contain'
                    />
                ))}
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className='h-[75px] w-full object-contain'
                    />
                ))}
            </div>
        </div>
    )
}
