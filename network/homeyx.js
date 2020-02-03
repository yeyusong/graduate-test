import {request} from './request.js'

export function getyxdata(){
	return request({
		url:'/homeyx'
	})
}