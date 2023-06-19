<script lang="ts">
	import { ProjectsUI } from '$lib/components/project';
	import { onMount } from 'svelte';
	import type { Project } from '$lib/constants/projects';

	export let data;
	let projects: Project[] = [];
	let loading: boolean = true;

	let { supabase } = data;
	$: ({ supabase, session } = data);

	onMount(async () => {
		try {
			let { data: Projects, error } = await supabase.from('Projects').select('*');
			if (error) {
				loading = false;
				throw error;
			} else if (Projects !== null) {
				loading = false;
				projects = Projects;
			}
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	});

	export { projects, loading };
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

<div class="p-2 flex flex-col container max-w-3xl mx-auto">
	<ProjectsUI {projects} {loading} />
</div>
