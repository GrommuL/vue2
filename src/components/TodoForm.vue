<template>
	<form class="form" @submit="createTodo">
		<span class="form-icon"
			><svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="rgb(52, 94, 178)"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7 14C7 13.4477 7.44772 13 8 13C8.55229 13 9 13.4477 9 14C9 14.5523 8.55229 15 8 15C7.44772 15 7 14.5523 7 14Z"
				/>
				<path
					d="M8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19C8.55229 19 9 18.5523 9 18C9 17.4477 8.55229 17 8 17Z"
				/>
				<path
					d="M11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z"
				/>
				<path
					d="M12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z"
				/>
				<path
					d="M15 14C15 13.4477 15.4477 13 16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14Z"
				/>
				<path
					d="M16 17C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17Z"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6 2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H6V2ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H19C19.5523 5 20 5.44772 20 6V9H4V6C4 5.44772 4.44772 5 5 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16ZM4 11V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11H4Z"
				/>
			</svg>
		</span>
		<input
			id="text"
			required
			class="form-field"
			type="text"
			placeholder="Enter your next task"
			v-model="text"
		/>
		<button class="form-btn" type="submit">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="rgb(52, 94, 178)"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
				/>
			</svg>
		</button>
	</form>
</template>

<script>
export default {
	name: 'VueTodoForm',

	data() {
		return {
			text: ''
		}
	},

	methods: {
		createTodo(event) {
			event.preventDefault()
			let todo = {
				id: Date.now(),
				text: this.text,
				isDone: false,
				isChange: false
			}
			this.$store.commit('addTodos', todo)
			this.text = ''
		}
	}
}
</script>

<style scoped>
.form {
	width: 100%;
	position: relative;
}
.form-field {
	width: 100%;
	height: 50px;
	background: white;
	border: none;
	border-radius: 5px;
	padding: 0 50px;
	font-size: 25px;
}
.form-icon {
	position: absolute;
	font-size: 25px;
	top: 11px;
	left: 10px;
	color: rgb(52, 94, 178);
}
.form-btn {
	display: none;
	position: absolute;
	top: 13px;
	right: 10px;
	font-size: 25px;
	background: transparent;
	border: none;
	cursor: pointer;
	color: rgb(52, 94, 178);
}
.form-field:not(:placeholder-shown) + .form-btn {
	display: block;
}
</style>
