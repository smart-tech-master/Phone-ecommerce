import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import VersusFooterItems from './index.jsx';
import { versusFooterData } from 'utils/metaData.js';
import './styles.scss';

storiesOf('Versus', module).add(
  'Versus Footer Items',
  withInfo('description')(() => {
    return <VersusFooterItems versusFooterData={versusFooterData} />;
  })
);
