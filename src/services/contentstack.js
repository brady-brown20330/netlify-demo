/* eslint-disable max-len */
/* eslint-disable no-undef */
import _ from 'lodash'
import { Stack, isEditButtonsEnabled } from '@/config'
import { getLocaleCode } from '../utils'
import { addEditableTags, jsonToHTML } from '@contentstack/utils'


const renderOption = {
    span: (node, next) => next(node.children)
}

/**
  *
  * fetches all the entries from specific content-type
  * @param {* content-type uid} contentTypeUid
  * @param {* locale} locale
  * @param {* reference field name} referenceFieldPath
  * @param {* Json RTE path} jsonRtePath
  *
  */
export const getEntries = async (contentTypeUid, locale, referenceFieldPath, jsonRtePath, previewQuery) => {
    try {
        previewQuery ? Stack.livePreviewQuery(previewQuery) : Stack.livePreviewQuery({})
        const entryQuery = Stack.ContentType(contentTypeUid)
            .Query()
            .language(locale)
        if (referenceFieldPath) entryQuery.includeReference(referenceFieldPath)

        //   if (localeConfig.allow_fallback) {
        //     entryQuery
        //       .includeFallback()
        //   }
        let result = await entryQuery
            .includeFallback()
            .toJSON()
            .includeEmbeddedItems()
            .addParam('include_metadata', 'true')
            .find()

        if (jsonRtePath) {
            jsonToHTML({
                entry: result,
                paths: jsonRtePath,
                renderOption: renderOption
            })
        }

        if (result?.length > 0 && _.isEmpty(result[0]) ) {
            return null
        }
        result?.[0]?.forEach((entry) => {
            return addEditableTags(entry, contentTypeUid, true, locale)
        })
        const data = result[0]
        return data
    }
    catch (error) {
        throw new Error(error.message)
    }
}




/**
 *
 * fetches all the entries from specific content-type
 * @param {* content-type uid} contentTypeUid
 * @param {* locale} locale
 * @param {* reference field name} referenceFieldPath
 * @param {* Json RTE path} jsonRtePath
 *
 */
export const getEntryByUrl = async (contentTypeUid, locale, entryUrl, referenceFieldPath, jsonRtePath, previewQuery) => {
    try {
        previewQuery ? Stack.livePreviewQuery(previewQuery) : Stack.livePreviewQuery({})
        const entryQuery = Stack.ContentType(contentTypeUid)
            .Query()
            .language(locale)
        if (referenceFieldPath) entryQuery.includeReference(referenceFieldPath)

        // if (localeConfig.allow_fallback) {
        //   entryQuery
        //     .includeFallback()
        // }
        let result = await entryQuery
            .includeFallback()
            .where('url', `${entryUrl}`)
            .toJSON()
            .includeEmbeddedItems()
            .addParam('include_metadata', 'true')
            .find()
        
        if (jsonRtePath) {
            jsonToHTML({
                entry: result,
                paths: jsonRtePath,
                renderOption: renderOption
            })
        }

        if (result?.length > 0 && _.isEmpty(result[0]) ) {
            return null
        }


        isEditButtonsEnabled && addEditableTags(result[0][0], contentTypeUid, true, locale)
        const data = result[0][0]
        return data
    }
    catch (error) {
        throw new Error(error.message)

    }
}
