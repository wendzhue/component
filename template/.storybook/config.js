import { configure } from '@storybook/vue'
import Vue from 'vue'

const storyFiles = require.context('../packages', true, /\.stories\.js$/)

function loadStories() {
  storyFiles.keys().forEach(filename => storyFiles(filename))
}

configure(loadStories, module)
