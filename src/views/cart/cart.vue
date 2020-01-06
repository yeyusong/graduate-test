<template>
	<div id="cart">
		<nav-bar class="nav-bar"><div slot="center">剁手侠</div></nav-bar>
		<h2>购物车</h2>
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
	#cart {
	  padding-top: 44px;
	  height:500px;
	  position: relative;
	  padding-bottom: 49px;
		
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
</style>
