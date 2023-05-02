import { Link } from '@/components'
import { classNames } from '@/utils';

import { Color, Cta as CtaProps } from '@/types/components';

const CtaButton: React.FC<CtaProps> = (props: CtaProps) => {
  const { text, color } = props

  const BtnStyle = () => classNames(
    color === Color.primary ? 'btn-primary-lg' :
      color === Color.secondary ? 'btn-secondary-lg' :
        color === Color.tertiary ? 'btn-tertiary-lg' : 'btn-primary-lg',
    'flex'
  )

  return (
    <Link {...props} className={BtnStyle()}>
      {text}
    </Link>
  )
}
export { CtaButton }