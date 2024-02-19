import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'

type hotParams = PageParams & { subType?: string }
/*
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: hotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
