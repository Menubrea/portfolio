<script lang="ts">
	import { ButtonAlt } from '$lib/components/ui/index.js';
	import { goto } from '$app/navigation';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	const handleSignIn = async () => {
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (data.session) goto('/admin');
			if (error) throw error;
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="flex flex-row items-center justify-center h-full">
	<form
		class="container max-w-xl mx-auto border-2 border-pink-500 p-5 rounded"
		on:submit|preventDefault={handleSignIn}
	>
		<h1 class="h4 text-center">This is an access point to a retricted space.</h1>
		<label class="label w-full mt-2">
			<span>Email</span>
			<input
				bind:value={email}
				class="input border border-gray-900 rounded"
				type="email"
				required
				name="email"
				placeholder="Your email"
			/>
		</label>
		<label class="label w-full mt-2">
			<span>Password</span>
			<input
				bind:value={password}
				class="input border border-gray-900 rounded"
				type="password"
				required
				name="password"
				placeholder="Your Password"
			/>
		</label>

		<div class="w-fit mx-auto mt-5">
			<ButtonAlt type="submit">Sign In</ButtonAlt>
		</div>
	</form>
</div>
