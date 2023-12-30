<script setup lang="ts">
import {ref} from "vue";

const description = ref('描述描述描述描述')
const picSrc = '/static/itemTest.png'
const rejectModalVisible = ref(false)
const confirmModalVisible = ref(false)
const rejectReason = ref('')
const clickReject = () => {
  rejectModalVisible.value = true
}

const confirmReason = () => {
  rejectModalVisible.value = false
}

const cancelReason = () => {
  rejectModalVisible.value = false
}

const confirmCheck = () => {
  confirmModalVisible.value = false
}

const cancelCheck = () => {
  confirmModalVisible.value = false
}

const clickCheck = () => {
  confirmModalVisible.value = true
}
</script>
<template>
<view class="examine-item-view">
  <view>
    <iui-pagination :total="50" type="icon" />
    <u-divider ></u-divider>
  </view>
  <view class="title-view-class">
    <text style="font-weight: bold">物品描述：</text>
  </view>
  <view style="width: 90%">
  <u-textarea class="text-area-class" disabled v-model="description"></u-textarea>
  <u-divider style="width: 100%"></u-divider>
  </view>
  <view class="title-view-class">
    <text>物品照片：</text>
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
  <view class="handle-button-view">
    <iui-button shape="circle"
                icon="close"
                status="danger"
                :size="50"
                @click="clickReject"
    > </iui-button>
    <iui-button shape="circle"
                icon="check"
                status="success"
                :size="50"
                @click="clickCheck"
    > </iui-button>
  </view>
  <u-modal :show="rejectModalVisible"
           title="请给出拒绝理由"
           show-cancel-button
           @confirm="confirmReason"
           @cancel="cancelReason"
  >

    <template #default>
      <u-textarea placeholder="请填写拒绝理由" v-model="rejectReason">

      </u-textarea>
    </template>
  </u-modal>
  <u-modal :show="confirmModalVisible"
                     title="确认通过？"
                     show-cancel-button
                     @confirm="confirmCheck"
                     @cancel="cancelCheck"
  >
  </u-modal>
</view>
</template>

<style scoped lang="scss">
.examine-item-view{
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  .title-view-class{
    width: 90%;
    display: flex;
    justify-content: flex-start;
  }
  .text-area-class{
    width: 90%;
    height: 200rpx;
    margin-top: 20rpx;
  }
  .examine-picture-view{
    width: 90%;
    height: 200rpx;
    margin-top: 20rpx;
  }
  .handle-button-view{
    width: 90%;
    height: 200rpx;
    margin-top: 20rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
