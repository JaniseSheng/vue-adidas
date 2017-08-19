<template>
	<div class="tableCheck">
		<Tabs :animated="false"  style="width:1000px;margin: 0 auto; " >
	        <Tab-pane label="客服跟进记录">
	        	<Table highlight-row :columns="table.columns1" :data="data1" height= '280' border ></Table>
	        </Tab-pane>
	        <Tab-pane label="客户参加活动记录">
	        	<Table highlight-row :columns="table.columns2" :data="data1" height= '280'></Table>
	        </Tab-pane>
	        <Tab-pane label="签约单记录">
	        	<Table highlight-row :columns="table.columns3" :data="data1" height= '280'></Table>
	        </Tab-pane>
	        <Tab-pane label="会员充值记录">
	        	<Table highlight-row :columns="table.columns4" :data="data1" height= '280'></Table>
	        </Tab-pane>
    	</Tabs>
	</div>
</template>

<script>
export default {
  data() {
  	return {
  	  table: { //table参数配置
	  	columns1: [ //客户跟进记录
	  		{
	        type: 'index',
	        width: 60,
	        align: 'center',
	        title: '序号'
	      },
	  		{
	        title: '跟进时间',
	        key: 'time',
	        align: 'center',
	        width: 235
	      },
	  		{
	        title: '本次跟进内容',
	        key: 'content',
	        align: 'center',
	        width: 235
	      },
	   	  {
	        title: '本次获取有价值的内容',
	        key: 'priceContent',
	        align: 'center',
	        width: 235
	      },
	      {
	        title: '联系方式',
	        key: 'tel',
	        align: 'center',
	        width: 235
	      }
	  	],
	  	columns2: [ //客户参加活动记录
	  		{
	        type: 'index',
	        width: 60,
	        align: 'center',
	        title: '序号'
	      },
	  		{
	        title: '活动时间',
	        key: 'time',
	        align: 'center',
	        width: 200
	      },
	  		{
	        title: '活动内容',
	        key: 'content',
	        align: 'center',
	        width: 185
	      },
	   	  {
	        title: '活动类型',
	        key: 'priceContent',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '活动状态',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '出席情况',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      }
	  	],
	  	columns3: [ //客户参加活动记录
	  		{
	        type: 'index',
	        width: 60,
	        align: 'center',
	        title: '序号'
	      },
	  		{
	        title: '签约开始时间',
	        key: 'time',
	        align: 'center',
	        width: 200
	      },
	  		{
	        title: '签约单类别',
	        key: 'content',
	        align: 'center',
	        width: 185
	      },
	   	  {
	        title: '签约金额（元）',
	        key: 'priceContent',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '签约单状态',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '备注',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      }
	  	],
	  	columns4: [ //客户参加活动记录
	  		{
	        type: 'index',
	        width: 60,
	        align: 'center',
	        title: '序号'
	      },
	  		{
	        title: '充值单号',
	        key: 'time',
	        align: 'center',
	        width: 200
	      },
	  		{
	        title: '充值时间',
	        key: 'content',
	        align: 'center',
	        width: 185
	      },
	   	  {
	        title: '充值金额',
	        key: 'priceContent',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '操作人员',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      },
	      {
	        title: '所属客服',
	        key: 'tel',
	        align: 'center',
	        width: 185
	      }
	  	]
  	  },
  	  data1: [
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        },
  	  	{
          time: '2017-09-08',
          content: 18,
          priceContent: '北京市朝阳区芍药居',
          tel: 123123123
        }
  	  ]
  	}
  }
}
</script>

<style lang='less' scpoed>
.tableCheck {
	margin-top: 20px;
	padding-bottom: 20px;
	border: 1px dotted #ccc;
}
</style>
