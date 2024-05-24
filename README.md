# NextJS Star Wars Challenge

This project is a Next.js application built with TypeScript, using App Router for client-side/server-side handlering, Tailwind for styling, and Axios for making HTTP requests.

The challenge consists of listing the characters coming from the API [**SwAPI**](https://swapi.dev) and filtering them alphabetically by name or planet.
It is also necessary to implement an "infinity scroll" controlled by a button to load more characters in the list with each click.

Follow the instructions below to clone the repository, install dependencies, and run locally.

> **Links**

- **Repositório**: https://github.com/c4l3tt1/starwars_challenge

- **Figma Layout**: https://www.figma.com/design/5CMAkR0A4OHSS83xjIiShv/CloudWalk-FrontEnd-test?node-id=1-2&t=pushgd4uND4KlCyq-0

<br  />

> **Tools and versions**

- **Next** _14.2.3_

- **React** _^18_

- **Node** _20.10.0_

- **Yarn** _ˆ1.22.19_

- **Tailwindcss** _ˆ3.4.3_

- **Typescript** _ˆ5_

<br  />

## Libraries/Plugins

- [**Tailwind**](https://tailwindcss.com/): Framework CSS

- [**React Icons**](https://react-icons.github.io/react-icons/): Icons library

- [**ShadCDN**](https://ui.shadcn.com/): Flexible library to build our own components

- [**Axios**](https://axios-http.com): HTTP requests

<br  />

## Get Started

1. **Clone repository:**

```bash

git clone https://github.com/c4l3tt1/starwars_challenge.git

```

2. **Install dependencies:**

```bash

yarn install

```

3. **Run the project**:

```bash

yarn run dev

```

4. **Open the URL** [http://localhost:3000](http://localhost:3000) with your browser to see the result

<br  />

## Folders

- `public`: contains asset files such as images, icons, fonts, etc. used in components and pages

- `api`: contains configs of axios library to connect APIs and the functions to call respective endpoints

- `app`: contains the pages (`page.tsx` or folders to specify routes) of the project and other files to implement usage like:

  - `layout.tsx`: This file is used to define the layout of your application. It can be used to wrap all your pages and provide a consistent layout across your application.
  - `loading.tsx`: This file is used to define the loading state of your application. It can be used to display a loading spinner or any other loading state while your application is fetching data.
  - `error.tsx`: This file is used to define the error state of your application. It can be used to display an error message or any other error state when your application encounters an error.
  - `not-found.tsx`: This file is used to define the 404 page of your application. It can be used to display a custom 404 page when a user navigates to a non-existent page.
  - `globals.css`:This file is used to define the global styles of your application. It can be used to define styles that are applied to all pages of your application.
  - `favicon.ico`: This file is used to define the favicon of your application. It can be used to display a custom icon in the browser tab when your application is open.

- `components`: All components created and used in the project

- `theme`: Contains definitions/variables for color themes, typography and other styles related to the application theme. (Integrated with Tailwind)
- `utils`: This folder contains utilities – functions, arrays, and other reusable constructs – that provide common functionality across the application.

## Files

- `.env`: Defines enviroment variables for the project

- `.nvmrc`: Defines the version of Node if you use NVM library

- `.eslintrc.json`: ESLint configs

- `.prettierrc`: Prettier configs

- `tsconfig.json`: defines options and settings for the Typescript compiler, including mapping paths for imports.

- `next.config.mjs`: NextJS configurations and plugin integrations

- `postcss.config.mjs`: PostCSS configurations and plugin integrations

- `tailwind.config.ts`: Tailwindcss Settings, Colors and Plugin Integrations

- `components.json`: Config and defines the components used by ShadCDN library

<br  />

## Vercel

You can see the project published on my Vercel on this link: [https://starwars-challenge-next.vercel.app/](https://starwars-challenge-next.vercel.app/)

<br  />

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
