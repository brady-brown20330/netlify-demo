import { buildLinkUrl } from '@/utils'
// import { useLocalization } from "@/hooks";

import { LinkComponent} from '@/types/components'

const Link: React.FC<LinkComponent> = (props: LinkComponent) => {
    const { $, url, children, className } = props
    
    let internal_link, external_link
    if ( typeof url !== 'string') {
        internal_link = url
    } else {
        external_link = url
    }
  

    const href = buildLinkUrl(internal_link, external_link, 'en-us')


    const LinkWrapper = () => <a href={`${href}`} className={className}
        // eslint-disable-next-line react/prop-types
        {...$?.url}>
        {children}
    </a>

    const LinkPlaceholder = () => <span className={className}
        // eslint-disable-next-line react/prop-types
        {...$?.url}>
        {children}
    </span>

    return (<>{href ? <LinkWrapper /> : <LinkPlaceholder />}</>)
}
export { Link }