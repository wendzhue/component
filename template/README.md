# {{ name }}

> {{ description }}

## Build Setup

```sh
# install dependencies
npm install

{{#if storybook}}
# dev with storybook at localhost:4200
npm run dev || npm run storybook
{{else}}
# serve your demo with hot reload at localhost:8080
npm run dev
{{/if}}

{{#if storybook}}
# build storybook to serve on GitHub Pages
npm run build:demo || npm run build-storybook
{{else}}
# build your demo to serve on GitHub Pages
npm run build:demo
{{/if}}
```

{{#if storybook}}
At the first time you run `npm run dev`, `wendzhue/component` would install `Storybook` for you.
{{/if}}
---

This project is build with vue-cli boilplate [wendzhue/component](https://github.com/wendzhue/component).
