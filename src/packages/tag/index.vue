<template>
  <span class="aw-tag" 
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
    style(){
      
    } 
  }
}
</script>
<style lang="less" scoped>
@import url(../style/var.less);
@import url(../index.less);
.aw-hairline--surround::after{
  border-width: 1px;
  border-color: @background-color;
  border-radius: 0.4em;
}
.aw-tag {
  position: relative;
  color: @white;
  font-size: 10px;
  line-height: 10px;
  padding: 3px;
  border-radius: 1px;
  background: #8F9FB1;
  display: inline-block;
  vertical-align: middle;
  &::after {
    border-color: @background-color;
    border-radius: .4em;
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
