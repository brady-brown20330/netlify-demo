type ImageAndTextProps = {
    layout?:string
}
export function ImageAndText ({layout}:ImageAndTextProps) {

    return (
        <div className='py-16 bg-[#F0F3F7] dark:bg-black'>
            <div className={`flex max-w-7xl mx-auto ${layout === 'Image-Text' ? 'flex-col-reverse' : 'flex-col'}`}>
                <div className='max-w-2xl lg:mx-0'>
                    <h2 className='text-3xl font-bold tracking-tight dark:text-white sm:text-4xl'>Stay on top of customer support</h2>
                    <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
                    </p>
                </div>
                <div className={`relative overflow-hidden ${layout === 'Image-Text' ? 'mb-8' : 'mt-8'}`}>
                    <div className='mx-auto'>
                        <img
                            src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                            alt='App screenshot'
                            className='h-[200px] w-full bg-white/5 shadow-2xl ring-1 ring-white/10'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
  