# Kinward Energy — Ready-to-deploy site

This repository is a ready-to-deploy React + Tailwind landing page for **Kinward Energy**.
It is configured to deploy to **GitHub Pages** and to use the custom domain **https://www.kinwardenergy.com**.

## Quick setup

1. Install dependencies:
```bash
npm install
```

2. Add the repo to GitHub:
```bash
git init
git remote add origin https://github.com/bnasiri2024/kinward-energy.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```
This will build the site and publish it.

## Point your custom domain (Porkbun)

In your GitHub repo > Settings > Pages, set the Custom domain to:
```
www.kinwardenergy.com
```

Then in **Porkbun** DNS settings add the following records:

- CNAME
  - Host: `www`
  - Value: `bnasiri2024.github.io`
  - TTL: default

- A records for the root domain (`kinwardenergy.com`):
  - Host: `@`
  - Value: `185.199.108.153`
  - Host: `@`
  - Value: `185.199.109.153`
  - Host: `@`
  - Value: `185.199.110.153`
  - Host: `@`
  - Value: `185.199.111.153`

After DNS propagation (minutes to a few hours), your site will be live at:
`https://www.kinwardenergy.com`

## Replacing placeholder images and logo

All images are in `public/assets/`. Replace them with your own images while keeping the same filenames:
- hero.jpg
- solar-field.jpg
- wind-farm.jpg
- storage.jpg
- fuel-cell.jpg
- child-hand.jpg
- logo.svg

## Notes
- This template uses **Tailwind CSS**. If you want to change colors or fonts, edit `tailwind.config.js` and `src/index.css`.
- If you prefer to use Vercel or Netlify later, the `build/` folder can be uploaded directly.