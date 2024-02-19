import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'
/*
 * 商品详情
 * @param id 商品id
 * */

export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: {
      id,
    },
  })
}
