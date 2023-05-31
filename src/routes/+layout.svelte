<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Navbar } from '../components/ui';

	// Your custom Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>

	<slot />
</AppShell>
