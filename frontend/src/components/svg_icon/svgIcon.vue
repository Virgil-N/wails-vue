<!--
 * Created Date: 2021-11-15 02:16:51
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-15 03:32:29
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
-->

// ~ 修改颜色的前提事svg文件中未预设颜色(即去掉fill属性)

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon'
      },
      name: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#fff'
      }
    },
    setup(props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`)
      const svgClass = computed(() => {
        if (props.className) {
          return `svg-icon ${props.className}`
        }
        return 'svg-icon'
      })
      const color = computed(() => {
        if (props.color) {
          return props.color
        }
        return '#fff'
      })
      return { symbolId, svgClass, color }
    }
  })
</script>
<style scope>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.1em; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
    fill: currentColor;  /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
    overflow: hidden;
  }
</style>