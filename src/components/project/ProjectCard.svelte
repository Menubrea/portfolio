<script lang="ts">
	import type { Project } from '../../constants/projects';
	import { Button } from '../ui';
	export let project: Project;
</script>

<article class="relative pb-2 pb-4">
	<div class="flex gap-2 justify-center py-2 w-full variant-filled-surface">
		{#each project.tech as tech}
			<i class={tech} />
		{/each}
	</div>
	<div class="flex overflow-hidden">
		<img src={project.images[0]} alt={`${project.name} image`} />
	</div>

	<section class="card-content p-4">
		<h2
			class="w-fit mx-auto h4 mb-2 bg-gradient-to-br from-pink-300 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
		>
			{project.name}
		</h2>
		<p class="px-4 text-sm md:text-base">{project.description}</p>
	</section>
	<footer class=" mx-auto w-fit">
		<a target="_blank" href={project.url}
			><Button>Demo <i class="fa-solid fa-square-up-right text-sm ml-2" /></Button></a
		>
		<a target="_blank" href={project.github}
			><Button>Code <i class="devicon-github-original ml-2 text-sm" /></Button></a
		>
	</footer>
</article>

<style>
	.badge {
		font-size: 0.7rem;
	}

	div > i {
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.2rem;
		width: 2.2rem;
		border-radius: 3px;
		backdrop-filter: blur(0.5em);
		background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 210, 203));
		border: 0.5px solid rgba(29, 29, 29, 0.801);
	}

	article {
		background: linear-gradient(90deg, rgb(255, 243, 243) 0%, rgb(255, 253, 251));
		animation: fade 0.6s ease-in-out;
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

	@media (max-width: 600px) {
		div > i {
			height: 2rem;
			width: 2rem;
			font-size: 1rem;
		}
	}
</style>
