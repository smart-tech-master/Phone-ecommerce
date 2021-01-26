import {
  all
} from 'redux-saga/effects'
import {
  ADVANCE_SEARCH_DEVICE
} from './advanceSearchDevice'
import {
  GET_BIG_URL
} from './getBigUrl'
import {
  GET_BRANDS
} from './getBrands'
import {
  GET_CATEGORIES
} from './getCategories'
import {
  GET_FILTERED_VALUES
} from './getFilterValues'
import {
  GET_MODELS
} from './getModels'
import {
  GET_POPULAR_CATEGORIES
} from './getPopularCategories'
import {
  GET_SHORT_URL
} from './getShortUrl'
import {
  GET_SMARTPHONE_DETAILS
} from './getSmartPhoneDetails'
import {
  GET_DEVICE_BY_NAME
} from './searchDeviceByName'
import {
  GET_DEVICE_BY_NAME_CATEGORY_WISE
} from './searchDeviceByNameCategoryWise'
import {
  GET_TRENDING_PRODUCTS
} from './getTrendingProducts'
import {
  RESET
} from './resetSaga'
import {
  GET_VERSION_SPECIALFICATION
} from './getVersionDetailList'

import {
  GET_RELATED_PRODUCTS
} from './getRelatedProducts'

import {
  GET_VS_FOOTER_PRODUCTS
} from './getVsFooterProducts'

import {
  GET_VS_MULTI_PRODUCTS
} from './getVSTwoProducts'
import {
  GET_CATEGORIES_FILTER
} from './getCategoryFilterValue'

import {
  GET_CB_FILTER_PRODUCTS
} from './getFilteredProducts'
// Wrap all sagas in a container

const rootSaga = function* rootSaga() {
  yield all([
    ADVANCE_SEARCH_DEVICE(),
    GET_BIG_URL(),
    GET_BRANDS(),
    GET_CATEGORIES(),
    GET_FILTERED_VALUES(),
    GET_MODELS(),
    GET_POPULAR_CATEGORIES(),
    GET_SHORT_URL(),
    GET_SMARTPHONE_DETAILS(),
    GET_DEVICE_BY_NAME(),
    GET_DEVICE_BY_NAME_CATEGORY_WISE(),
    GET_TRENDING_PRODUCTS(),
    RESET(),
    GET_VERSION_SPECIALFICATION(),
    GET_RELATED_PRODUCTS(),
    GET_VS_FOOTER_PRODUCTS(),
    GET_VS_MULTI_PRODUCTS(),
    GET_CATEGORIES_FILTER(),
    GET_CB_FILTER_PRODUCTS()
  ])
}

export default rootSaga