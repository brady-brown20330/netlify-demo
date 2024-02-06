import React from 'react'
import { SEO } from '@/components'
import { SeoProps } from '@/types/pages'

const PageWrapper:React.FC<SeoProps & React.PropsWithChildren> = ({ locale, title, summary, url, seo, children}: SeoProps & React.PropsWithChildren) => {
    return <>
        <SEO url={url} locale={locale} title={title} seo={seo} summary={summary}/>
        {children}
    </>
}

export {PageWrapper}