import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/*
 * 猜你喜欢的组合函数
 * */

export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()
  // 滚动触发事件
  const onScrolltolower = () => {
    guessRef.value!.getMore()
  }

  // f返回ref 和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
