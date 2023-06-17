<script lang="ts">
	import logo from '../../../assets/logo-light.svg';
	import ButtonNav from './ButtonNav.svelte';
</script>

<header class="flex flex-col md:flex-row justify-between p-2 items-center">
	<a href="/">
		<img class="w-32" src={logo} alt="website logo" />
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
