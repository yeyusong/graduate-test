<template>
	<div class="xs">
		<good-list :goods="result"></good-list>
	</div>
</template>

<script>
	import GoodList from '../../../components/content/goods/goodList.vue'
	import {getxsdata} from '../../../../network/homexs.js'
	
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
			getxsdata().then(res=>{
				// console.log(res)
				this.result = res
			})
		},
		methods: {
			 
		  }
	}
</script>

<style>
	.xs{
		padding:5px 5px 0px 5px;
	}
</style>
