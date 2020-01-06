<template>
	<div id="more">
		<nav-bar class="nav-bar"><div slot="center">剁手侠</div></nav-bar>
		<van-search placeholder="请输入搜索关键词" />
		<div class="sy">
			<div class="shiyan"></div>
			<div class="shiyan"></div>
			<div class="shiyan"></div>
			<div class="shiyan"></div>
			<div class="shiyan"></div>
			<div class="shiyan"></div>
			<div class="shiyan"></div>
		</div>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
		export default {
	  components: {
			 NavBar
	  }
		}
</script>

<style>
	#more {
	  padding-top: 44px;
	  height:800px;
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
	.shiyan{
		
		margin: 5px 5px 0px 5px;
		height: 150px;
		width: 150px;
		background-color: red;
		border-radius: 5%;
	}
	.sy{
		padding-left: 15px;
		display: flex;
		flex-wrap: wrap;
	}
</style>
