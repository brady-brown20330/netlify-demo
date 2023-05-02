import { CtaCollection } from '../Cta';
import JsonRte from "../Primitives/JsonRte";

import { Header as HeaderProps } from '@/types/components';

const CardCollectionHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { $, title, text, ctas } = props
  return (
    <div className='flex flex-wrap flex-col md:flex-row justify-between lg:items-center mb-4'>
      <div className='sm:w-3/4' >
        <h5
          // @ts-expect-error
          {...$?.title}>
          {title}</h5>
        {text &&
          // @ts-expect-error
          <div {...$?.text}>
            <JsonRte body={text} />
          </div>
        }
      </div>
      <CtaCollection ctas={ctas} />
    </div>
  )
}


export { CardCollectionHeader }