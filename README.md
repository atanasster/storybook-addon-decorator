# storybook-addon-decorator

A storybook sample addon to create a decorator

## Installation
```sh
npm i -D storybook-addon-decorator
```

## Configuration

in the `preview.js` (old `config.js`) file in your `.storybook` folder, configure and add the decorator

```js
import { addDecorator } from '@storybook/react';
import { withDecorator } from '../dist';

addDecorator(withDecorator({
  items: [
    { 
      class: 'bx-class-1',
      label: 'Box Class 1'
    },
    { 
      class: 'bx-class-2',
      label: 'Box Class 2'
    },
    { 
      class: 'bx-class-3',
      label: 'Box Class 3'
    },
    { 
      class: 'bx-class-4',
      label: 'Box Class 4'
    },

  ],
  selected: 'Box Class 4'
}
));

```
