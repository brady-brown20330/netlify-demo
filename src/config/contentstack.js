import Contentstack from "contentstack";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import getConfig from "next/config";

const {
    CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_MANAGEMENT_TOKEN,
    CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_REGION,
    CONTENTSTACK_CDN_HOST,
    isLivePreviewEnabled,
    isEditButtonsEnabled
} = getConfig().publicRuntimeConfig;


export const initStack = () => {
    try {
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
	enable: isLivePreviewEnabled,
	ssr: true,
	stackDetails: {
		apiKey: CONTENTSTACK_API_KEY,
	}
});

const Stack = initStack()

export {
    Stack,
    isLivePreviewEnabled,
    isEditButtonsEnabled
}

// export const extensions = {
//   assetPresetUid: CONTENTSTACK_EXTENSION_ASSET_PRESET ? CONTENTSTACK_EXTENSION_ASSET_PRESET : ''
// }
