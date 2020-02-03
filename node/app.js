var express = require('express')
var app = express()

// 解决跨域问题
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
	res.header('Access-Control-Allow-Headers','X-Requested-With')
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
	res.header('X-Powered-By','3.2.1')
	res.header('Content-Type','application/json;charset=utf-8')
	next()
	
})


var homedata_yx = [
	{id:1,name:'苹果xr',desc:'少年,拿肾来换吧',price:8999.00,img:'https://img12.360buyimg.com/n1/s450x450_jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
	{id:2,name:'蓝牙耳机',desc:'一个普通的蓝牙耳机',price:299.00,img:'http://image3.suning.cn/uimg/b2c/newcatentries/0070139225-000000000179082772_2_800x800.jpg'},
	{id:3,name:'女式大衣',desc:'你又没有女朋友,买什么女式大衣',price:159.00,img:'http://i00.c.aliimg.com/img/ibank/2013/426/246/1043642624_519089371.jpg'},
	{id:4,name:'红牛',desc:'一瓶提神醒脑',price:4.00,img:'https://img.zcool.cn/community/01d9ae55440d500000019ae9ab52d6.jpg@2o.jpg'}
]
var homedata_xs = [
	{id:5,name:'背包',desc:'原价388,现在只要288',price:288.00,oldprice:388.00,img:'http://imgupload.youboy.com/imagestore20160229a96941b8-b0e3-4354-a9ec-7043dfee2df4.jpg'},
	{id:6,name:'电磁炉',desc:'再降价老板就要饿死了',price:588.00,oldprice:688.00,img:'http://pic.66zhuang.com/article/pics/image/2015-01-30/e019f04a4bfffc403297735bcf411340.jpg'},
	{id:7,name:'AJ鞋子',desc:'别看了,少年你买不起',price:2999.00,oldprice:3199.00,img:'http://pic4.58cdn.com.cn/zhuanzh/n_v2e163ce5862ca440c8a46da366bf1cfe4.jpg?w=750&h=0'},
	{id:8,name:'卤蛋',desc:'这年头也就卤蛋吃的起了',price:2.00,oldprice:2.50,img:'http://image8.huangye88.cn/ueditor/php/upload/2341552/image/20170701/1498869664793358.jpg'}
]
var moredata = [
	{id:9,name:'牛奶',price:3.00,desc:'补充蛋白质,杠杠的',img:'http://img.jdzj.com/UserDocument/2014c/huqiaosimon/Picture/201472318750.jpg'},
	{id:10,name:'面包',price:3.50,desc:'饱腹神器,你值得拥有',img:'http://file06.16sucai.com/2016/0505/1241a67a54ede277b8fa6f438e07afa3.jpg'},
	{id:11,name:'蛋糕',price:5.50,desc:'手工蛋糕,满满的爱',img:'http://www.62a.net/tbimg/img/tfscom/i2/3343674572/TB2COCRvx9YBuNjy0FfXXXIsVXa_%21%213343674572.jpg'},
	{id:12,name:'可乐',price:2.80,desc:'肥宅快乐水',img:'http://n.sinaimg.cn/sinacn20/439/w641h598/20180711/df64-hfefkqq4749944.jpg'},
	{id:13,name:'数码相机',price:2288.00,desc:'拍照更清晰',img:'http://img02.taobaocdn.com/bao/uploaded/i2/TB1XbYVGFXXXXabXFXXXXXXXXXX_!!0-item_pic.jpg'},
	{id:14,name:'奶茶',price:4.50,desc:'一泡即可',img:'http://img3.redocn.com/tupian/20140628/qiaokelinaicha_2658248.jpg'},
	{id:15,name:'雨伞',price:10.00,desc:'下雨咯',img:'http://pic.66zhuang.com/article/pics/image/2015-02-05/1435570d7c63d44a223bdf2a410757fa.jpg'},
	{id:16,name:'键盘',price:89.99,desc:'祖安人的专属',img:'http://img1.gtimg.com/digi/pics/hv1/28/90/1054/68559328.jpg'},
	{id:17,name:'茶杯',price:11.80,desc:'我就是属于你的一杯子',img:'http://img2.99114.com/group10/M00/D4/4A/rBADs1odWPSAYJiuAACkl7JkzhA911.jpg'},
	{id:18,name:'电视机',price:5888.00,desc:'看大片怎么能少了我',img:'http://file5.youboy.com/e/2015/3/28/7/709673s.jpg'},
	{id:19,name:'纸巾',price:5.00,desc:'擦鼻涕用的啦',img:'http://photocdn.sohu.com/20130314/Img368854655.jpg'},
	{id:20,name:'手办',price:288.00,desc:'某种程度上,这是青春',img:'http://comic.people.com.cn/NMediaFile/2014/0801/MAIN201408011628000024660186205.jpg'},
	{id:21,name:'小霸王游戏机',price:58.00,desc:'童年的记忆',img:'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20181218/c0281fb0208d40739dc094c033630883.jpeg'},
	{id:22,name:'溜溜球',price:9.90,desc:'闪开,我要开始装逼了',img:'http://www.234.cn/uploadfile/images/product/635507288576873750-6.webp.jpg'},
	{id:23,name:'方便面',price:4.50,desc:'屌丝专属泡面',img:'http://i2.sinaimg.cn/health/2013/0322/U9598P434DT20130322150530.jpg'},
	{id:24,name:'创可贴',price:1.00,desc:'治愈受伤的心',img:'http://ah.people.com.cn/NMediaFile/2013/0927/LOCAL201309271711250309710621294.jpg'},
	{id:25,name:'玻璃杯',price:5.00,desc:'易碎物品',img:'http://file06.16sucai.com/2016/0227/cda1410ea26ac1b631889e95f6c846db.jpg'},
	{id:26,name:'鱼竿',price:1199.00,desc:'放长线钓大鱼',img:'http://img.alicdn.com/imgextra/i1/TB2tOGBhsjI8KJjSsppXXXbyVXa_%21%212109003044.jpg_400x400.jpg'},
	{id:27,name:'牛仔裤',price:59.00,desc:'帅的一批哦',img:'http://img01.taobaocdn.com/bao/uploaded/i1/13629033964236388/T18PIqXcJbXXXXXXXX_!!0-item_pic.jpg'},
	{id:28,name:'相册',price:15.00,desc:'记录你的回忆',img:'http://img.alicdn.com/tfscom/i2/690397799/TB2wBB4oXXXXXXWXpXXXXXXXXXX_%21%21690397799.jpg'},
	{id:29,name:'啤酒',price:3.00,desc:'与我勇闯天涯',img:'http://file06.16sucai.com/2016/0608/1ada29f048b0dca82334cd3e27970a45.jpg'},
	{id:30,name:'袋装烧鸡',price:8.00,desc:'垂涎欲滴',img:'http://pic.baike.soso.com/p/20140620/20140620103044-1716410681.jpg'},
	{id:31,name:'充电宝',price:69.00,desc:'没电了?充一个',img:'http://img.zcool.cn/community/01f24059780a7ca8012193a3b40f4d.jpg@1280w_1l_2o_100sh.jpg'},
	{id:32,name:'枕头',price:19.00,desc:'巴适得很',img:'http://img.fuwo.com/attachment/1611/12/8a109b22a8bc11e68e6200163e00254c.jpg'},
	{id:33,name:'肥皂盒',price:2.00,desc:'放肥皂用的',img:'https://z3.tuanimg.com/imagev2/trade/790x651.9aeb9d5aa9237ebf5b62f70dfdf43613.790x.jpg'},
	{id:34,name:'牛肉干',price:6.00,desc:'美味一起分享',img:'http://5b0988e595225.cdn.sohucs.com/images/20180621/24d0db9509444af49cc7f0427a8c0b26.jpeg'}
]
app.get('/',function(req,res){
	res.send('主路由')
})
app.get('/homeyx',function(req,res){
	res.send(homedata_yx)
})
app.get('/homexs',function(req,res){
	res.send(homedata_xs)
})
app.get('/more',function(req,res){
	res.send(moredata)
})

app.listen(3000)

console.log('3000 is running')