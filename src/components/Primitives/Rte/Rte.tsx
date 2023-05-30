import { FunctionComponent } from 'react'
import parse from 'html-react-parser'

import { Rte as RteProps } from '@/types/components'

const Rte: FunctionComponent<RteProps> = (props: RteProps) => {
    const { $ , content } = props

    return (
        <div className={'py-16 px-8 bg-[#F5F5F5] dark:bg-transparent'}>
            <div className='rte max-w-7xl mx-auto' {...$?.content}>{content && parse(content)}</div>
        </div>
    )
}

export {Rte}
