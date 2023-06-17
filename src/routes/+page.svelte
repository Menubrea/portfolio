<script>
	import { ButtonAlt } from '../lib/components/ui';
</script>

<svelte:head>
	<title>Truls Haakenstad | Menubrea</title>
	<meta name="description" content="Truls Haakenstad's portfolio / personal website" />
	<meta
		name="keywords"
		content="Truls Haakenstad, Menubrea, Menubrea.dev, Menubrea's portfolio, Menubrea's personal website"
	/>
</svelte:head>

<div class="flex h-full items-center justify-center relative overflow-hidden">
	<div class="p-2 welcomeMessage">
		<h1 class="md:h1 h3">
			Truls Haakenstad | <a
				href="https://github.com/menubrea"
				target="_blank"
				class="bg-gradient-to-br from-pink-500 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
				><i class="fa fa-github" aria-hidden="true" />
				Menubrea</a
			>
		</h1>
		<p class="text-md md:text-2xl mt-2 text-center">
			Frontend Developer, UI/UX Designer, and aspiring Fullstack Developer.
		</p>
		<div class="mt-5 pt-5">
			<a tabindex="-1" href="/projects"><ButtonAlt>Projects</ButtonAlt></a>
		</div>
	</div>
</div>

<style>
	.welcomeMessage {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 1;
		opacity: 0;
		animation: fade 1s ease-in-out;
		animation-fill-mode: forwards;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
