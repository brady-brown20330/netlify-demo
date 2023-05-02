import Contentstack from "contentstack";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

const {
    CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_MANAGEMENT_TOKEN,
    CONTENTSTACK_STACK_HOST,
    CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_LIVE_PREVIEW,
    CONTENTSTACK_LIVE_EDIT_TAGS,
    CONTENTSTACK_REGION
} = process.env

export const initStack = () => {
    try {
        if (CONTENTSTACK_API_KEY && CONTENTSTACK_DELIVERY_TOKEN) {
            console.log('=======stack init')

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
            CONTENTSTACK_STACK_HOST ? Stack.setHost(CONTENTSTACK_STACK_HOST) : Stack.setHost('cdn.contentstack.io')
            return Stack

        }
    } catch (err) {
        console.log('Error while initializing stack', err)
    }

}

ContentstackLivePreview.init({
    stackDetails: {
        apiKey: CONTENTSTACK_API_KEY
    },
    enable: true,
    ssr:true
})

export const Stack = initStack()

export const isLivePreviewEnabled = CONTENTSTACK_LIVE_PREVIEW === 'true';
export const isEditButtonsEnabled = CONTENTSTACK_LIVE_PREVIEW === 'true' && CONTENTSTACK_LIVE_EDIT_TAGS === 'true';
// export const extensions = {
//   assetPresetUid: CONTENTSTACK_EXTENSION_ASSET_PRESET ? CONTENTSTACK_EXTENSION_ASSET_PRESET : ''
// }
