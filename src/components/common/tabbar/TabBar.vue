<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style>
  #TabBar{
    display: flex;
    background-color: #F6F6F6;
    position:fixed ;
    left: 0;
    right: 0;
    bottom: 0;
    /* 使得过渡部分以阴影显示2 */
    box-shadow: 0 -5px 1px rgba(100,100,100,.1);
	
  }
  
</style>
