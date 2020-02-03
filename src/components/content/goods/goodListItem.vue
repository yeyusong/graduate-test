<template>
	<div class="good-list-item">
		<img :src="goodItem.img" />
		<div class="name">{{goodItem.name}}</div>
		<div class="desc">( {{goodItem.desc}} )</div>
		<div class="price">
			${{goodItem.price}}
			<div class="btn">
				<btn @homeadd="addtocard"></btn>
			</div>
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
			addtocard(){
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
		height: 110px;
		margin: 5px;
		
		border: 2px solid orangered;
		border-radius: 3%;
	}
	.good-list-item img{
		width: 80px;
		height: 100px;
		
		float: left;
		padding-left: 5px;
		padding-top: 5px;
	}
	.name{
		font-size: 20px;
		padding-left: 150px;
		font-family: "微软雅黑";
	}
	.desc{
		font-size: 13px;
		padding-top: 5px;
		padding-left: 120px;
	}
	.price{
		color: red;
		padding-top: 28px;
		padding-left: 120px;
	}
	.btn{
		color: #333333;
		float: right;
		padding-right: 5px;
	}
</style>
