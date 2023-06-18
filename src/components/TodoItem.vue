<template>
	<div>
		<li class="content__list-item">
			<div class="content__list-item-left">
				<span class="content__list-item-done" @click="completeTodo"
					><svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.7048 4.95406C22.3143 4.56353 21.6811 4.56353 21.2906 4.95406L8.72696 17.5177C8.33643 17.9082 7.70327 17.9082 7.31274 17.5177L2.714 12.919C2.32348 12.5284 1.69031 12.5284 1.29979 12.919C0.909266 13.3095 0.909265 13.9427 1.29979 14.3332L5.90392 18.9289C7.07575 20.0986 8.97367 20.0978 10.1445 18.9271L22.7048 6.36827C23.0953 5.97775 23.0953 5.34458 22.7048 4.95406Z"
							fill="green"
						/>
					</svg>
				</span>
				<input
					class="content__list-item-input"
					type="text"
					:value="this.todo.text"
					ref="title"
					v-if="this.todo.isChange"
				/>
				<span
					v-else
					class="content__list-item-text"
					v-bind:class="{ active: todo.isDone }"
					>{{ todo.text }}</span
				>
			</div>
			<div class="content__list-buttons">
				<button class="content__list-item-edit" @click="editTodo">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="rgb(52, 94, 178)"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22Z"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M18.3056 1.87868C17.1341 0.707107 15.2346 0.707107 14.063 1.87868L3.38904 12.5526C2.9856 12.9561 2.70557 13.4662 2.5818 14.0232L2.04903 16.4206C1.73147 17.8496 3.00627 19.1244 4.43526 18.8069L6.83272 18.2741C7.38969 18.1503 7.89981 17.8703 8.30325 17.4669L18.9772 6.79289C20.1488 5.62132 20.1488 3.72183 18.9772 2.55025L18.3056 1.87868ZM15.4772 3.29289C15.8677 2.90237 16.5009 2.90237 16.8914 3.29289L17.563 3.96447C17.9535 4.35499 17.9535 4.98816 17.563 5.37868L15.6414 7.30026L13.5556 5.21448L15.4772 3.29289ZM12.1414 6.62869L4.80325 13.9669C4.66877 14.1013 4.57543 14.2714 4.53417 14.457L4.0014 16.8545L6.39886 16.3217C6.58452 16.2805 6.75456 16.1871 6.88904 16.0526L14.2272 8.71448L12.1414 6.62869Z"
						/>
					</svg>
				</button>
				<button class="content__list-item-cancel" @click="removeTodo">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
							fill="rgb(52, 94, 178)"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
							fill="rgb(52, 94, 178)"
						/>
					</svg>
				</button>
				<button
					@click="editTodoTitle"
					class="content__list-item-save"
					v-bind:class="{ active: todo.isChange }"
				>
					Save
				</button>
			</div>
		</li>
	</div>
</template>

<script>
export default {
	name: 'VueTodoItem',
	props: {
		todo: {
			type: Object,
			requered: true
		}
	},
	data() {
		return {
			newTitle: ''
		}
	},

	mounted() {},

	methods: {
		removeTodo() {
			this.$store.commit('deleteTodo', this.todo.id)
		},
		completeTodo() {
			this.$store.commit('completeTodos', this.todo.id)
		},
		editTodo() {
			this.$store.commit('changeTodo', this.todo.id)
		},
		editTodoTitle() {
			let newTitle = {
				id: this.todo.id,
				text: this.$refs.title.value
			}
			this.$store.commit('changeTitleTodo', newTitle)
		}
	}
}
</script>

<style scoped>
.content__list-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	background: white;
	border-bottom: 1px solid gray;
}
.content__list-item-left {
	display: flex;
	align-items: center;
	gap: 4px;
}
.content__list-item-text {
	font-size: 20px;
	font-weight: 300;
}
.content__list-item-text.active {
	color: green;
}
.content__list-buttons {
	display: flex;
	align-items: center;
}
.content__list-item-cancel {
	font-size: 10px;
	background: transparent;
	border: none;
	padding: 5px;
	cursor: pointer;
	color: rgb(52, 94, 178);
}
.content__list-item-done {
	cursor: pointer;
}
.content__list-item-input {
	border: none;
	outline: none;
	font-size: 20px;
	font-weight: 300;
	width: 350px;
}
.content__list-item-save {
	display: none;
	background: transparent;
	padding: 4px;
	background: green;
	border: 1px solid transparent;
	border-radius: 4px;
	color: white;
	cursor: pointer;
}
.content__list-item-edit {
	display: flex;
	background: transparent;
	padding: 4px;
	border: 1px solid transparent;
	border-radius: 4px;
	color: white;
	cursor: pointer;
}
.content__list-item-save.active {
	display: flex;
}
</style>
