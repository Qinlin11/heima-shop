import { http } from '@/utils/http'

/**
 * 获取微信支付参数
 * */
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    url: '/pay/wxPay/miniPay',
    method: 'GET',
    data,
  })
}

/**
 * 模拟支付-内测版
 * */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    url: '/pay/mock',
    method: 'GET',
    data,
  })
}
