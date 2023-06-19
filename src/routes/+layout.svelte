<script lang="ts">
	import { AppShell, Modal } from '@skeletonlabs/skeleton';
	import { Footer, Navbar } from '../lib/components/ui';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(async () => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		{#if $page.url.pathname !== '/' && $page.url.pathname !== '/auth' && $page.url.pathname !== '/admin'}
			<Navbar />
		{/if}
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		{#if $page.url.pathname !== '/auth' && $page.url.pathname !== '/admin'}
			<Footer />
		{/if}
	</svelte:fragment>
</AppShell>
