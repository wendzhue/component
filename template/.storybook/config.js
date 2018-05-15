import { configure } from '@storybook/vue'
import Vue from 'vue'

// import your components

// import css files

// load all .stories.js files in packages
const storyFiles = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  storyFiles.keys().forEach(filename => storyFiles(filename))
}

configure(loadStories, module)
