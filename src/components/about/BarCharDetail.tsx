export const BarCharDetail = () => {
    return (
        <div className='container mx-auto flex w-full flex-col px-5 py-[44px]  md:py-[94px]'>
            <div className='flex w-full flex-col gap-[30px] text-center md:gap-[64px]'>
                <div className='flex w-full flex-col items-center justify-center gap-[30px] text-center'>
                    <p className='text-3xl font-semibold md:text-4xl'>
                        Title Section Delirium
                    </p>
                    <span className='md:w-1/2'>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod.
                    </span>
                </div>
                <div className='w-full'>
                    <img
                        src='/images/app/barchart.png'
                        alt='chart'
                        className='w-full object-contain'
                    />
                </div>
            </div>
        </div>
    )
}
