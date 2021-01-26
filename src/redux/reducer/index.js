import {
  combineReducers
} from 'redux'
import advanceSearchDevice from './advanceSearchDevice'
import bigUrl from './getBigUrl'
import shortUrl from './getShortUrl'
import filterValues from './getFilterValues'
import deviceByNameCategoryWise from './searchDeviceByNameCategoryWise'
import models from './getModels'
import smartPhoneDetails from './getSmartPhoneDetails'
import trendingProducts from './getTrendingProducts'
import popularProducts from './getPopularProducts'
import deviceByName from './searchDeviceByName'
import popularCategories from './getPopularCategories'
import categories from './getCategories'
import brands from './getBrands'
import versionDetail from './getVersionDetailList'
import relatedProducts from './getRelatedProducts'
import additems from './getaddCart'
import vsFooterProducts from './getVsFooterProducts'
import multivsProducts from './getVSMultiProducts'
import categoriesfilter from './getCategoryFilerValue'
import cbfilterProducts from './getFilteredProducts'
// Wrap all reducers in a container
export default combineReducers({
  advanceSearchDevice,
  bigUrl,
  shortUrl,
  filterValues,
  deviceByNameCategoryWise,
  models,
  smartPhoneDetails,
  trendingProducts,
  popularProducts,
  deviceByName,
  popularCategories,
  categories,
  brands,
  versionDetail,
  relatedProducts,
  additems,
  vsFooterProducts,
  multivsProducts,
  cbfilterProducts
})