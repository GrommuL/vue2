export default {
	state: {
		todos: []
	},
	mutations: {
		setTodos(state, payload) {
			state.todos = payload
		},
		addTodos(state, todo) {
			state.todos.push(todo)
			localStorage.setItem('todo', JSON.stringify(state.todos))
		},
		deleteTodo(state, payload) {
			state.todos = state.todos.filter((item) => {
				return item.id !== payload
			})
			localStorage.setItem('todo', JSON.stringify(state.todos))
		},
		completeTodos(state, payload) {
			state.todos = state.todos.map((item) => {
				if (item.id === payload) {
					return {
						...item,
						isDone: !item.isDone
					}
				}
				return item
			})
			localStorage.setItem('todo', JSON.stringify(state.todos))
		},
		changeTodo(state, payload) {
			state.todos = state.todos.map((item) => {
				if (item.id === payload) {
					return {
						...item,
						isChange: true
					}
				}
				return item
			})
			localStorage.setItem('todo', JSON.stringify(state.todos))
		},
		changeTitleTodo(state, payload) {
			state.todos = state.todos.map((item) => {
				if (item.id === payload.id) {
					return {
						...item,
						isChange: false,
						text: payload.text
					}
				}
				return item
			})
			localStorage.setItem('todo', JSON.stringify(state.todos))
		}
	},
	getters: {
		getAllTodos(state) {
			return state.todos
		}
	}
}
