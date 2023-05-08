
import { Cta } from './Cta'
import { CtaCollection as CtaCollectionProps } from '@/types/components'

const CtaCollection: React.FC<CtaCollectionProps> = (props: CtaCollectionProps) => {
    const { ctas } = props
    return (
        <>
            {ctas && ctas.map((c, idx) => {
                return (<Cta key={idx} {...c} />
                )
            })
            }
        </>
    )
}
export { CtaCollection }
