import http from "./http";

// 首页轮播图
export const getBannerApi = () => http.get('/banner/list?type=indexBanner')

// 首页商品 /shop/goods/list/v2
export const getShopApi = (params: any) => http.post('/shop/goods/list/v2', params)

// 获取分类 /shop/goods/category/all
export const getCategoryApi = () => http.get('/shop/goods/category/all',)

// 分类数据 /shop/goods/list/v2
export const getDataApi = (params: any) => http.post('/shop/goods/list/v2', params)