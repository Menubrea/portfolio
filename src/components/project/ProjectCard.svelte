<script lang="ts">
	import type { Project } from '../../constants/projects';
	import { Button } from '../ui';
	export let project: Project;
</script>

<article class="relative p-2 pb-4 variant-ghost-secondary">
	<div class="flex gap-1 justify-center mb-1">
		{#each project.tech as tech}
			<span class="badge variant-ghost-surface">{tech}</span>
		{/each}
	</div>
	<img src={project.image} alt={`${project.name} image`} />

	<section class="card-content">
		<h2 class="my-1 w-fit px-5 mx-auto">
			{project.name}
		</h2>
		<strong class="blockquote">{project.shortDescription}</strong>
		<p class="blockquote">{project.description}</p>
	</section>
	<footer class="mt-3 mx-auto w-fit">
		<Button>View Site</Button>
		<Button>View Code</Button>
	</footer>
</article>

<style>
	.blockquote {
		border-color: rgb(255, 255, 255);
	}

	.badge {
		font-size: 0.7rem;
	}

	article {
		backdrop-filter: blur(10px);
		transform: translateX(-250%);
		animation: move 1s ease-in-out;
		animation-fill-mode: forwards;
		box-shadow: 0 0 0.5px 0.5px rgba(0, 0, 0, 0.172);
	}

	article:hover {
		box-shadow: 0 0 10px 0.5px rgba(0, 0, 0, 0.172);
	}

	article:nth-child(2) {
		animation-delay: 0.2s;
	}

	article:nth-child(1) {
		animation-delay: 0.4s;
	}

	@keyframes move {
		0% {
			transform: translateX(-250%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
