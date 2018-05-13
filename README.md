# component

> A simple Vue 2.0 Webpack & `vue-loader` setup for building components. However, if you are going to build a really big component kit, you would definetly want a much more sophisticated project structure. For that, I recommend you to learn from [ant design](https://github.com/ant-design/ant-design).

> This template is only Vue 2.0 compatible.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
$ npm install -g vue-cli
$ vue init wendzhue/component my-project
$ cd my-project
$ npm install
$ npm run dev
```

## What's Included

* `npm run dev`: Dev your component in your demo with hot-reload and friendly loader configs.
* `npm run storybook`: If you prefer to develope component with Storybook, it's configurable!
* `npm run build:demo`: Of course you should provide a demo to other developers. Run this command and `wendzhue/component` would build your demo in `docs` dir. Remember to use GitHub Pages wisely!
* `npm run build`: Build your component. The output file would be `lib/{{ name }}.min.js`. Other developers can use your component from here.

For detailed explanation on how things work, check the wiki.

## License

MIT.

---

Wendell Hu, 2018.
