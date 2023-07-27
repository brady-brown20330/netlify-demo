import { CardCollectionHeader } from '@/types/components'
// import { Header as HeaderProps } from '@/types/components'

const CardCollectionHeader: React.FC<CardCollectionHeader> = (props: CardCollectionHeader) => {
    const { $, heading, sub_heading } = props

    return (
        <div className='relative mx-auto flex max-w-4xl flex-col items-center text-center my-16'>
            {heading && <h2
                {...$?.heading}
            >
                {heading}
            </h2>}
            {sub_heading && <p
                className={'mt-[22px] text-lg text-[#5B6B86] dark:text-white'}
                {...$?.sub_heading}
            >
                {sub_heading}
            </p>}
        </div>
    )
}


export { CardCollectionHeader }