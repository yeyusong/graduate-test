<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isactive"><slot name="itemicon"></slot></div>
    <div v-else><slot name="itemiconactive"></slot></div>
    <div :style="activestyle"><slot name="itemtext"></slot></div>

    </div>
</template>

<script>
  export default{
    name:"TabBarItem",
    props:{
      path:String,
      activecolor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
         // isactive:false

        }
      },
      computed:{
        isactive(){
          // 如果不加“！==-1”，则会使得活跃状态相反
          return this.$route.path.indexOf(this.path) !== -1
        },
        activestyle(){
          return this.isactive?{color:this.activecolor}:{}
        }
      },
      methods:{
        itemclick(){
          if(this.$route.path!==this.path){
            this.$router.replace(this.path)
          }
        }
      }
    }

</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
	font-family: "微软雅黑";
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* 使得文字与图片之间的空隙取消 */
    vertical-align: middle;
    /* 使得文字与图片之间的像素为2，与上行代码配合等于自定义 */
    margin-bottom: 2px;
  }
  
</style>
