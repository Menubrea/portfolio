<script lang="ts">
	import { ProjectCard } from '.';
	import type { Project } from '../../constants/projects';

	export let projects: Project[];
	export let loading: boolean = true;

	interface Searches {
		name: string;
	}
	let popularSearches: Searches[] = [];
	$: popularSearches = projects.reduce((acc: Searches[], project) => {
		project.tech.forEach((tech: string): void => {
			if (!acc.some((search: { name: string }) => search.name === tech)) {
				acc.push({ name: tech });
			}
		});

		return acc;
	}, []);

	let searchValue: string = '';
	$: filteredProjects = projects.filter((project) =>
		project.tech.some((tech) => tech.toLowerCase().includes(searchValue.toLowerCase().trim()))
	);
</script>

<div class=" p-2 gap-3 mb-2 rounded border-2 border-tertiary-500 h-fit">
	<div class="flex gap-2 items-center">
		<h1 class="h3">Projects</h1>
		<div class="flex w-full">
			<input
				type="text"
				placeholder="Search technology, e.g React etc."
				class="input"
				bind:value={searchValue}
				aria-label="Search projects"
			/>
			{#if searchValue}
				<button
					class="btn btn-primary"
					on:click={() => {
						searchValue = '';
					}}><i class="fa fa-close" /></button
				>
			{/if}
		</div>
	</div>
</div>
{#if loading}
	<div class="h-96 items-center justify-center flex flex-col">Loading</div>
{:else}
	<section class="flex flex-col gap-5">
		{#if filteredProjects.length === 0}
			<p class="text-center mt-2">No results found, try one of these options instead</p>
			<ul class="mx-auto max-w-lg flex gap-2 flex-wrap">
				{#each popularSearches as search}
					<li class="bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center">
						<button
							on:click={() => (searchValue = search.name)}
							on:keypress={() => (searchValue = search.name)}
						>
							<i class="text-lg {search.name}" />
						</button>
					</li>
				{/each}
			</ul>
		{:else}
			{#each filteredProjects as project}
				<ProjectCard {project} />
			{/each}
		{/if}
	</section>
{/if}

<style>
	li {
		cursor: pointer;
	}

	li:hover {
		opacity: 0.8;
	}

	h1 {
		animation: fadeIn 1s ease-in-out;
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
