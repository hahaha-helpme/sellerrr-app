# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Project structure

- `src/lib/raw/homepage.html` contains the exported landing page markup. Update this file if you edit the Framer export.
- `src/lib/server/homepage.ts` rewrites asset paths and exposes the data used by `src/routes/+page.svelte`.
- `static/homepage/assets` holds the Framer-generated assets. `static/assets` is a symlink to the same directory so legacy paths keep working.
