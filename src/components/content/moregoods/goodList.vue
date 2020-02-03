<template>
	<div class="goods">
		<good-list-item v-for="item in goods" :goodItem="item" :key="item.id" >
			
		</good-list-item>
	</div>
</template>

<script>
	import GoodListItem from './goodListItem.vue'
	
	export default{
		components:{
			GoodListItem
		},
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.goods{
		width: 350px;
		margin: 5px;
		
		 display: flex;
		 flex-wrap: wrap;
		 justify-content: space-around;
		
	}
	
</style>
