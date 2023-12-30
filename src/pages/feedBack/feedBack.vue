<script setup lang="ts">

import {ref} from "vue";

const checkboxValue = ref([])
const feedbackContent = ref('')
const checkboxList = [
  {name: 'Bug', value: '1'},
  {name: '建议', value: '2'},
  {name: '吐槽', value: '3'},
  {name: '其他', value: '4'},
]
</script>

<template>
<view class="feedback-view-main">
  <view class="text-title-view">
    <u-text text="反馈类别">
    </u-text>
  </view>
  <view class="check-box-view">
    <u-checkbox-group
        v-model="checkboxValue"
        placement="row"
        :custom-style="{width: '100%'}"
    >
      <u-checkbox
          :customStyle="{margin: '8px'}"
          v-for="(item, index) in checkboxList"
          :key="index"
          :label="item.name"
          :name="item.name"
      >
      </u-checkbox>
    </u-checkbox-group>
  </view>
  <view class="text-title-view">
    <u-text text="反馈内容">
    </u-text>
  </view>
  <view class="textarea-box-view">
    <iui-textarea
        style="width: 100%"
        :model-value="feedbackContent"
        maxlength="150"
        placeholder="请填写15字以上描述"
        show-limit
    ></iui-textarea>
  </view>
  <view class="upload-view-box">
    <u-upload></u-upload>
  </view>
  <view class="text-title-view">
    <u-text text="联系方式">
    </u-text>
  </view>
  <view class="textarea-box-view">
    <iui-input style="width: 100%" label="" placeholder="请留下您的邮箱或者电话"></iui-input>
  </view>
  <view class="blank-view">

  </view>
  <u-button :custom-style="{width: '100%'}" type="warning" text="提交反馈"></u-button>
</view>
</template>

<style scoped lang="scss">
.feedback-view-main{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  .check-box-view{
    width: 100%;
    padding: 20rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .text-title-view{
    margin: 20rpx;
    display: flex;
    justify-content: flex-start;
    width: 90%

  }
  .textarea-box-view{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .upload-view-box{
    width: 100%;
    padding-left: 50rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
  }
  .blank-view{
    width: 100%;
    height: 300rpx;
    background-color: #f5f5f5;
  }
}
</style>
