<template>
	<div class="home">
		<span class="home__title"
			>К сожалению данная страница находится на ремонте.</span
		>
		<nav class="home__nav">
			<span class="home__nav-title">Ознакомтесь со списком дел</span>
			<router-link class="home__nav-link" to="/todo">Todo</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'HomePage',

	data() {
		return {}
	},

	mounted() {},

	methods: {}
}
</script>

<style scoped>
.home {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
	background: linear-gradient(
		0deg,
		rgba(0, 3, 1, 1) 0%,
		rgba(9, 64, 121, 1) 23%,
		rgba(0, 164, 255, 1) 100%
	);
}
.home__title {
	font-size: 48px;
	max-width: 800px;
	color: aliceblue;
}
.home__nav {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
}
.home__nav-title {
	font-size: 20px;
	color: aliceblue;
}
.home__nav-link {
	font-size: 20px;
	color: white;
	text-decoration: none;
	padding: 10px 40px;
	background: #0e9349;
	border-radius: 40px;
	transition: all 0.3s ease;
}
.home__nav-link:hover {
	background: #0ba24e;
	border-radius: 10px;
}
</style>
