This is a Next.js portfolio project for Ade Mas Wahyu.

## Local development

```bash
bun run dev
```

## Build

```bash
bun run build
```

The project is configured as static export, so build output is generated to `out/`.

## Deploy to Cloudflare Pages

This project is prepared for Cloudflare Pages using **Next.js (Static HTML Export)**.

Use these settings in Cloudflare Pages:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Build output directory: `out`
- Production branch: `main`

After first deploy, attach custom domain:

- `ademaswahyu.my.id`

Official references:

- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
