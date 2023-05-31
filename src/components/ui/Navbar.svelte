<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { Button } from './';
	import logo from '../../assets/logo-dark.svg';
	import mobileLogo from '../../assets/short-logo.svg';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<img class="w-20 sm:hidden" src={mobileLogo} alt="website logo" />
		<img class="w-48 hidden sm:block" src={logo} alt="website logo" />
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<Button>Github</Button>
	</svelte:fragment>
</AppBar>
