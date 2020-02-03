import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		cartList:[]
	},
	mutations:{
		addCounter(state,payload){
			payload.count += 1
		},
		addToCart(state,payload){
			payload.check = true
			state.cartList.push(payload)
		}
	},
	actions:{
		addCart(context,payload){
			return new Promise((res,rej)=>{
				// 查找之前数据中是否有该商品
				let oldProduct = context.state.cartList.find(item => item.id === payload.id)
				
				if(oldProduct){
					// oldProduct.count += 1
					context.commit('addCounter',oldProduct)
					res('当前商品数量+1')
				}else{
					payload.count = 1 
					// context.state.cartList.push(payload)
					context.commit('addToCart',payload)
					res('添加商品成功')
				}
			})
			
		}
	},
	getters:{
		cartLength(state){
			return state.cartList.length
		},
		cartList(state){
			return state.cartList
		}
	}
})

export default store