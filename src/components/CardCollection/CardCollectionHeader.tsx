import { CardCollectionHeader } from '@/types/components'
import JsonRte from '../Primitives/JsonRte'

// import { Header as HeaderProps } from '@/types/components'

const CardCollectionHeader: React.FC<CardCollectionHeader> = (props: CardCollectionHeader) => {
    const {  heading, sub_heading } = props
    return (
        <div className='relative mx-auto flex max-w-4xl flex-col items-center text-center'>
            {heading && <h2 className={'text-3xl font-bold tracking-tight sm:text-4xl !text-white'}>{heading}</h2>}
            {sub_heading && <p className={'mt-3 text-xl !text-white'}>
                {sub_heading}
            </p>}
        </div>
    )
}


export { CardCollectionHeader }