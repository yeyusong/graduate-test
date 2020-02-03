<template>
	<div class="check-button" :class="{check:ischecked}">
		
	</div>
</template>

<script>
	export default{
		props:{
			ischecked:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped="scoped">
	.check-button{
		height: 25px;
		width: 25px;
		background-color: white;
		
		margin-top: 15px;
		margin-left: 15px;
		
		border: 2px solid orangered;
		border-radius: 50%;
	}
	.check{
		
		background-color: green;
		border: 2px solid orangered;
		
	}
	
</style>
