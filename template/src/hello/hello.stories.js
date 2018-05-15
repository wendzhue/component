import Vue from 'vue';
import { storiesOf } from '@storybook/vue';


storiesOf('Hello', module).add('{{ name }}', () => ({
  template: `<div>
    <h1>{{ name }}</h1>
      <p>You have successfully setup the project. Now get started to develop your components!</p>
    </div>
  `
}));
