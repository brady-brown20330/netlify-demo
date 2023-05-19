import { Page } from '@/types'

export const SEO: React.FC<Page.SeoProps> = (props: Page.SeoProps) => {

    const { no_follow, no_index, show_in_site_search, show_in_sitemap, description, og_meta_tags, canonical_url, locale } = props

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

    let siteRobots
    if (show_in_site_search && show_in_sitemap) {
        siteRobots = 'showinsitesearch,showinsitemap'
    } else if (show_in_site_search) {
        siteRobots = 'showinsitesearch'
    } else if (show_in_sitemap) {
        siteRobots = 'showinsitemap'
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
                property='og:title'
                content={og_meta_tags?.title}
            />
            <meta
                property='og:description'
                content={og_meta_tags?.description}
            />
            {og_meta_tags?.image?.url && <meta
                property='og:image'
                content={og_meta_tags?.image?.url}
            />}
            <meta
                name='robots'
                content={robots} key='robots'
            />
            <meta
                name='robots'
                content={siteRobots}
                key='robots' />
            <meta
                property='og:locale'
                content={locale || 'en-us'}
            />
            {/* <meta name='theme-color' content='#317EFB' /> */}
            {/* <meta property='og:site_name' content='Pets - Products' />*/}
            {/* <meta property='og:type' content='article' />  */}
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
