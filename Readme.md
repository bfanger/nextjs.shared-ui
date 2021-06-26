# Shared components POC in next via yarn workspaces

- Configs moved to workspace root folder

## Dev setup

```sh
yarn install
yarn dev
```

Site 1 is hosted on http://localhost:3001 and Site 2 on http://localhost:3002

## Build and serve production

```sh
yarn build
yarn start

# Start a single site on a custom port:
PORT=80 yarn --cmd sites/site start
```
