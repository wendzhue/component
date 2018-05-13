module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name'
    },
    description: {
      type: 'string',
      required: 'true',
      label: 'Project description',
      default: 'A Vue.js component'
    },
    author: {
      type: 'string',
      label: 'Author'
    },
    license: {
      type: 'string',
      label: 'License',
      default: 'MIT'
    },
    storybook: {
      type: 'confirm',
      message: 'Use Storybook?',
      default: false
    }
  },
  filters: {
    '.storybook/**/*': 'storybook',
    'build/webpack.config.dev.js': '!storybook',
    'build/webpack.config.prod.js': '!storybook'
  },
  completeMessage:
    '{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}'
}
