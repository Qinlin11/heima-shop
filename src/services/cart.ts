import { http } from '@/utils/http'
import type { CartItem } from '@/types/cart'

/**
 * 加入购物车
 * */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}

/**
 * 获取购物车列表
 * */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    url: '/member/cart',
    method: 'GET',
  })
}

/**
 * 删除/清空购物车单品
 * /member/cart
 * @param data 请求体参数 ids skuId集合
 * */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data,
  })
}

/**
 * 修改购物车单品
 * @param skuId
 * @param data selected 选中状态 count 商品数量
 * */
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data,
  })
}

/**
 * /member/cart/selected
 * 购物车全选/取消全选
 * */
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}
