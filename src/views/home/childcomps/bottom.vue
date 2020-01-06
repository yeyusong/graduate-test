<template>
	<div class="bottom-item">
		
		<div class="bottom-item-img"><img src="./images/bottom.png" /></div>
		<div class="bottom-item-text">
			<h4>剁手侠</h4>
			<h5>整个经济学院都在用！</h5>
			
		</div>
		<div class="hongbao" @click="hongbaoclick">
			<div class="hongbao-p">
				<p>限时红包</p>
			</div>
			<div><img src="./images/hongbao.png" /></div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			hongbaoclick(){
				console.log('红包已经被抢完啦')
			}
		}
	}
</script>

<style scoped="scoped">
	.bottom-item{
		height: 100px;
		/* border: 2px solid red; */
		display: flex;
	}
	.bottom-item img {
		height: 90px;
		margin-top: 5px;
	}
	.bottom-item-img{
		flex: 1;
		text-align: center;
		
	}
	.bottom-item-text{
		flex: 2;
		margin-left: 30px;
		font-family: "微软雅黑";
	}
	.hongbao{
		flex: 1;
		
	}
	.hongbao img{
		height: 40px;
	}
	.hongbao-p{
		font-size: 10px;
		border-radius: 5%;
		width: 72px;
		background-color:orangered ;
		color: white;
		height: 30px;
		text-align: center;
		line-height:30px;
	}
	.hongbao p{
		margin: 5px 2px 0px 2px;
	}
	.hongbao img{
		height: 50px;
		width: 70px;
	}
</style>
