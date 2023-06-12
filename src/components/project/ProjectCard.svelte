<script lang="ts">
	import type { Project } from '../../constants/projects';
	import { Button } from '../ui';
	export let project: Project;
</script>

<article class="relative py-2 pb-4 card">
	<div class="flex gap-1 justify-center mb-1">
		{#each project.tech as tech}
			<span class="badge variant-ghost-surface">{tech}</span>
		{/each}
	</div>
	<div class="flex">
		<img class="basis-1/2" src={project.images[0]} alt={`${project.name} image`} />
	</div>

	<section class="card-content p-4">
		<h2 class=" w-fit mx-auto h5 mb-2">
			{project.name}
		</h2>
		<strong>{project.shortDescription}</strong>
		<p>{project.description}</p>
	</section>
	<footer class="mt-3 mx-auto w-fit">
		<a target="_blank" href={project.url}><Button>View Site</Button></a>
		<a target="_blank" href={project.github}><Button>View Code</Button></a>
	</footer>
</article>

<style>
	.badge {
		font-size: 0.7rem;
	}

	article {
		border-radius: 0.2em;
		animation: fade 1s ease-in-out;
		opacity: 0;
		animation-fill-mode: forwards;
		box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
	}

	article:nth-child(2) {
		animation-delay: 0.3s;
	}

	article:nth-child(3) {
		animation-delay: 0.6s;
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
