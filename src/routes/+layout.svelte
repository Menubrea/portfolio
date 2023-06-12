<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Navbar } from '../components/ui';
	import { page } from '$app/stores';

	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
</script>

<AppShell>
	<svelte:fragment slot="header">
		{#if $page.url.pathname !== '/'}
			<Navbar />
		{/if}
	</svelte:fragment>

	<slot />
</AppShell>
