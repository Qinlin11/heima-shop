import { http } from '@/utils/http'
import type {
  OrderListParams,
  OrderListResult,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult,
} from '@/types/order'

/**
 * 填写订单-获取预付订单
 * */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}

/**
 * 填写订单-获取 立即购买订单
 * */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http({
    url: '/member/order/pre/now',
    method: 'GET',
    data,
  })
}

/**
 * 获取订单详情
 * @param id 订单ID
 * */
export const getMemberOrderByIdAPI = (id: string) => {
  return http<OrderResult>({
    url: `/member/order/${id}`,
    method: 'GET',
  })
}

/**
 * 模拟发货-内测版
 * */

export const getMemberOrderConsignmentById = (id: string) => {
  return http({
    url: `/member/order/consignment/${id}`,
    method: 'GET',
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 * */
export const putMemberOrderByIdReceiptAPI = (id: string) => {
  return http<OrderResult>({
    url: `/member/order/${id}/receipt`,
    method: 'PUT',
  })
}

/**
 * 获取订单物流
 * */
export const getMemberOrderByIdLogisticsAPI = (id: string) => {
  return http<OrderLogisticResult>({
    url: `/member/order/${id}/logistics`,
    method: 'GET',
  })
}

/**
 * 删除订单
 * */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return http({
    url: '/member/order',
    method: 'DELETE',
    data,
  })
}

/**
 * 获取订单列表
 * */
export const getMemberOrderAPI = (data: OrderListParams) => {
  return http<OrderListResult>({
    url: '/member/order',
    method: 'GET',
    data,
  })
}
