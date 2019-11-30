import React from 'react';
import { makeDecorator, StoryContext, StoryGetter } from '@storybook/addons';

import { PreviewPanel } from './components/Panel';

interface withDecoratorProps {
  items: {
    class: string;
    label: string;
  }[],
  selected?: string,
}

export const withDecorator = ({ items, selected }: withDecoratorProps) => {
  return makeDecorator({
    name: 'withDecorator',
    parameterName: 'withDecorator',
    wrapper: (getStory: StoryGetter, context: StoryContext) => (
      <PreviewPanel
        items={items}
        selected={selected}
      >
        {getStory(context)}
      </PreviewPanel>  
    ),
  });
}

if (module && (module as any).hot && (module as any).hot.decline) {
  (module as any).hot.decline();
}
