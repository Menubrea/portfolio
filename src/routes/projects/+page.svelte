<script lang="ts">
	import { ProjectCard } from '../../components/project';
	import { projects } from '../../constants/projects';
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="My projects" />
	<meta
		name="keywords"
		content="projects, projects by Truls Haakenstad, projects by Menubrea, Menubrea.dev"
	/>
	<meta property="og:title" content="Projects" />
</svelte:head>

<div class="h-full p-2 flex flex-col justify-center items-center overflow-hidden sm:m-2 md:mt-0">
	<h1
		class="h2 md:pb-2 mb-5 bg-gradient-to-br from-pink-300 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
	>
		Projects
	</h1>
	<section>
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</section>

	<!-- <section class="container mt-5">
		<h2 class="h4"> efforts</h2>
	</section> -->
</div>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
	}

	h1 {
		animation: fadeIn 1s ease-in-out;
	}

	@media (min-width: 1000px) {
		section {
			max-width: 1000px;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (max-width: 600px) {
		section {
			gap: 2rem;
		}
	}
</style>
