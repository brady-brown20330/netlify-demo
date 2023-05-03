export * from './homepage';
export * from './landingPage';

export type SeoProps = {
    title: string
    description: string
    canonical_url: string,
    og_meta_tags: {
      description: string
      image: { url: string }
      title: string
    }
    no_follow: string,
    no_index: string
    show_in_site_search: string
    show_in_sitemap: string
    locale: string | undefined
}