import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ErrorBoundary } from 'react-error-boundary'

import {SingleCol} from '@/layout'
import { getAppConfigData } from '@/loaders'
import { App } from '@/types'
import { ErrorHandler } from '@/components'
import '@contentstack/live-preview-utils/dist/main.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './globals.css'
import '@/styles/style.css'

const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
    title: 'Compass starter',
    description: 'Provided by Contentstack'
}

const fetchAppConfig = async () => {
    const web_config:App.csWebConfig = await getAppConfigData('en') || null
    return {
        web_config: web_config?.length > 0 ? web_config[0] : null
    }
}

export default async function RootLayout ({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {

    const {web_config} = await fetchAppConfig()

    return (
        <html lang='en'>
            <body className={inter.className}>
                <ErrorBoundary
                    FallbackComponent={ErrorHandler}
                >
                    <SingleCol
                        {...web_config}
                    >
                        {children}
                    </SingleCol>
                </ErrorBoundary>
            </body>
        </html>
    )
}
