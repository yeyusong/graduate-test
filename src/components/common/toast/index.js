import Toast from './toast.vue'

const toasts = {}

toasts.install = function(Vue){
	// 创建组件构造器
	const toastContrustor = Vue.extend(Toast)
	
	const toast = new toastContrustor()
	// 将组件对象挂载
	toast.$mount(document.createElement('div'))
	document.body.appendChild(toast.$el)
	
	Vue.prototype.$toast = toast
}

export default toasts