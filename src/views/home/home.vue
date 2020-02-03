<template>
	<div class="homes">
		
		<nav-bar class="nav-bar">
				<div slot="center" >剁手侠</div>
		</nav-bar>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">

			<van-notice-bar class="notice-bar"
			  text="美的电饭煲,微波炉,烧烤架限时折扣,机会难得,不容错过!"
			  left-icon="volume-o"/>
			<van-swipe :autoplay="3000" indicator-color="white" class="swiper">
			  <van-swipe-item><img src="../../assets/img/swiper/1.png"></van-swipe-item>
			  <van-swipe-item><img src="../../assets/img/swiper/2.png"></van-swipe-item>
			  <van-swipe-item><img src="../../assets/img/swiper/3.png"></van-swipe-item>
			  <van-swipe-item><img src="../../assets/img/swiper/4.png"></van-swipe-item>
			</van-swipe>
			
			<quarantined>
				<div slot="center">今日优选</div>
			</quarantined>
			<div class="quarantined-image">
				<img src="./childcomps/images/star.png" />
			</div>
			<div class="card-father">
				<jr class="cards"></jr>
			</div>
			<quarantined>
				<div slot="center">限时折扣</div>
			</quarantined>
			<div class="quarantined-image">
				<img src="./childcomps/images/star.png" />
			</div>
			<xs></xs>
			<bottom></bottom>
		</van-pull-refresh>
		
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import Quarantined from './childcomps/Quarantined.vue'
	import Jr from './childcomps/jr.vue'
	import Xs from './childcomps/xs.vue'
	import Bottom from './childcomps/bottom.vue'
	
	
	export default{
		name:"home",
		components:{
			NavBar,
			Quarantined,
			Jr,
			Xs,
			Bottom
		},
		
		data() {
		   return {
		     isLoading: false,
			 message:'',
			 show:false
		   }
		 },
		 methods: {
		   onRefresh() {
		     setTimeout(() => {
		       // this.$toast('刷新成功');
		       this.isLoading = false; 
		     }, 500);
		   }
		 }
	}
</script>

<style scoped="scoped">
	.nav-bar{
		height: 44px;
		width: 100%;
		background-color: orangered;
		color: white;
		font-size: 18px;
		z-index: 9;
		
		padding-top: 1px;
		
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		
	}
	.homes{
		padding-top: 44px;
		height: 1430px;
		position: relative;
		padding-bottom: 49px;
	}
	.swiper{
		margin: 10px 5px 0px 5px;
	}
	.swiper img{
		width: 100%;
		height: 180px;
	}
	.notice-bar{
		margin: 2px 0px 0px 0px;
	}
	.quarantined-image{
		text-align: center;
		height: 30px;
	}
	
	
</style>
