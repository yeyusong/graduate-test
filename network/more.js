import {request} from './request.js'

export function getmoredata(){
	return request({
		url:'/more'
	})
}