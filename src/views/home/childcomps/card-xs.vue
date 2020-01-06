<template>
	<div class="van-card">
		<van-card class="card"
		  price="288.00"
		  origin-price="388.00"
		  tag="折扣"
		  desc="原价388,现在只要288"
		  title="背包"
		  thumb="http://n.sinaimg.cn/translate/250/w750h1100/20180801/ETga-hhehtqf1223769.jpg">
		  <div slot="footer" @click="btnclick">
		    <van-button size="mini" class="cardbutton" >添加</van-button>
		  </div>
		</van-card>
		  
		 <van-card class="card"
		   price="588.00"
		   origin-price="688.00"
		   tag="折扣"
		   desc="再降价老板就要饿死了"
		   title="电磁炉"
		   thumb="http://img.zcool.cn/community/01c45f578304d70000012e7e91a76d.jpg@1280w_1l_2o_100sh.jpg">
		   <div slot="footer" @click="btnclick">
		     <van-button size="mini" class="cardbutton">添加</van-button>
		   </div>
		 </van-card>
		 <van-card class="card"
		   price="2999.00"
		   origin-price="3199.00"
		   tag="折扣"
		   desc="别看了,少年你买不起"
		   title="AJ鞋子"
		   thumb="http://pic4.58cdn.com.cn/zhuanzh/n_v2e163ce5862ca440c8a46da366bf1cfe4.jpg?w=750&h=0">
		   <div slot="footer" @click="btnclick">
		     <van-button size="mini" class="cardbutton">添加</van-button>
		   </div>
		 </van-card>
		 <van-card class="card"
		   price="2.00"
		   origin-price="2.50"
		   tag="折扣"
		   desc="这年头也就卤蛋吃的起了"
		   title="卤蛋"
		   thumb="http://image8.huangye88.cn/ueditor/php/upload/2341552/image/20170701/1498869664793358.jpg">
		   <div slot="footer" @click="btnclick">
		     <van-button size="mini" class="cardbutton">添加</van-button>
		   </div>
		 </van-card>
	</div>
</template>

<script>
	export default{
		methods: {
			  btnclick(){
			  	console.log('添加成功')
			  }
		  }
	}
</script>

<style>
	.van-card{
		padding:5px 5px 0px 5px;
		
	}
	.van-card img{
		height: 100px;
		width: 80px;
	}
	.card{
		height: 120px;
		border-radius: 3%;
		border: 2px solid #DDDDDD;
	}
	.cardbutton{
		color: white;
		width: 50px;
		font-family: "微软雅黑";
		font-size: 15px;
		background-color: orangered;
		
	}
</style>
