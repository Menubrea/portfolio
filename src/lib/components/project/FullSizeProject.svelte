<script lang="ts">
	import type { Project } from '../../constants/projects';
	export let project: Project;
</script>

<article>
	{#each project.images as image}
		<img src={image} alt={`${project.name} image`} />
	{/each}
	<div class="content">
		<h2>{project.name}</h2>
	</div>
</article>

<style>
	article {
		position: relative;
		overflow: hidden;
	}

	img {
		width: 100%;
		object-fit: cover;
		transform: translateY(-3px);
	}
</style>
