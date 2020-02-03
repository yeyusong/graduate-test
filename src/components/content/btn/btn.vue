<template>
	<div @click="addtocart">
		<van-button type="primary" size="mini" color="orangered">添加</van-button>
	</div>
</template>

<script>
	export default{
		methods:{
			addtocart(){
				this.$emit('moreadd')
				this.$emit('homeadd')
			}
		}
	}
</script>

<style>
</style>
