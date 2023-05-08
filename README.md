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
CONTENTSTACK_MANAGEMENT_TOKEN=<<CONTENTSTACK_MANAGEMENT_TOKEN>>
CONTENTSTACK_REGION=<<CONTENTSTACK_REGION>>
CONTENTSTACK_ENVIRONMENT=<<CONTENTSTACK_ENVIRONMENT>>

CONTENTSTACK_LIVE_PREVIEW=<< true | false >>
CONTENTSTACK_LIVE_EDIT_TAGS=<< true | false >>

# optional variables
# CONTENTSTACK_EXTENSION_ASSET_PRESET=
DEFAULT_LOCALE=en-us
# LOCALE_COOKIE_NAME=locale,
# LOCALSTORAGE_WEBCONFIG_KEY=conf
# LOCALSTORAGE_WEBCONFIG_TTL=84600

```


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
