import { Asset } from './common'

export interface AssetMetadata {
    uid: number
    scope: string
    _version:number
    presets :  AssetPreset[]
}

export interface AssetPreset {
    uid: number
    name: string
    options: {
        transform: {
            height: string,
            width: string
        },
        crop: {
            height: string,
            width: string,
            x: string,
            y: string
        },
        effects: {
            saturate: number
        }
    },
    'query-params': string
}

export interface resolvePresetParams {
    asset:Asset
    presetName?:string
    extension_uid:string
    presetUID?:string
}
