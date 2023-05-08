import Contentstack from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils'

const {
    CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_MANAGEMENT_TOKEN,
    CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_REGION,
    CONTENTSTACK_EXTENSION_ASSET_PRESET
} = process.env


export const initStack = () => {
    try {
        const CONTENTSTACK_CDN_HOST = CONTENTSTACK_REGION === 'EU' ? 'eu-cdn.contentstack.com': 'cdn.contentstack.io'
        if (CONTENTSTACK_API_KEY && CONTENTSTACK_DELIVERY_TOKEN) {
            const Stack = Contentstack.Stack({
                api_key: CONTENTSTACK_API_KEY,
                delivery_token: CONTENTSTACK_DELIVERY_TOKEN,
                environment: CONTENTSTACK_ENVIRONMENT,
                region: Contentstack.Region[CONTENTSTACK_REGION],
                live_preview: {
                    management_token: CONTENTSTACK_MANAGEMENT_TOKEN,
                    enable: true
                }
            })
            Stack.setHost(CONTENTSTACK_CDN_HOST)
            return Stack

        }
    } catch (err) {
        console.log('Error while initializing stack', err)
    }

}

ContentstackLivePreview.init({
    enable: process.env.isLivePreviewEnabled,
    ssr: true,
    stackDetails: {
        apiKey: process.env.CONTENTSTACK_API_KEY
    }
})

export const Stack = initStack()

export const isLivePreviewEnabled= process.env.isLivePreviewEnabled
export const isEditButtonsEnabled= process.env.isEditButtonsEnabled


export const extensions = {
    assetPresetUid: CONTENTSTACK_EXTENSION_ASSET_PRESET ? CONTENTSTACK_EXTENSION_ASSET_PRESET : ''
}
