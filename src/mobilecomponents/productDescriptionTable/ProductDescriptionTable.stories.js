import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import ProductDescriptionTable from './index.jsx'
import './styles.scss'

storiesOf('Product Description Table', module).add(
  'Description Table',
  withInfo('description')(() => {
    return (
      <div className="iphn-tab">
        <ProductDescriptionTable />
      </div>
    )
  })
)
