<script lang="ts">
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { Project } from '../../constants/projects';
	import { Button } from '../ui';
	export let project: Project;

	const modal: ModalSettings = {
		type: 'alert',
		title: project?.name,
		body: project?.description
	};

	const handleModal = () => {
		modalStore.trigger(modal);
	};
</script>

<article class="relative">
	<div class="flex justify-center w-full variant-filled-surface">
		{#each project.tech as tech}
			<i class={tech} />
		{/each}
	</div>
	<div class="md:grid grid-cols-3">
		<div class="col-span-1">
			<img src={project.image} alt={`${project.name} image`} />
		</div>

		<div class="col-span-2 flex">
			<section class="card-content px-5">
				<h2
					class=" md:h4 h3 bg-gradient-to-br from-pink-300 to-pink-900 bg-clip-text text-transparent box-decoration-clone mt-4"
				>
					{project.name}
				</h2>
				<p class=" md:text-base">{project.description}</p>
			</section>
			<footer class="flex flex-col items-center">
				<a
					class="flex flex-col items-center justify-center bg-tertiary-100 w-14 h-14 rounded-tl"
					target="_blank"
					href={project.url}
					><i class="fa fa-square-up-right text-sm" />Demo
				</a>
				<a
					class="flex flex-col items-center justify-center bg-tertiary-300 w-14 h-14 rounded-bl"
					target="_blank"
					href={project.github}
					><i class="devicon-github-original text-sm" />Code
				</a>
			</footer>
		</div>
	</div>
	<!-- <button class="bg-tertiary-300 px-2 p-1" on:click={handleModal} on:keypress={handleModal}
		>Read More</button
	> -->
</article>

<style>
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	a:hover {
		opacity: 0.6;
	}

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
