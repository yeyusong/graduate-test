<template>
	<div class="van-card">
		<van-card class="card"
		  price="8999.00"
		  tag="优选"
		  desc="少年,拿肾来换吧"
		  title="苹果XR"
		  thumb="https://2a.zol-img.com.cn/product/186_400x300/536/cet1hjPNo0d6Q.jpg">
		  <div slot="footer" @click="btnclick">
		    <van-button size="mini" class="cardbutton" >添加</van-button>
		  </div>
		</van-card>
		  
		 <van-card class="card"
		   price="299.00"
		   tag="优选"
		   desc="一个普通的蓝牙耳机"
		   title="蓝牙耳机"
		   thumb="http://www.szthks.com/localimg/687474703a2f2f6777312e616c6963646e2e636f6d2f62616f2f75706c6f616465642f69382f54313378644f466d426258585858585858585f2121302d6974656d5f7069632e6a7067.jpg">
		   <div slot="footer" @click="btnclick">
		     <van-button size="mini" class="cardbutton">添加</van-button>
		   </div>
		 </van-card>
		 <van-card class="card"
		   price="159.00"
		   tag="优选"
		   desc="你又没有女朋友,买什么女式大衣"
		   title="女式大衣"
		   thumb="http://img1.tbcdn.cn/tfscom/i2/100507890/TB2BjKKaRyN.eBjSZFkXXb8YFXa_!!100507890.jpg">
		   <div slot="footer" @click="btnclick">
		     <van-button size="mini" class="cardbutton">添加</van-button>
		   </div>
		 </van-card>
		 <van-card class="card"
		   price="4.00"
		   tag="优选"
		   desc="一瓶提神醒脑"
		   title="红牛"
		   thumb="http://img.959.cn/7/2019/0118/20190118024719457.jpg">
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
