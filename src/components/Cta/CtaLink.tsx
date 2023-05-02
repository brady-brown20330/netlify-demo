import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'

import { Link } from '@/components';
import { classNames } from '@/utils';

import { Color, Cta } from '@/types/components';

const CtaLink: React.FC<Cta> = (props: Cta) => {
    const { text, color } = props

    const LinkStyle = () => classNames(
        color === Color.primary ? 'link-primary-sm' :
            color === Color.secondary ? 'link-secondary-sm' :
                color === Color.tertiary ? 'link-tertiary-sm' : 'link-primary-sm',
        'flex'
    )

    return (<Link {...props} className={LinkStyle()}>
        {text}
        <ArrowSmallRightIcon className="h-6 w-6" aria-hidden="true" />
    </Link>
    )
}
export { CtaLink }