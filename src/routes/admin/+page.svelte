<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
	let Err: string | undefined = undefined;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);
	$: if (!session) Err = 'Not authenticated';

	const handleSignOut = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			goto('/');
			if (error) throw error;
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="flex flex-col h-full justify-center items-center">
	{#if Err !== undefined}
		<div>{Err}</div>
		<a href="/auth">Sign In</a>
	{:else}
		<div>Admin Page</div>
		<button type="button" on:click={handleSignOut}>Sign Out</button>
	{/if}
</div>
