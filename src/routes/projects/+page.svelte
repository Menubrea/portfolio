<script lang="ts">
	import { ProjectCard } from '../../components/project';
	import { projects } from '../../constants/projects';
</script>

<div class="h-full p-2 flex justify-center items-center relative overflow-hidden sm:m-2 md:mt-0">
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

	@media (min-width: 1000px) {
		section {
			max-width: 1000px;
		}
	}
</style>
