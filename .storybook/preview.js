import { addDecorator } from '@storybook/react';
import { withDecorator } from '../dist';

addDecorator(withDecorator({
  items: [
    { 
      class: 'bx-class-red',
      label: 'Red'
    },
    { 
      class: 'bx-class-blue',
      label: 'Blue'
    },
    { 
      class: 'bx-class-yellow',
      label: 'Yellow'
    },
    { 
      class: 'bx-class-black',
      label: 'Black'
    },

  ],
  selected: 'Red'
}
));
