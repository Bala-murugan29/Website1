
# Portfolio Website

## Project Info

This is a personal portfolio website built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

## How to Run Locally

1. Clone the repository:
	```sh
	git clone <YOUR_GIT_URL>
	cd <YOUR_PROJECT_NAME>
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Start the development server:
	```sh
	npm run dev
	```

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

You can deploy this project using Vercel, Netlify, or any static hosting provider.

## Custom Domain

To connect a custom domain, follow your hosting provider's instructions.

## Environment variables (for contact form)

- VITE_FORMSPREE_ENDPOINT: (optional) your Formspree endpoint, e.g. `https://formspree.io/f/your-id`. When set, the contact form will POST to Formspree.
- VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY: (optional) EmailJS client-side keys. The project falls back to EmailJS if Formspree is not configured.

Notes:
- Do NOT commit a local `.env` file. Add `.env` to `.gitignore` (already present) and set these variables in your host (Vercel/Netlify/GitHub Pages CI) or locally before building.
- On Vercel previews: make sure devDependencies are installed during build (set Install Command to `npm ci --include=dev` or set the environment variable `NPM_CONFIG_PRODUCTION=false`) so `vite` is available in the build step.
