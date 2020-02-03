<template>
	<div>
		<nav-bar class="nav-bar"><div slot="center">更多商品</div></nav-bar>
		<div class="wrapper" ref="wrappers">
			
				<div class="more">
					<van-search placeholder="请输入搜索关键词" />
					<more-goods></more-goods>
				</div>
		</div>
		<div class="backtop" @click="backtop" v-show="isbacktopshow">
			<img src="../../assets/img/back.png" />
		</div>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import MoreGoods from './childcomps/moregoods.vue'
	import BScroll from 'better-scroll'
	
	export default {
	  data(){
		return{
			scroll:null,
			isbacktopshow:false
		}  
	  },
	  components: {
		NavBar,
		MoreGoods
	  },
	  mounted() {
	  	this.scroll = new BScroll(this.$refs.wrappers,{
			probeType:3
		}),
		this.scroll.on('scroll',(pos)=>{
				// console.log(pos)
				const positionY = -pos.y
				this.isbacktopshow = -pos.y > 500
			})
	  },
	  methods:{
		  backtop(){
			 // x值，y值和时间
			 this.scroll.scrollTo(0,20,1000)
		  }
	  }
	}
</script>

<style scoped="scoped">
	.wrapper{
		height: 100vh;
	}
	.more {
	  padding-top: 44px;
	  position: relative;
	  width: 100%;
	
	}
	.nav-bar {
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
	.backtop{
		width: 40px;
		height: 40px;
		
		float: right;
		
		position: fixed;
		right: 10px;
		bottom: 55px;
	}
	.backtop img{
		width: 40px;
		height: 40px;
	}
</style>
