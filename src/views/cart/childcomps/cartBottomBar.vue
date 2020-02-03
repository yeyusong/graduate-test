<template>
	<div class="buttombar">
		<div class="checkall">
			<check-button 
			class="check-button" 
			:ischecked="isSelectAll"
			@click.native="checkclick"></check-button>
			<span style="padding-left: 5px;">全选</span>
			
		</div>
		<div class="price">合计：{{totalPrice}}</div>
		<div class="calculate" @click="calcclick">去结算:({{checkLength}})</div>
	</div>
</template>

<script>
	import CheckButton from '../../../components/content/checkbutton/CheckButton.vue'
	import {mapGetters} from 'vuex'
	
	export default{
		props:{
			judges:{
				type:Number,
				default:0
			}
		},
		components:{
			CheckButton
		},
		computed:{
			...mapGetters(['cartList']),
			totalPrice(){
				return "$" + this.cartList.filter(item=>{
					return item.check
				}).reduce((preValue,item)=>{
					return preValue + item.price * item.count
				},0).toFixed(2)
			},
			checkLength(){
				return this.cartList.filter(item=>item.check).length
			},
			isSelectAll(){
				// 默认为不选中状态
				if(this.cartList.length === 0) return false
				for (let item of this.cartList){
					if(!item.check){
						return false
					}
				}
				return true
			},
			judgecart(){
				if(this.checkLength === 0){
					// 0:未选择
					return 0
				}else if(this.checkLength !== 0){
					//  1:有选择
					return 1
				}
			}
		},
		methods:{
			checkclick(){
				if(this.isSelectAll){ //全部选择
					this.cartList.forEach(item => item.check = false)
				}else{ //部分或全部不选择
					this.cartList.forEach(item => item.check = true)
				}
			},
			calcclick(){
				if(this.judgecart === 0){
					this.$toast.show('未选择商品',2000)
				}else if(this.judgecart === 1){
					this.$toast.show('亲，余额不足',2000)
				}else{
					this.$toast.show('未知错误',2000)
				}
			}
		}
	}
</script>

<style scoped="scoped"> 
.buttombar{
	height: 44px;
	width: 100%;
	background-color: white;
	position: fixed;
	bottom: 49px;
	border-top: 2px solid orangered;
	display: flex;
	font-family: "微软雅黑";
	font-size: 15px;
}
.check-button{
	margin-bottom: 12px;
}
.checkall{
	display: flex;
	align-items: center;
	width: 80px;
}
.price{
	margin-left: 25px;
	margin-top: 3px;
	line-height: 38px;
	flex: 1;
}
.calculate{
	width: 80px;
	line-height: 38px;
	margin-left: 60px;
	text-align: center;
	background-color: orangered;
	color: white;
}
</style>
