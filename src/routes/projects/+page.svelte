<script lang="ts">
	import { ProjectsUI } from '$lib/components/project';
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

<div class="p-2 flex flex-col container max-w-3xl mx-auto projects-main">
	<div class=" gap-2">
		<ProjectsUI />
	</div>
</div>
