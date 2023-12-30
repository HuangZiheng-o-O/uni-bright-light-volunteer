<script setup lang="ts">
//批改任务
import {ref} from "vue";

const missionPoint = ref(0)
const picSrc = '/static/itemTest.png'
const description = ref('描述描述描述描述')
const sliderInput = (e: any) => {
  missionPoint.value = e
}
</script>

<template>
  <view class="examine-mission-view">
    <view>
      <iui-pagination :total="50" type="icon" />
    </view>
    <u-divider :custom-style="{width: '100%'}"></u-divider>
    <view class="card-mission-view">
      <iui-card :border="false"
                :body-style="{backgroundColor: '#fde277', borderRadius: '10px'}"
                style="width: 90%"
                shadow
      >
        <u-row>
          <u-col span="1">
            <iui-icon :color="'#f5c928'" name="heart-fill"></iui-icon>
          </u-col>
          <u-col span="11">
            <u-row>
              <u-col span="10">
                <u-text type="error" text="背诵……"></u-text>
              </u-col>
              <u-col span="2">
                <u-text type="info" text="10积分"></u-text>
              </u-col>
            </u-row>
          </u-col>
        </u-row>
        <u-row>
          <u-col offset="1" span="2">
            <u-text type="info" text="视频x1"></u-text>
          </u-col>
          <u-col span="2">
            <u-text type="info" text="图片x1"></u-text>
          </u-col>
        </u-row>
      </iui-card>
    </view>
    <u-divider :custom-style="{width: '100%'}"></u-divider>
    <view class="title-view-class">
      <text>小朋友上传的照片：</text>
    </view>
    <view class="examine-picture-view">
      <iui-space>
        <view>
          <u-image :src="picSrc" width="200rpx" height="200rpx" />
        </view>
        <view>
          <u-image :src="picSrc" width="200rpx" height="200rpx" />
        </view>
        <view>
          <u-image :src="picSrc" width="200rpx" height="200rpx" />
        </view>
      </iui-space>
    </view>
    <u-divider :custom-style="{width: '100%'}"></u-divider>
    <view class="title-view-class">
      <text>批改区：</text>
    </view>
    <view style="width: 90%">
      <u-textarea class="text-area-class"
                  placeholder="给出你的评价"
                  v-model="description">
      </u-textarea>
    </view>
    <view class="slider-view-box">
      <u-row :custom-style="{width: '100%'}">
        <u-col span="10">
          <u-slider :custom-style="{width: '100%'}" @input="sliderInput" v-model="missionPoint"  min="0" max="10" show-value>
          </u-slider>
        </u-col>
        <u-col span="2">
          <u-tag type="info" :text="missionPoint + '分'"></u-tag>
        </u-col>
      </u-row>
      <u-row>
        <u-col span="12" >
         <span>本题总<u-text type="error" text="10分"></u-text></span>
        </u-col>
      </u-row>
    </view>
    <u-divider :custom-style="{width: '100%'}"></u-divider>
    <u-button :custom-style="{width: '60%'}" type="warning" text="提交批改"></u-button>
  </view>
</template>

<style scoped lang="scss">
.card-mission-view{
  display: flex;
  justify-content: center;
  width: 100%;
}
.examine-mission-view{
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
 }
.title-view-class{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20rpx;
  margin-left: 80rpx;
}
.examine-picture-view{
  width: 90%;
  height: 200rpx;
  margin-top: 20rpx;
}
.text-area-class{
  width: 90%;
  height: 200rpx;
  margin-top: 20rpx;
}
.slider-view-box{
  width: 90%;
  margin-top: 20rpx;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}
</style>
