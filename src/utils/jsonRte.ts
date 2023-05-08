/* eslint-disable @typescript-eslint/no-unused-vars */
export const renderOptions = {
    img: (asset: any) => {
        return (
            `<img src=${asset?.attrs?.url} alt=${asset?.alt} />`
        )
    },
    'cta_widget': (asset: any, metadata: any) => {
        return (
            `<div style="text-align: ${asset?.attrs?.style?.['text-align']}" >
        <a
          href=${asset?.attrs?.url}
          class='btn ${asset?.attrs?.ctaPreference}'
          target=${asset?.attrs?.target}
          style="${asset?.attrs?.textArea}"
        >
          ${asset?.children && asset?.children[0] && asset?.children[0]?.text}
        </a>
      </div>`
        )
    },
    'code': (asset: any, metadata: any) => {
        return (
            `<div className="code">${asset.children[0].text}</div>`
        )
    },
    'embed_video': (asset: any, metadata: any) => {
        return (
            ` <p dangerouslySetInnerHTML={{ __html: ${asset?.attrs?.url} }} />`

        )
    }
    //   'variable-plugin': (asset: any) => {
    //     const variableData = groupData?.data?.length && groupData?.data[0]?.filter((value: any) => asset.attrs.var.uid === value.uid)
    //     if(variableData===false){
    //       return(
    //         ''
    //       )
    //     }else{
    //       return (
    //         variableData&&variableData[0]?.group?.length > 0 && variableData[0]?.group?.map(
    //           (variable: { multi_line: string; url: string }) =>
    //             variable?.url 
    //               ? `<div>
    //               <a href=${variable?.url}>${variable?.multi_line}</a>
    //             </div>`
    //               :`<div>
    //               <p>${variable?.multi_line}</p>
    //             </div>`   
    //         )
    //       )
    //     }

    //   },
    //   'market-pre': (asset: any, metadata: any) => {
    //     return (
    //       `<div  class='marketPre' data-country=${asset?.attrs?.checked.length>0&&asset?.attrs?.checked}> `
    //     )
    //   },
    //   'market-post': (asset: any, metadata: any) => {
    //     return (
    //       '</div>'
    //     )
    //   },
    //   'block': {
    //     'product_component': (entry: any, metadata: any) => {
    //       const totalproduct = []
    //       if (entry?.product?.data?.length) {
    //         imageCardMediumObj.title = entry?.title
    //         for (let i = 0; i < entry.product.data.length; i++) {
    //           const product = {
    //             'title': entry.product?.data[i]?.name,
    //             'abstract': entry.product?.data[i]?.price,
    //             'url': `p${entry.product?.data[i]?.custom_url.url}`,
    //             'image': {
    //               'url': entry.product?.data[i]?.primary_image.url_standard,
    //               'title': entry.product?.data[i]?.value
    //             }
    //           }
    //           totalproduct.push(product)
    //           imageCardMediumObj.image_section = totalproduct
    //         }
    //       }

    //       return (
    //         ReactDOMServer.renderToString(
    //           <ImageCardMedium
    //             contents={{
    //               title: imageCardMediumObj?.title,
    //               paragraph: '',
    //               image_section: imageCardMediumObj?.image_section?.length
    //                 ? imageCardMediumObj.image_section
    //                 : undefined
    //             }}
    //           />)
    //       )
    //     }
    //   },
}

