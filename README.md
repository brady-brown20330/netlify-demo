This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/index.tsx`. The page auto-updates as you edit the file.

## .env.local file required content
```
CONTENTSTACK_API_KEY=<<CONTENTSTACK_API_KEY>>
CONTENTSTACK_DELIVERY_TOKEN=<<CONTENTSTACK_DELIVERY_TOKEN>>
CONTENTSTACK_STACK_HOST=cdn.contentstack.io

CONTENTSTACK_API_HOST=api.contentstack.io
CONTENTSTACK_MANAGEMENT_TOKEN=<<CONTENTSTACK_MANAGEMENT_TOKEN>>
CONTENTSTACK_LIVE_PREVIEW=true
CONTENTSTACK_LIVE_EDIT_TAGS=true
# CONTENTSTACK_EXTENSION_ASSET_PRESET=
DEFAULT_LOCALE=en-us
CONTENTSTACK_REGION=NA
CONTENTSTACK_ENVIRONMENT=<<CONTENTSTACK_ENVIRONMENT>>
```


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
