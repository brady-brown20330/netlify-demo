import { ParsedUrlQuery } from 'querystring'
import { Article } from '@/types/pages'
import _ from 'lodash'

export const filterArticles = (articles?:Article[]|[], params?:ParsedUrlQuery) => {
    if (!articles && !params) return []
    if ( _.get(params, 'slug[0]') === 'region') {
        return _.compact(_.filter(articles, (elem) => {
            return _.includes(_.get(elem, 'region'), _.get(params, 'slug[1]'))
        }))
    }
    if ( _.get(params, 'slug[0]') === 'topic') {
        return _.compact(_.filter(articles, (elem) => {
            return _.includes(_.get(elem, 'topics'), _.get(params, 'slug[1]'))
        }))
    }
}