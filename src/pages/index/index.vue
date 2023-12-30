<template>
  <view class="content" >
    <view style="width: 100%; ">
      <u-swiper
          :list="swiperList"
      ></u-swiper>
    </view>
    <view class="tab-view">
      <u-row :custom-style="{width: '100%'}" style=" margin-top: 50rpx" >
        <u-col span="6" justify="center">
          <u-text :custom-style="{fontSize: '12px', paddingLeft: '20%'}" text="您已获得110积分"></u-text>
        </u-col>
        <u-col span="6" justify="center">
          <iui-tag style="display: flex;
                    justify-content: center;"
                   size="small"
                   icon="barchart"
                   color="#168ccf"
                   @click="clickRankingTag"
          >
            积分排行榜
          </iui-tag>
        </u-col>
      </u-row>
      <iui-space></iui-space>
      <u-row style="margin-top: 50rpx">
        <u-col span="12">
          <span style="font-family: 'Microsoft YaHei UI',serif; font-weight: bold">任务</span>
        </u-col>
      </u-row>
    </view>
    <view class="tab-view-box">
      <u-tabs  :list="tabList" @change="changeTab"></u-tabs>
    </view>
    <view class="mission-list">
      <u-subsection  :list="optionList"
                     :current="current"
                     @change="sectionChange">
      </u-subsection>
    </view>
    <mission-list v-if="showMission"/>
    <examine-list v-if="!showMission"/>
    <u-divider :custom-style="{width: '100%'}"
               text="分割线"
               :dot="true"></u-divider>
    <tab-bar></tab-bar>
  </view>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue'
import useStore from "@/store/index";
import {request} from "@/utils/request";
import TabBar from "@/components/tabBar/TabBar.vue";
import MissionList from "@/components/mission/MissionList.vue";
import ExamineList from "@/components/mission/ExamineList.vue";
import {useRouter} from "uni-mini-router";

const router = useRouter()
const store = useStore()
const title = ref('Hello')
const showMission = ref(true)
const swiperList = [
  '/static/volunteerSwiper.png',
]

const optionList = [
  '综合', '按紧急程度', '按完成情况'
]
const tabList = [{name: '任务打分'}, { name: '物品审核'}]
const current = ref(0)
const sectionChange = (e: any) => {
  current.value = e
}

const clickButton = () => {
  store.account = '123'
  request('/a', 'GET',{a: 1},'').then(res => {
    console.log(res)
  })
}

const clickRankingTag = () => {
  router.push('/pages/statistic/creditRanking')
}
const changeTab = (e: any) => {
  if (e.index == 0) {
    showMission.value = true
  } else {
    showMission.value = false
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.tab-view {
  padding-top: 50rpx;
  margin-top: 50rpx;
  padding-bottom: 50rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  background-color: bisque;
}
.tab-view-box{
  margin-top: 50rpx;
  padding-bottom: 50rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mission-list {
  margin-top: 50rpx;
  width: 600rpx;
  display: flex;
  justify-content: center;
}
</style>
