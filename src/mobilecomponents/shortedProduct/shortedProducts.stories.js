import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ShortedProduct from './index.jsx';
import { shortedProduct } from 'utils/metaData';
import './styles.scss';

storiesOf('Shorted Products', module).add(
  'Shorted Products',
  withInfo('description')(() => {
    return (
      <ShortedProduct
        item="item"
        itemRowClass="itemRowClass"
        itemRowLeftClass="itemRowLeftClass"
        productImageClass="productImageClass"
        productName={shortedProduct[0].productName}
        productImg={shortedProduct[0].productImg}
        aboutProduct={shortedProduct[0].aboutProduct}
      />
    );
  })
);
