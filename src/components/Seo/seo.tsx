import { Page } from '@/types'

export const SEO: React.FC<Page.SeoProps> = (props: Page.SeoProps) => {

    const { no_follow, no_index, description, canonical_url, locale } = props

    let robots
    if (no_follow && no_index) {
        robots = 'noindex,nofollow'
    } else if (no_follow) {
        robots = 'noindex'
    } else if (no_index) {
        robots = 'nofollow'
    } else {
        robots = 'index,follow'
    }

    return (
        <>
            <meta
                name='application-name'
                content='Universal Demo'
            />
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
                name='viewport'
                content='width=device-width,initial-scale=1,minimum-scale=1'
            />
            <meta
                name='description'
                content={description}
            />
            <meta
                name='robots'
                content={robots} key='robots'
            />
            <meta
                property='og:locale'
                content={locale || 'en-us'}
            />
            <link
                rel='canonical'
                href={canonical_url}
            />
            <link
                rel='icon'
                href='/favicon.ico'
            />
        </>
    )
}
