# Webshop template initialization documentation

- Set `.env` file
- Set `package.json` name
- Adjust `src/appConfig.json` file
- Adjust colors into `src/assets/styles/initial.css` into `:root` - `primary` same as `mainColor` into `src/appConfig.json`
- Replace `src/assets/images` images
- Replace `src/assets/icons/logo.vue` icon
- Replace images (`png`, `ico`, `svg`) into `public` folder
- Adjust `site.webmanifest` into `public` folder
- Replace `Cloudinary` image links
- Set `shippingOptions` into `src\components\cart\CartOrderView.vue`
- If some new pages are added or some of existing is removed adjust `src\server\api\__sitemap__\urls.ts`
- If some new routes are added or some existing is removed adjust `middlewares`

# Default documentation

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
