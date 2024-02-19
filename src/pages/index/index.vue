<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import type { XtxGuessInstance } from '@/types/component'
import PageSkeleton from '@/pages/index/components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}
//获取前台分类的数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

//获取前台热门推荐
const HotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  HotList.value = res.result
}

// 是否加载中的标记
const isLoading = ref(false)

//页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
const { guessRef, onScrolltolower } = useGuessList()
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()

  //重置猜你喜欢数据
  guessRef.value!.resetData()
  //同时执行所有promise并等待回来
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value!.getMore(),
  ])
  // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh()"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower()"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!--自定义轮播图-->
      <XtxSwiper :list="bannerList" />
      <!--分类的面板-->
      <CategoryPanel :list="categoryList" />
      <!--热门推荐-->
      <HotPanel :list="HotList" />
      <!--猜你喜欢-->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
