<template>
	<div class="cartlistitem">
		<div class="check">
			<check-button 
			:ischecked="product.check"
			@click.native="checkclick"></check-button>
		</div>
		<div class="items">
			<div class="image"><img :src="product.img" /></div>
			<div class="infos">
				<div style="font-size: 18px;text-align: center;">{{product.name}}</div>
				<div style="font-size: 12px;text-align: center;">{{product.desc}}</div>
				<div class="price">${{product.price}}</div>
			</div>
			<div class="count">
				X{{product.count}}
			</div>
		</div>
	</div>
</template>

<script>
	import CheckButton from '../../../components/content/checkbutton/CheckButton.vue'
	
	export default{
		components:{
			CheckButton
		},
		props:{
			product:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		methods:{
			checkclick(){
				this.product.check = !this.product.check
			}
		}
	}
</script>

<style scoped="scoped">
	.cartlistitem{
		border: 2px solid orangered;
		border-radius: 4%;
		
		margin: 5px;
		
		display: flex;
	}
	
	.check{
		flex:1;
		margin-top: 14px;
	}
	.items{
		flex: 5;
		display: flex;
	}
	.image{
		flex: 1;
	}
	.image img{
		margin: 2px;
		width: 70px;
		height: 80px;
	}
	.infos{
		flex:3
	}
	.count{
		flex: 1;
		line-height: 80px;
		padding-left: 15px;
	}
	.price{
		color: red;
		float: right;
		margin-right: 20px;
		margin-top: 20px;
	}
</style>
