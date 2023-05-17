import { NextComponentType } from 'next'
import { useRouter } from 'next/router'

interface DynamicRenderingProps {
  // Add any props needed for dynamic rendering
  asPath?:string
}

const withDynamicRendering = <P extends object>(
    WrappedComponent: any
) => {
    const DynamicRenderingWrapper: NextComponentType<P> = (props) => {
        const router = useRouter()
        console.log('🚀 ~ file: withRouter.tsx:14 ~ router:', router)
        // Perform dynamic rendering based on router properties
        // ...
        const data = {
            url: '/about',
            content_type: 'content_type_1'
        }
        console.log(props)
        if(router.asPath === data.url) {
            console.log('🚀 ~ file: withRouter.tsx:22 ~ router.pathname === data.url:', router.pathname === data.url)
            // router.push(`/${data.content_type}`, data.url)

        }
        // if (/* Condition for dynamic rendering */) {
        return <WrappedComponent {...props}  />
    // } else {
    //   // Render a fallback component or redirect to another page
    //   return <div>Fallback component or redirect</div>;
    // }
    }

    return DynamicRenderingWrapper
}

export default withDynamicRendering