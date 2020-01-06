<template>
  <div>
	<router-view></router-view>
    <main-tab-bar class="tabbar"></main-tab-bar>
   </div>
  
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar.vue'

export default {
	components:{
		MainTabBar
	}
}
</script>

<style scoped="scoped">
	.tabbar{
		width: 100%;
	}
</style>
