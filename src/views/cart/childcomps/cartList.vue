<template>
	<div class="cartlist">
		<cart-list-item 
		v-for="(item,index) in cartList" 
		:product="item"
		:key="index"></cart-list-item>
	</div>
</template>

<script>
	import CartListItem from './cartListItem.vue'
	import {mapGetters} from 'vuex'
	
	export default{
		components:{
			CartListItem
		},
		computed:{
			...mapGetters(['cartList'])
		}
	}
</script>

<style scoped="scoped">
	.cartlist{
		margin-bottom: 97px;
	}
</style>
