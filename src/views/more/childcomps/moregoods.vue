<template>
	<div class="moregoods">
		<good-list :goods="result"></good-list>
	</div>
</template>

<script>
	import GoodList from '../../../components/content/moregoods/goodList.vue'
	import {getmoredata} from '../../../../network/more.js'
	
	export default{
		data(){
				return{
					result:null
				}  
		},
		components:{
			GoodList
		},
		created() {
			getmoredata().then(res=>{
				this.result = res
			})
		}
		
	}
</script>

<style scoped="scoped">
	.moregoods{
		padding-bottom: 44px;
	}
</style>
