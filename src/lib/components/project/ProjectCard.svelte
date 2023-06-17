<script lang="ts">
	import type { Project } from '../../constants/projects';
	import { Button } from '../ui';
	export let project: Project;
</script>

<article class="relative">
	<div class="flex justify-center w-full variant-filled-surface">
		{#each project.tech as tech}
			<i class={tech} />
		{/each}
	</div>
	<div class="md:grid grid-cols-3">
		<img class="col-span-1" src={project.images[0]} alt={`${project.name} image`} />

		<div class="col-span-2 p-5 md:mt-4 mt-0">
			<section class="card-content">
				<h2
					class="w-fit mx-auto md:h4 h3 mb-2 bg-gradient-to-br from-pink-300 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
				>
					{project.name}
				</h2>
				<p class="px-4 md:text-base">{project.description}</p>
			</section>
			<footer class=" mx-auto w-fit mt-2">
				<a target="_blank" href={project.url}
					><Button>Demo <i class="fa fa-square-up-right text-sm ml-2" /></Button></a
				>
				<a target="_blank" href={project.github}
					><Button>Code <i class="devicon-github-original ml-2 text-sm" /></Button></a
				>
			</footer>
		</div>
	</div>
</article>

<style>
	.badge {
		font-size: 0.7rem;
	}

	div > i {
		font-size: 1.5rem;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
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
