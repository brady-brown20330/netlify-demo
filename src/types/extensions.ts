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
    "query-params": string
}

// {
//     "uid": "blt89ae5d6fca946872",
//     "_content_type_uid": "sys_assets",
//     "lookup": "ee9d685b-ac85-48e8-a6c3-7f701334f2db",
//     "metadata": {
//         "preset": {
//             "uid": "ee9d685b-ac85-48e8-a6c3-7f701334f2db",
//             "name": "mobile",
//             "options": {
//                 "transform": {
//                     "height": "2428.1",
//                     "width": "2428.1"
//                 },
//                 "crop": {
//                     "height": "2428.1",
//                     "width": "2428.1",
//                     "x": "240.2",
//                     "y": "506.5"
//                 },
//                 "effects": {
//                     "saturate": -100
//                 }
//             },
//             "query-params": "height=2428.1&width=2428.1&saturation=-100&crop=2428.1,2428.1,x240.2,y506.5"
//         },
//         "extension_uid": "blt02a30352a9800712"
//     },
//     "asset": {
//         "_version": 2,
//         "is_dir": false,
//         "uid": "blt89ae5d6fca946872",
//         "ACL": {},
//         "content_type": "image/jpeg",
//         "created_at": "2023-01-22T15:52:55.703Z",
//         "created_by": "blt227168c1d608663c",
//         "file_size": "803523",
//         "filename": "woman.jpg",
//         "parent_uid": "bltf7f127bbb2aacaa0",
//         "tags": [],
//         "title": "woman.jpg",
//         "updated_at": "2023-02-02T19:53:06.124Z",
//         "updated_by": "blt227168c1d608663c",
//         "_metadata": {
//             "extensions": {
//                 "blt02a30352a9800712": [
//                     {
//                         "uid": "cs92eefa8de0b95aaf",
//                         "scope": "local",
//                         "_version": 10,
//                         "presets": [
//                             {
//                                 "uid": "ee9d685b-ac85-48e8-a6c3-7f701334f2db",
//                                 "name": "mobile",
//                                 "options": {
//                                     "transform": {
//                                         "height": "2428.1",
//                                         "width": "2428.1"
//                                     },
//                                     "crop": {
//                                         "height": "2428.1",
//                                         "width": "2428.1",
//                                         "x": "240.2",
//                                         "y": "506.5"
//                                     },
//                                     "effects": {
//                                         "saturate": -100
//                                     }
//                                 },
//                                 "query-params": "height=2428.1&width=2428.1&saturation=-100&crop=2428.1,2428.1,x240.2,y506.5"
//                             },
//                             {
//                                 "uid": "44f43147-1933-4cfc-945e-7a475e4c43c6",
//                                 "name": "tablet",
//                                 "options": {
//                                     "transform": {
//                                         "height": "2051.3",
//                                         "width": "2735.0"
//                                     },
//                                     "crop": {
//                                         "height": "2051.3",
//                                         "width": "2735.0",
//                                         "x": "0.0",
//                                         "y": "526.6"
//                                     },
//                                     "effects": {
//                                         "saturate": 100
//                                     }
//                                 },
//                                 "query-params": "height=2051.3&width=2735.0&saturation=100&crop=2735.0,2051.3,x0.0,y526.6"
//                             }
//                         ]
//                     }
//                 ]
//             }
//         },
//         "publish_details": {
//             "environment": "blt62e7a295979cca83",
//             "locale": "en-us",
//             "time": "2023-02-02T19:53:08.322Z",
//             "user": "blt227168c1d608663c"
//         },
//         "url": "https://images.contentstack.io/v3/assets/blt68793bd73797a1b5/blt89ae5d6fca946872/63cd5bd76bf00e62d438048a/woman.jpg"
//     }
// }
