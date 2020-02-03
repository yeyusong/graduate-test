<template>
	<div class="jr">
		<good-list :goods="result"></good-list>
	</div>
</template>

<script>
	import GoodList from '../../../components/content/goods/goodList.vue'
	import {getyxdata} from '../../../../network/homeyx.js'
	
	export default{
		components:{
			GoodList
		},
		data(){
			return{
				result:null
			}
		},
		created() {
			getyxdata().then(res=>{
				// console.log(res)
				this.result = res
			})
		},
		methods: {
			 
		  }
	}
</script>

<style>
	.jr{
		padding:5px 5px 0px 5px;
		
	}
	
</style>
