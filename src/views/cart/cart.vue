<template>
	<div id="cart">
		<nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
		
		<cart-list></cart-list>
		
		<cart-bottom-bar></cart-bottom-bar>
		
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import CartList from './childcomps/cartList.vue'
	import CartBottomBar from './childcomps/cartBottomBar.vue'
	
	export default {
	  components: {
			 NavBar,
			 CartList,
			 CartBottomBar
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
