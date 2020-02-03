<template>
	<div class="toast"  v-show="isshow">
		<div>{{message}}</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				message:'',
				isshow:false
			}
		},
		methods:{
			show(message,duration=1000){
				this.isshow = true
				this.message = message
				
				setTimeout(()=>{
					this.isshow = false
					this.message = ''
				},duration)
			}
		}
	}
</script>

<style scoped="scoped">
	.toast{
		z-index: 999;
		
		position: fixed;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		padding: 8px 10px;
		
		background-color: rgba(255, 85, 0, .8);
		color: white;
		font-size: 20px;
		border-radius: 5%;
	}
</style>
