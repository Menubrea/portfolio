<script lang="ts">
	import ButtonNav from './ButtonNav.svelte';
</script>

<header class="flex flex-col md:flex-row justify-between p-2 items-center bg-surface-100">
	<a href="/">
		<!-- <img class="w-32" src={logo} alt="website logo" /> -->

		<h1
			class="logo h5 bg-gradient-to-br from-pink-500 to-pink-900 bg-clip-text text-transparent box-decoration-clone flex items-center gap-1"
		>
			<i class="devicon-devicon-plain" />Menubrea.dev
		</h1>
	</a>
	<div class="mt-2 md:mt-0">
		<ButtonNav />
	</div>
</header>

<style>
	header {
		background-color: none;
		backdrop-filter: blur(10px);
	}
</style>
