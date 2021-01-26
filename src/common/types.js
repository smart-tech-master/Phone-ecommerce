export type trendingProductType = {
  brand_name: string,
  brand_slug: string,
  category_slug: string,
  device_id: string,
  device_name: string,
  featured_image: {
    original: string
  },
  is_new: string,
  slug: string,
}

export type allVersionType ={

  version_name:string,
  specification:Object
}