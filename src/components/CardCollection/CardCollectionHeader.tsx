import JsonRte from '../Primitives/JsonRte'

import { Header as HeaderProps } from '@/types/components'

const CardCollectionHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { $, title, text, ctas } = props
    return (
        <div className='flex flex-wrap flex-col md:flex-row justify-between lg:items-center mb-4'>
            <div className='sm:w-3/4' >
                <h5
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    {...$?.title}>
                    {title}</h5>
                {text
          && <div
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              {...$?.text}>
              <JsonRte body={text} />
          </div>
                }
            </div>
        </div>
    )
}


export { CardCollectionHeader }