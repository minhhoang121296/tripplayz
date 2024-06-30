export const LineChartDetail = () => {
    return (
        <div className='w-full bg-black-darkBlack'>
            <div className='container mx-auto flex w-full flex-col gap-[50px] px-5 py-[44px] md:gap-[62px] md:py-[94px]'>
                <div className='flex w-full flex-col gap-[30px] text-center text-white'>
                    <p className='text-3xl font-semibold md:text-4xl'>
                        Title Section Delirium
                    </p>
                    <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod.
                    </p>
                </div>
                <div className='hidden flex-col items-center gap-[30px] md:flex md:flex-row'>
                    <div className='flex flex-none flex-col gap-4 text-center'>
                        <p className='text-2xl font-semibold text-white'>
                            14 150
                        </p>
                        <span className='break-keep text-6xl text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                            +14 150
                        </span>
                    </div>
                    <div className='w-full border-b border-gray-lightGray'></div>
                    <div className='flex flex-none flex-col gap-4 text-center'>
                        <p className='text-2xl font-semibold text-white'>
                            23456h
                        </p>
                        <span className='text-6xl text-blue drop-shadow-[0_4px_40px_#0055FF80]'>
                            +23456
                        </span>
                    </div>
                </div>
                <div className='flex w-full justify-center'>
                    <img
                        src='/images/app/line-chart.png'
                        alt='chart'
                        className='max-h-[320px] w-full object-fill  md:w-[620px]'
                    />
                </div>
            </div>
        </div>
    )
}
