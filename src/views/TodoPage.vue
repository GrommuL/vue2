<template>
	<div class="todo">
		<TodoTitle />
		<TodoForm />
		<TodoContent />
	</div>
</template>

<script>
import TodoTitle from '../components/TodoTitle'
import TodoForm from '../components/TodoForm'
import TodoContent from '../components/TodoContent'
export default {
	name: 'TodoPage',
	components: {
		TodoTitle,
		TodoForm,
		TodoContent
	},
	data() {
		return {}
	},

	methods: {}
}
</script>

<style scoped>
.todo {
	max-width: 500px;
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
