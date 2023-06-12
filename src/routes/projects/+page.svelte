<script lang="ts">
	import { ProjectCard } from '../../components/project';
	import { projects } from '../../constants/projects';
</script>

<div class="h-full p-2 flex flex-col justify-center items-center overflow-hidden sm:m-2 md:mt-0">
	<h1 class="h2 mb-2">Projects</h1>
	<section>
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</section>
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
</style>
