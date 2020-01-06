<template>
	<div class="quarantined">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.quarantined{
		font-family: "黑体";
		text-align: center;
		display: flex;
		font-size: 20px;
	}
	.left,.right{
		flex: 1;
	}
	.center{
		flex: 2;
	}
	
</style>
