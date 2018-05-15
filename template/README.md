# {{ name }}

> {{ description }}

## Build Setup

```sh
# install dependencies
npm install

{{#if storybook}}
# dev with storybook with hot reload at localhost:6006
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

# build your component and get it ready for publishment
npm run build

# publish your component
npm publish
```

---

This project is build with vue-cli boilerplate [wendzhue/component](https://github.com/wendzhue/component).
