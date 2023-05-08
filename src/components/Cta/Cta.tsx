import { CtaButton } from './CtaButton'
import { CtaLink } from './CtaLink'
import { Cta as CtaProps, CtaType } from '@/types/components'

const Cta: React.FC<CtaProps> = (props: CtaProps) => {
    const { type } = props

    return (<div className='text-sm font-semibold text-black no-underline'>
        {type === CtaType.button 
            ? <CtaButton {...props} /> 
            : <CtaLink {...props} />}
    </div>
    )
}
export { Cta }

