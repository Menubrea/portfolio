<script lang="ts">
	import type { Project } from '../../constants/projects';
	export let project: Project;
	export let i: number;
</script>

<article id={`project-${i}`}>
	<img src={project.image} alt={`${project.name} image`} />
	<div class="content">
		<h2>{project.name}</h2>
	</div>
</article>

<style>
	article {
		position: relative;
		height: calc(100vh - 4.4rem);
	}

	img {
		height: calc(100vh - 4.4rem);
		width: 100%;
		object-fit: cover;
	}

	.content {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 500px;
		clip-path: polygon(100% 100%, 0% 100%, 0% 66%, 100% 83%);
		background-color: rgb(255, 255, 255);
		color: #fff;
		padding: 1rem;
	}
</style>
