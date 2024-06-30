import { useTranslations } from 'next-intl'

export const Liquidity = () => {
    const t = useTranslations('')

    const images = [
        {
            src: '/images/branch/barclays.png',
            alt: 'barclays'
        },
        {
            src: '/images/branch/chase.png',
            alt: 'chase'
        },
        {
            src: '/images/branch/citibank.png',
            alt: 'citibank'
        },
        {
            src: '/images/branch/Deutsche_Bank-Logo.png',
            alt: 'Deutsche_Bank'
        },
        {
            src: '/images/branch/Dukascopy_Swiss_Banking.png',
            alt: 'Dukascopy'
        },
        {
            src: '/images/branch/hsbc-logo.png',
            alt: 'hsbc-logo'
        },
        {
            src: '/images/branch/icbc-seeklogo.png',
            alt: 'icbc-seeklogo'
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
            src: '/images/branch/Wells_Fargo_Bank.png',
            alt: 'Wells_Fargo_Bank'
        }
    ]

    return (
        <div className='container mx-auto flex w-full flex-col gap-6 px-5 md:gap-[60px]'>
            <span className='text-3xl font-semibold md:text-4xlm'>
                {t('Liquidity_Providers')}
            </span>
            <div className='grid grid-cols-2 gap-10 md:grid-cols-5'>
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
