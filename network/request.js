import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL:'http://localhost:3000/',
		timeout:5000
	})
	
	instance.interceptors.request.use(config=>{
		return config
	},err=>{
		
	})
	instance.interceptors.response.use(res=>{
		return res.data
	},err=>{
		console.log(err)
	})
	
	//发送真正的网络请求
	return instance(config);
}