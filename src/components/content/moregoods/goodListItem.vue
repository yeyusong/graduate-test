<template>
	<div class="good-list-item">
		<div class="img">
			<img :src="goodItem.img" />
		</div>
		<div class="desc">{{goodItem.desc}}</div>
		<div class="itemspan">
			<span class="spans" style="margin-top: 3px;">{{goodItem.name}}</span>
			<span class="spans">
				<btn @moreadd="addtocart"></btn>
			</span>
			<span class="spans" style="color: red;margin-top: 3px;">${{goodItem.price}}</span>
			
		</div>
		
	</div>
</template>

<script>
	import Btn from '../btn/btn.vue'
	
	export default{
		data(){
			return{
				images:this.goodItem.img,
				desc:this.goodItem.desc,
				name:this.goodItem.name,
				price:this.goodItem.price,
				id:this.goodItem.id
			}
		},
		components:{
			Btn
		},
		props:{
			goodItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			addtocart(){
				// 获取购物车需要展示的信息
				const product = {}
				product.id = this.id
				product.img = this.images
				product.name = this.name
				product.desc = this.desc
				product.price = this.price
				// 添加到购物车里
				// this.$store.commit('addCart',product)
				this.$store.dispatch('addCart',product).then(res=>{
					this.$toast.show(res)
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.good-list-item{
		height: 200px;
		width: 150px;
		margin: 5px;
		margin-left: 10px;
		
		border: 2px solid orange;
		border-radius: 3%;
		
	}
	.img img{
		width: 100px;
		height: 120px;
		margin-top: 5px;
		margin-left: 25px;
	}
	.desc{
		text-align: center;
		font-size: 10px;
		margin-top: 5px;
	}
	.itemspan{
		margin-top: 15px;
		display: flex;
	}
	.spans{
		flex:1;
		text-align: center;
		font-size: 13px;
	}
</style>
