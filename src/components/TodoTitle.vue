<template>
	<div class="todo__top">
		<router-link class="todo__link" to="/">На главную</router-link>
		<h1 class="todo__title">{{ title }}</h1>
	</div>
</template>

<script>
export default {
	name: 'VueTodoTitle',

	data() {
		return {
			title: 'TODOLIST'
		}
	},

	mounted() {},

	methods: {}
}
</script>

<style scoped>
.todo__title {
	text-align: center;
	margin-bottom: 50px;
	font-size: 50px;
	color: aliceblue;
}
.todo__top {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
}
.todo__link {
	width: 300px;
	font-size: 20px;
	color: rgb(52, 94, 178);
	text-decoration: none;
	padding: 10px 40px;
	background: white;
	border-radius: 40px;
	transition: all 0.3s ease;
}
.todo__link:hover {
	background: aliceblue;
	border-radius: 10px;
}
</style>
