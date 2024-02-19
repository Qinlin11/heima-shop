import { http } from '@/utils/http'
import type { AddressItem, AddressParams } from '@/types/addrss'
import type { OrderCreateParams } from '@/types/order'

/**
 * 添加收货地址
 * @param
 * */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

/**
 * 获取收货地址列表
 * */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    url: '/member/address',
    method: 'GET',
  })
}

/**
 * 获取收货地址详情
 * @param id 地址id（路径参数）
 * */
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
    method: 'GET',
  })
}

/**
 * 修改收货地址
 * @param id 地址id（路径参数）
 * @param data 表单数据
 * */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http({
    url: `/member/address/${id}`,
    method: 'PUT',
    data,
  })
}

/**
 * 删除收货地址
 * */
export const deleteMemberAddressById = (id: string) => {
  return http({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}

/**
 * 提交订单
 * @param data 请求参数
 * */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
