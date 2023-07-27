import { buildLinkUrl } from '@/utils'
import Link from 'next/link'

import { LinkComponent} from '@/types/components'

const LinkComponent: React.FC<LinkComponent> = (props: LinkComponent) => {
    const { url, children, className, $ } = props
    const elemattr = {className, ['data-title']: props?.['data-title'], ...$ }

    let internal_link, external_link
    if ( typeof url !== 'string') {
        internal_link = url
    } else {
        external_link = url
    }
  

    const href = buildLinkUrl(internal_link, external_link)


    const LinkWrapper = () => <Link href={`${href}`} {...elemattr}>
        {children}
    </Link>

    const LinkPlaceholder = () => <span {...elemattr}>
        {children}
    </span>

    return (<>{href ? <LinkWrapper /> : <LinkPlaceholder />}</>)
}
export { LinkComponent }