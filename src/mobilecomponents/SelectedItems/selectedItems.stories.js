import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SelectedItems from './index.jsx';
import { addedItems } from 'utils/metaData.js';
import './styles.scss';

storiesOf('Selected Items', module).add(
  'Selected Items',
  withInfo('description')(() => {
    return (
      <SelectedItems
        onVSButtonClick={action('Versus button clicked')}
        addedItems={addedItems}
      />
    );
  })
);
