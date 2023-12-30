<script setup lang="ts">
// 个人中心界面
import TabBar from "@/components/tabBar/TabBar.vue";
import {useRouter} from "uni-mini-router";

const router = useRouter()

const childrenList = [
  {name: '岳大鹏', id: '555', avatar: ''},
  {name: '岳一鹏', id: '556',avatar: ''},
  {name: '岳二鹏', id: '553', avatar: ''}
]
const change = (e: any) => {
  console.log('change', e)
}
const close = (e: any) => {
  console.log('close', e)
}
const open = (e: any) => {
  console.log('open', e)
}

const navigateToRankList = () => {
  console.log('click')
  router.push('/pages/statistic/rankingList')
}

const clickCreditRanking = () => {
  router.push('/pages/statistic/creditRanking')
}

const clickFeedback = () => {
  router.push('/pages/feedback/feedback')
}

const clickChildSituation = () => {
  router.push('/pages/childSituation/mission')
}
</script>

<template>
<view class="self-back-box">
  <view class="self-view-box">
    <iui-avatar
        :size="50"
        shape="square"
        align="start"
        avatarName="大学生"
    >
      <template #avatarDesc>
        <u-row>
          <u-col span="12">
            <u-text type="info" text="志愿者编号：xxxx"></u-text>
          </u-col>
        </u-row>
      </template>
    </iui-avatar>
    <u-divider></u-divider>
    <u-row>
      <u-col justify="center" span="12">
        <u-text type="info" text="个人信息"></u-text>
      </u-col>
    </u-row>
    <u-row >
      <u-col justify="center"  span="2">
        <span>电话：</span>
      </u-col>
      <u-col justify="center"  span="2">
        <span>xxxx</span>
      </u-col>
    </u-row>
  </view>
  <view class="self-collapse-view">
  <u-collapse
      @change="change"
      @close="close"
      @open="open"
      :custom-style="{marginTop: '20px'}"
  >
    <u-collapse-item
        title="小朋友列表"
        name="Docs guide"
        icon="server-man"
    >
      <u-list >
        <u-list-item
            v-for="(item, index) in childrenList"
            :key="index">
          <u-row :custom-style="{margin: '5px'}">
            <u-col span="3">
              <u-avatar :text="item.name.charAt(0)">
              </u-avatar>
            </u-col>
            <u-col span="4">
              <view>
                <u-text size="small" :text="item.name"></u-text>
                <u-text prefix-icon="integral"
                        text="查看排行榜"
                        size="small"
                        :icon-style="{color: '#f29100'}"
                        type="warning">

                </u-text>
              </view>
            </u-col>
            <u-col offset="1" span="4">
              <u-button type="primary"
                        @click="clickChildSituation"
                        size="small">
                查看任务情况
              </u-button>
            </u-col>
          </u-row>
          <u-divider></u-divider>
        </u-list-item>
      </u-list>
    </u-collapse-item>
  </u-collapse>
    <u-cell
        @click="navigateToRankList"
        label="情况统计"
        icon="order">
      <template #right-icon>
        <u-icon name="arrow-right" size="20"></u-icon>
      </template>
    </u-cell>
    <u-cell
        label="积分排行榜"
        @click="clickCreditRanking"
        icon="order">
      <template #right-icon>
        <u-icon name="arrow-right" size="20"></u-icon>
      </template>
    </u-cell>
    <u-cell
              label="反馈"
              @click="clickFeedback"
              icon="account">
      <template #right-icon>
        <u-icon name="arrow-right" size="20"></u-icon>
      </template>
    </u-cell>
  </view>
  <tab-bar></tab-bar>
</view>
</template>

<style scoped lang="scss">
.self-view-box{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px #999999;
  padding: 20px;
}
.self-back-box{
  background-color: rgb(238, 238, 238, 0.5);
  height: 100vh;
}
.self-statistic-view{
  margin-top: 20rpx;
  width: 100%;
  background-color: #ffffff;
  padding: 20rpx;
}
.self-collapse-view{
  margin-top: 50rpx;
  width: 100%;
  background-color: #ffffff;
}
</style>
