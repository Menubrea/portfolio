<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { Anchor } from '.';
	import logo from '../../assets/logo-light.svg';
	import mobileLogo from '../../assets/logo-dark-mob.svg';
</script>

<AppBar background="none" padding="p-4">
	<svelte:fragment slot="lead">
		<img class="w-20 sm:hidden" src={mobileLogo} alt="website logo" />
		<a href="/">
			<img class="w-32 hidden sm:block" src={logo} alt="website logo" />
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<nav class="flex gap-2">
			<Anchor href="/projects">Projects</Anchor>
			<Anchor href="/contact">Contact</Anchor>
			<Anchor href="/about">About</Anchor>
		</nav>
	</svelte:fragment>
</AppBar>
