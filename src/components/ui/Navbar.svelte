<script lang="ts">
	import logo from '../../assets/logo-light.svg';
	import ButtonNav from './ButtonNav.svelte';
</script>

<header class="flex flex-col justify-between p-2 items-center">
	<a href="/">
		<img class="w-32" src={logo} alt="website logo" />
	</a>
	<div class="mt-2">
		<ButtonNav />
	</div>
</header>

<style>
	header {
		background-color: transparent;
		box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
	}
</style>
