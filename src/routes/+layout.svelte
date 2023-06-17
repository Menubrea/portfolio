<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Footer, Navbar } from '../lib/components/ui';
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

	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
