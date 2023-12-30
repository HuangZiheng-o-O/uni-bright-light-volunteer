<script setup lang="ts">
// 个人中心界面
import TabBar from "@/components/tabBar/TabBar.vue";
import {useRouter} from "uni-mini-router";
import {ref, onMounted, reactive} from 'vue';

import useStore from '@/store/index'
import {getKidListApi} from "@/api/kidApi";
import type {Child} from "@/ts/types";
import type {Volunteer} from "@/ts/types";
import {request} from "@/utils/request";
//路由
const router = useRouter()
//pinia状态管理
const store = useStore()

// //传volunteerId
// //返回child的list
// const getKidListApi = (data: any, token: string = '') => {
//   return request('volunteer/kid/list', 'GET', data, JSON.stringify({token: token}));
// }

// //传volunteerId
// //返回Volunteer
// const getInformationApi = (data: any, token: string = '') => {
//   return request('volunteer/personal/getInformation', 'GET', data, JSON.stringify({SaToken: token}));
// }


let volunteerDetail = reactive<Volunteer>({
  id: 'volunteer123',
  account: 'volunteer_account',
  password: 'securepassword', // Note: Storing passwords in plaintext is a bad practice!
  avatar: 'url_to_avatar_image',
  name: 'John Doe',
  age: 30,
  gender: 'male',
  hasAuthority: 1,
  province: '江苏',
  city: '扬州',
  district: '广陵区',
  description: '淮海路',
  detailedAddress: '156号',
  startTime: '2023-01-01T08:00:00Z',
  updateTime: '2023-01-02T09:00:00Z',
  remark: 'Additional remarks about the volunteer'
});

let text1 = ref<String>("志愿者编号："+volunteerDetail.id)
let textName = ref<String>(volunteerDetail.name)
let textAddress = ref<String>(volunteerDetail.province)



// 定义 childrenList 作为一个响应式数组
const childrenList = reactive<Child[]>([
  {
    id: '555',
    account: 'yueyun',
    password: 'pass123',
    avatar: 'avatar1.jpg',
    name: '岳云',
    age: 10,
    gender: 'Male',
    isOrphan: 1,
    isLeftBehind: 0,
    isDisability: 0,
    description: '乐观开朗的小朋友',
    province: '湖南',
    city: '长沙',
    district: '岳麓区',
    detailedAddress: '岳麓山脚下',
    startTime: '2023-01-01',
    updateTime: '2023-01-10',
    remark: '非常喜欢画画'
  },
  {
    id: '556',
    account: 'yueyipeng',
    password: 'pass456',
    avatar: 'avatar2.jpg',
    name: '杨一鹏',
    age: 12,
    gender: 'Male',
    isOrphan: 0,
    isLeftBehind: 1,
    isDisability: 0,
    description: '热爱科学的小发明家',
    province: '湖北',
    city: '武汉',
    district: '洪山区',
    detailedAddress: '珞狮路',
    startTime: '2023-02-01',
    updateTime: '2023-02-15',
    remark: '对机器人很感兴趣'
  },
  {
    id: '553',
    account: 'yueerpeng',
    password: 'pass789',
    avatar: 'avatar3.jpg',
    name: '朗二鹏',
    age: 8,
    gender: 'Male',
    isOrphan: 0,
    isLeftBehind: 0,
    isDisability: 1,
    description: '喜爱音乐，擅长唱歌',
    province: '湖北',
    city: '荆州',
    district: '沙市区',
    detailedAddress: '江汉路',
    startTime: '2023-03-01',
    updateTime: '2023-03-20',
    remark: '梦想成为歌手'
  }
]);


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

onMounted(async () => {
  // 通过 store 获取 volunteerId 和 token 获取孩子信息
  try {
    const res = await getKidListApi(store.volunteerId, store.token);
    if (res.code !== 200) {
      // 使用 uni.showToast 来显示错误信息
      uni.showToast({
        title: '获取孩子列表信息失败',
        icon: 'none'
      });
    } else {
      // 如果 API 调用成功，更新 childrenList
      // 假设 res 就是 Child 对象数组
//To Do
      childrenList.splice(0, childrenList.length, ...(res.data || []));
    }
  } catch (error) {
    // 如果有错误，也显示 Toast 提示
    uni.showToast({
      title: '获取孩子列表信息异常',
      icon: 'none'
    });
    console.error('获取孩子列表失败:', error);
  }
});

</script>

<template>
<view class="self-back-box">
  <view class="self-view-box">
    <iui-avatar
        :size="50"
        shape="square"
        align="start"
        :avatarName= textName
    >
      <template #avatarDesc>
        <u-row>
          <u-col span="12">
            <u-text type="info" :text=text1> </u-text>
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
        <span>地址：</span>
      </u-col>
      <u-col justify="center"  span="2">

        <span><u-text :text=textAddress></u-text></span>
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
            :key="index"
        >
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
