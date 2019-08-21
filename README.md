# Boilerplate to create react apps 🧬

This is a simple boilerplate to create react apps.

When installed, you get a simple react app configured with:
- Recommended file structure
- Redux
- Redux-sagas
- Ant Design components
- Base for Service Worker
- Jest and Enzyme connfig for testing
- Webpack and Babel with Antd configs for customization
- Webpack dev server
- Rules for eslint
- Simple Docker files

## Installation

Just run to install:
```
npm install
```
After installation, if you want it, change the app's name (*app-name*) refferences for your new name in:
- Dockerfile and docker-compose.yml
- Webpack.config.json
- index.html at /public directory

### Usage
To compile the app and keep watching changes while you are working on it and mount a dev server at _localhost:8080_ you can use:

If you have three global vars level, for example local use, development use, production use. You can set the __NODE_ENV__ to _local_ to use for the first case with:
```
npm run local-watch
```
To set __NODE_ENV__ to _development_ use:
```
npm run dev-watch
```
If you want to compile the final build (no dev server and __NODE_ENV__ set to _production_) run
```
npm run build
```
The compiled files can be found in _/public/js/apps/_

To run the test and coverage use the command bellow. Keep in mind that the coverage threshold is 75% and you can change it in package.json
```
npm run test
```