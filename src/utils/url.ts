import _ from 'lodash'

import { InternalLink } from '../types/components'

export const buildLinkUrl = (internalLink?: InternalLink[], url?: string, locale?: string) => {
    let result = ''

    if (internalLink && internalLink.length) {
        if (internalLink[0].url) {
            result = internalLink[0].url
            if (url) {
                if (url.startsWith('?')) {
                    result = result.concat(url)
                } else {
                    if (!_.isEmpty(url)) {
                        console.debug('URL field information not used - no valid Query Parameters found', url)
                    }
                }
            }
        } else {
            console.error('Internal link not resolved', internalLink)
        }
        if (locale) {
            result = `/${locale}${result}`
        }
    } else if (url && (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('/'))) {
        result = url
    } else if (url && url.startsWith('www.')) {
        result = 'https://'.concat(url)
    } else {
        if (!_.isEmpty(url)) {
            console.debug('Static URL is not valid', url)
        }
    }
    return result
}
export const getUnlocalizedRelativePath = (path: string, locale?: string): string => {
    if (locale) {
        return path.substring(path.lastIndexOf(locale) + locale.length)
    } else {
        return path
    }
}