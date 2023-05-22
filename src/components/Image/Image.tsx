import _ from 'lodash'

import { buildImageRenderUrl } from '@/utils'

import { Image as ImageType } from '@/types/components'

const Image: React.FC<ImageType> = (props: ImageType) => {
    const { asset, metadata} = props

    return <>

    </>
    // return <picture className={render.className}
    //     {...$?.title}>
    //     {<source media='(max-width: 640px)' srcSet={buildImageRenderUrl(image, render, 'mobile').toString()} />}
    //     <source media='(min-width: 641px) and (max-width: 1024px)' srcSet={buildImageRenderUrl(image, render, 'tablet').toString()} />
    //     <img src={buildImageRenderUrl(image, render, 'desktop').toString()} alt={title} />
    // </picture>
}

export { Image }