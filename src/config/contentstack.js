import Contentstack from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils'

export const Stack = (process.env.CONTENTSTACK_API_KEY && process.env.CONTENTSTACK_DELIVERY_TOKEN) && Contentstack.Stack({
    api_key: process.env.CONTENTSTACK_API_KEY,
    delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    environment: process.env.CONTENTSTACK_ENVIRONMENT,
    branch: process.env.CONTENTSTACK_BRANCH,
    region: Contentstack.Region[process.env.CONTENTSTACK_REGION],
    live_preview: {
        enable: true,
        management_token: process.env.CONTENTSTACK_MANAGEMENT_TOKEN
    }
})

ContentstackLivePreview.init({
    enable: process.env.isLivePreviewEnabled,
    debug: false,
    ssr: true,
    stackDetails: {
        apiKey: process.env.CONTENTSTACK_API_KEY
    }
})

export const livePreviewQuery = (query) => {
    Stack.livePreviewQuery(query)
}

export const isLivePreviewEnabled= process.env.isLivePreviewEnabled
export const isEditButtonsEnabled= process.env.isEditButtonsEnabled