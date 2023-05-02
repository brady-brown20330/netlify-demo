import { buildLinkUrl } from '@/utils';
// import { useLocalization } from "@/hooks";

import { LinkComponent} from '@/types/components'

const Link: React.FC<LinkComponent> = (props: LinkComponent) => {
const { $, internal_link, url, children, className } = props;
  
  // const { currentlocaleName } = useLocalization();

  // const href = buildLinkUrl(internal_link, url, currentlocaleName);
  const href = buildLinkUrl(internal_link, url, 'en-us');


  const LinkWrapper = () => <a href={`${href}`} className={className}
    // @ts-expect-error
    {...$?.url}>
    {children}
  </a>

  const LinkPlaceholder = () => <span href={`${href}`} className={className}
    // @ts-expect-error
    {...$?.url}>
    {children}
  </span>

  return (<>{href ? <LinkWrapper /> : <LinkPlaceholder />}</>)
}
export { Link }