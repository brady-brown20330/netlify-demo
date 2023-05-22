import JsonRte from '../Primitives/JsonRte'

// import { Header as HeaderProps } from '@/types/components'

const CardCollectionHeader: React.FC<any> = (props: any) => {
    const { $, title, text, ctas } = props
    return (
        <div className='flex flex-wrap flex-col md:flex-row justify-between lg:items-center mb-4'>
            <div className='sm:w-3/4' >
                <h5>
                    {title}</h5>
                {text
          && <div>
              <JsonRte body={text} />
          </div>
                }
            </div>
        </div>
    )
}


export { CardCollectionHeader }