import { buildLinkUrl } from '@/utils'
import Link from 'next/link'

import { LinkComponent} from '@/types/components'

const LinkComponent: React.FC<LinkComponent> = (props: LinkComponent) => {
    const { url, children, className } = props

    let internal_link, external_link
    if ( typeof url !== 'string') {
        internal_link = url
    } else {
        external_link = url
    }
  

    const href = buildLinkUrl(internal_link, external_link)


    const LinkWrapper = () => <Link href={`${href}`} className={className}>
        {children}
    </Link>

    const LinkPlaceholder = () => <span className={className}>
        {children}
    </span>

    return (<>{href ? <LinkWrapper /> : <LinkPlaceholder />}</>)
}
export { LinkComponent }