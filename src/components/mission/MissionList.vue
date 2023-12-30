<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "uni-mini-router";

const router = useRouter()
const status = ref('loadmore')
const list = ref(15)
const page = ref(0)
const missionList = [
  {title: '任务1', content: '已有xxx人完成',  time: '2021-10-10 23:30', status: '去完成', credit: 10},
  {title: '任务2', content: '已有xxx人完成',  time: '2021-10-10 23:30', status: '去完成', credit: 10},
  {title: '任务3', content: '已有xxx人完成',  time: '2021-10-10 23:30', status: '去完成', credit: 10},
  {title: '任务4', content: '已有xxx人完成',  time: '2021-10-10 23:30', status: '去完成', credit: 10},
  {title: '任务5', content: '已有xxx人完成',  time: '2021-10-10 23:30', status: '去完成', credit: 10},
  {title: '任务6', content: '已有xxx人完成',  time: '2021-10-10 23:30', status: '去完成', credit: 10},
]

const onReachBottom = ()=> {
  if(page.value >= 3) return ;
  status.value = 'loading';
  page.value = ++ page.value;
  setTimeout(() => {
    list.value += 10;
    if(page.value >= 3) status.value = 'nomore';
    else status.value = 'loading';
  }, 2000)
}

const clickMission = () => {
  router.push('/pages/examine/examineMission')
}
</script>

<template>
  <view class="sub-sect" >
    <view class="card-list-view">
      <iui-card v-for="(item, index) in missionList" style="width: 80%">
        <u-row justify="space-around">
          <u-col span="2">
            <u-avatar :text="item.credit + '分'" :custom-style="{fontSize: '8px', backgroundColor: '#a0cfff'}"></u-avatar>
          </u-col>
          <u-col span="6">
            <u-row>
              <u-col span="12">
                <u-text :custom-style="{fontSize: '12px'}" :text="item.title"></u-text>
              </u-col>
            </u-row>
            <u-row>
              <u-col span="12">
                <u-text :custom-style="{fontSize: '8px'}" type="info" :text="item.content"></u-text>
              </u-col>
            </u-row>
          </u-col>
          <u-col span="2">
            <u-row>
              <u-col span="12">
                <u-button size="small" shape="circle" type="primary" :text="item.status" @click="clickMission"></u-button>
              </u-col>
            </u-row>
          </u-col>
        </u-row>
      </iui-card>
      <u-loadmore :status="status" @loadmore="onReachBottom"/>
    </view>
  </view>
</template>

<style scoped lang="scss">
.sub-sect{
  margin-top: 20rpx;
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  .card-list-view{
    width: 800rpx;
    height: auto;
    overflow-y: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  }
}
</style>
