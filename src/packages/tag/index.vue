<template>
  <span class="aw-tag" 
    :class="b"
    :style="style"
  >
    <slot />
  </span>
</template>

<script>
import { RED, BLUE, GREEN, GRAY_DARK } from '../utils/color';
const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};
export default {
  name:'aw-tag',
  props:{
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },
  computed: {
    b(){
      let classes = '';
      if(this.round){
        classes = 'aw-tag--round ';
      }
      if(this.mark){
        classes += 'aw-tag--mark ';
      }
      if(this.plain){
        classes += 'aw-tag--plain aw-hairline--surround '
      }

      switch (this.type) {
        case 'primary':
          classes += 'aw-tag--primary'
          break;
        case 'success':
          classes += 'aw-tag--success'
          break;
        case 'danger':
          classes += 'aw-tag--danger'
          break;
        case 'warning':
          classes += 'aw-tag--warning'
          break;
      
        default:
          classes += 'aw-tag--default'
          break;
      }
      return classes;
    },
    style(){
      var style = {};
      if(this.color&&!this.plain){
        style.backgroundColor = this.color;
      }
      if (this.textColor) {
        style.color = this.textColor;
      }
      return style;
    } 
  }
}
</script>
<style lang="less" scoped>
@import url(../style/var.less);
@import url(../index.less);
.aw-hairline--surround::after{
  border-width: 1px;
}

.aw-tag {
  position: relative;
  color: currentColor;
  font-size: 20px;
  line-height: 20px;
  padding: 6px;
  border-radius: 2px;
  display: inline-block;
  vertical-align: baseline;
  transform: scale(0.5);
  // &::after {
  //   border-color: @background-color;
  //   border-radius: .4em;
  // }
  &--default{
    background:rgba(143, 159, 177, 0.15);
  }
  &--primary{
    background: #1989fa;
  }
  &--success{
    background: #07c160;
  }
  &--danger{
    background: #ee0a24;
  }
  &--warning{
    background: #ff976a;
  }
  &--plain{
    background: #fff;
  }
  &--mark {
    padding-right: .6em;
    border-radius: 0 .8em .8em 0;

    &::after {
      border-radius: 0 1.6em 1.6em 0;
    }
  }

  &--round {
    border-radius: .8em;

    &::after {
      border-radius: 1.6em;
    }
  }

  &--medium {
    font-size: 12px;
  }

  &--large {
    font-size: 14px;
  }
}
</style>
