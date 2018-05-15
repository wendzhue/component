# {{ name }}

> {{ description }}

## Build Setup

```sh
# install dependencies
npm install

{{#if storybook}}
# dev with storybook at localhost:6006
{{else}}
# serve your demo with hot reload at localhost:8080
{{/if}}
npm run dev

{{#if storybook}}
# build storybook to serve on GitHub Pages
{{else}}
# build your demo to serve on GitHub Pages
{{/if}}
npm run build:demo

```

{{#if storybook}}
At the first time you run `npm run dev`, `wendzhue/component` would install `Storybook` for you.
{{/if}}
---

This project is build with vue-cli boilplate [wendzhue/component](https://github.com/wendzhue/component).
