import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Search from './Search.jsx';
import '../../containers/home/styles.scss';

storiesOf('Search', module).add(
  'Search',
  withInfo('description')(() => {
    return (
      <Search
        toggleListening={action('Toggle to listening')}
        defaultValue={'search'}
        onValueChange={action('Change Value')}
      />
    );
  })
);
