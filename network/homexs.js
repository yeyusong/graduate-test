import {request} from './request.js'

export function getxsdata(){
	return request({
		url:'/homexs'
	})
}