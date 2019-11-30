import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'controls/Button',
  component: Button,
};

export const main = () => (
  <Button>Some text</Button>
);

export const other = () => (
  <Button>Other text</Button>
);

