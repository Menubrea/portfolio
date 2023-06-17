<script lang="ts">
	import { Techs, MyInterests, ProfileData } from '.';
</script>

<svelte:head>
	<title>About me</title>
	<meta name="description" content="Learn more about Truls Haakenstad " />
	<meta
		name="keywords"
		content="about, about me, about Truls Haakenstad, about Menubrea, Menubrea.dev"
	/>
</svelte:head>

<section class="container max-w-3xl md:my-5 card p-5 md:grid grid-cols-3 gap-2">
	<div class="col-span-2">
		<ProfileData />
		<Techs />
	</div>
	<MyInterests />
</section>
