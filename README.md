<p align="center">
<img width="300" alt="Sellflow Logo" src="https://user-images.githubusercontent.com/369384/73599036-f5cfcf00-44f3-11ea-9696-91e9c56b6e49.png">
</p>

<h3 align="center">An open-source, pre-built mobile app for your <a href="https://help.shopify.com/en/api/storefront-api">Shopify storefront</a>!</h3>

## Features

- 100% [React Native](https://facebook.github.io/react-native/) and [TypeScript](http://typescriptlang.org) built on [Expo](https://expo.io)

## Getting Started

Prerequisites:

- Make sure you have [Node.js](https://nodejs.org) installed
- Install the latest version of [Expo](https://expo.io/learn)
  `npm install --global expo-cli@latest`
- [Recommended] Install [yarn](https://legacy.yarnpkg.com/docs/install)
  `curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.21.1`
  Note: This will install [v1.x](https://github.com/yarnpkg/yarn/releases) since v2 is not yet compatible with React Native.
- [Get an API key](https://help.shopify.com/en/api/getting-started/authentication/private-authentication#generate-credentials-from-the-shopify-admin) for the Shopify Storefront API for your Shopify store.

Clone the repository:

```sh
git clone git@github.com:sellflow/sellflow.git
cd sellflow
```

Make a file `.env.json` in the root of the project, based on [the example file](https://github.com/sellflow/sellflow/tree/master/.env-example.json). This will contain your Shopify API Key (mentioned above).

```sh
cp .env-example.json .env.json
```

Install dependencies:

```sh
yarn && yarn apollo:generate
```

Run the app:

```sh
yarn start
```
