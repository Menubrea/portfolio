<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Navbar } from '../components/ui';
	import { page } from '$app/stores';

	// Your custom Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	// get path from the current route
</script>

<AppShell>
	<svelte:fragment slot="header">
		{#if $page.url.pathname !== '/'}
			<Navbar />
		{/if}
	</svelte:fragment>

	<slot />
</AppShell>
