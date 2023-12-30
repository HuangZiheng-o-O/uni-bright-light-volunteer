<script setup lang="ts">

import {onMounted, ref} from "vue";
import LEchart from '@/lime-echart/components/l-echart/l-echart.vue';
import {echarts}from "@/utils/charts";
import type {ECOption} from "@/utils/charts";
//@ts-ignore
const missionChart = ref<InstanceType<typeof LEchart>>()
//@ts-ignore
const averageChart = ref<InstanceType<typeof LEchart>>()
//@ts-ignore
const selfAbilityChart = ref<InstanceType<typeof LEchart>>()

//圆环图
const missionOption: ECOption = {
  title: {
    text: '任务完成情况',
    left: 'center',
    textStyle: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    top: 10,
    right: 10,
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {value: 335, name: '必做'},
        {value: 310, name: '选做'},
      ],
    },
  ],
};
//折线图 1-5月任务完成情况 ，两条线（我的任务。同校平均）
//不平滑
const averageOption: ECOption = {
  title: {
    text: '每月完成任务数',
    left: 'center',
    textStyle: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  //图例
  legend: {
    data: ['我的任务', '同校平均'],
    top: 20,
    left: 10,
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '我的任务',
      data: [120, 200, 150, 80, 70],
      type: 'line'
    },
    {
      name: '同校平均',
      data: [100, 180, 130, 70, 60],
      type: 'line'
    },
  ]
};

//个人综合能力雷达图 五个维度（任务完成度，完成时间，审核质量，小朋友亲近度，完成质量）
//两条数据（我的能力，同校平均）
const selfAbilityOption: ECOption = {
  title: {
    text: '个人综合能力',
    left: 'center',
    top: 'center',
    textStyle: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'normal',
    },
  },
  tooltip: {},
  //缩小图例，并下移
  legend: {
    data: ['我的能力', '同校平均'],
    top: 10,
    right: 10,
    orient: 'vertical',
  },
  radar: {
    // shape: 'circle',
    indicator: [
      {name: '任务完成度', max: 100},
      {name: '完成时间', max: 100},
      {name: '审核质量', max: 100},
      {name: '小朋友亲近度', max: 100},
      {name: '完成质量', max: 100},
    ],
  },
  series: [
    {
      name: '个人综合能力',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [90, 80, 85, 90, 95],
          name: '我的能力',
        },
        {
          value: [70, 70, 70, 70, 70],
          name: '同校平均',
        },
      ],
    },
  ],
  //缩小宽度图标
};


onMounted(()=>{
  missionChart.value.init(echarts, (chart1: any) => {
    chart1.setOption(missionOption);
  });
  averageChart.value.init(echarts, (chart2: any) => {
    chart2.setOption(averageOption);
  });
  selfAbilityChart.value.init(echarts, (chart3: any) => {
    chart3.setOption(selfAbilityOption);
  });

})

const initMission = async ()=>{
  const chartBox = await missionChart.value.init(echarts);
  chartBox.setOption(missionOption)
}

const initAverage = async ()=>{
  const chartBox = await averageChart.value.init(echarts);
  chartBox.setOption(averageOption)
}

const initAbility = async ()=>{
  const chartBox = await selfAbilityChart.value.init(echarts);
  chartBox.setOption(selfAbilityOption)
}
</script>

<template>
<view class="ranking-list-view">
  <view class="chart-view-box">
    <l-echart ref="missionChart" @finish="initMission"></l-echart>
    <u-divider style="width: 100%"></u-divider>
    <l-echart ref="averageChart" @finish="initAverage"></l-echart>
    <u-divider style="width: 100%"></u-divider>
    <l-echart ref="selfAbilityChart" @finish="initAbility"></l-echart>
  </view>
</view>
</template>

<style scoped lang="scss">
.ranking-list-view{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EFEFEF;
  .chart-view-box{
    width: 90%;
    height: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
}
</style>
