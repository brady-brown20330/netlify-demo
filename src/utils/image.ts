import _ from "lodash";

import { extensions } from '../config/contentstack'

import { Asset } from "../types/common";
import { ImageRender } from "../types/components";
import { AssetMetadata } from "../types/extensions";

export const buildImageRenderUrl = (asset: Asset, render: ImageRender, presetName?: string) => {

  const assetUrl = new URL(asset.url);
  const preset = getImagePreset(asset, presetName);

  if (render.disableUpscale === undefined || render.disableUpscale) {
    assetUrl.searchParams.append("disable", "upscale")
  }
  //only applies this property to reduce the image size
  if (render.width && asset.dimension && asset.dimension!.width > render.width) {
    assetUrl.searchParams.append("width", render.width.toString())
  }

  //Only applyed if there is no preset or thre is a preset but no width - to prevent overriding the preset settings but still reducing the total image size
  if (render.height && asset.dimension!.height > render.height && (!preset || render.width)) {
    assetUrl.searchParams.append("height", render.height.toString())
  }

  // Don't apply if there is a preset
  if ((render.auto === undefined || render.auto) && !preset) {
    assetUrl.searchParams.append("auto", 'webp')
  }
  if (render.crop && !preset) {
    assetUrl.searchParams.append("crop", render.crop)
  }
  if (render.dpr) {
    assetUrl.searchParams.append("dpr", render.dpr.toString())
  }

  //Apply the preset parameters
  if (preset) {
    const params = preset["query-params"].split('&');
    _.forEach(params, (val) => {
      const keyVal = val.split('=');

      //TODO: workaround - check on ticket https://contentstack.atlassian.net/browse/MKT-1557
      if (!_.isEqual(keyVal[0], 'width') && !_.isEqual(keyVal[0], 'height')) {
        assetUrl.searchParams.append(keyVal[0], keyVal[1]);
      }
    })
  }
  return assetUrl;
}

export const getAssetMetadata = (asset: Asset, extensionId: string) => {
  const { _metadata } = asset;
  if (_.has(_metadata?.extensions, extensionId)) {
    return _metadata?.extensions[extensionId][0] as AssetMetadata;
  }

  return undefined;
}

export const getImagePreset = (asset: Asset, presetName?: string) => {
  if (presetName && extensions?.assetPresetUid) {
    const assetMeta = getAssetMetadata(asset, extensions.assetPresetUid);
    if (assetMeta?.presets) {
      if (assetMeta.presets && assetMeta.presets.length) {
        return _.find(assetMeta.presets, ['name', presetName]);
      }
    }
  }

  return undefined;
}