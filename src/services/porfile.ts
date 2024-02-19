import { http } from '@/utils/http'
import type { ProfileDetail, ProfileParams } from '@/types/member'

/*
 *  获取个人信息
 * */

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'GET',
  })
}

/**
 * 修改个人信息
 * @param data 请求体参数
 * */

export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
