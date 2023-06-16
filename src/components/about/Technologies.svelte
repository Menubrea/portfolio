<script lang="ts">
	import { technologiesData } from '../../constants/technologies';
	import type { technologies } from '../../constants/technologies';
	let technologies: technologies[] = technologiesData;
</script>

<ul class="flex flex-wrap gap-1 mt-2">
	{#each technologies as tech}
		<li
			class=" bg-gradient-to-br from-gray-600 to-zinc-800 bg-clip-text text-transparent box-decoration-clone"
		>
			<i class={tech.icon} />
			<p>{tech.tech}</p>
		</li>
	{/each}
</ul>

<style>
	li {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.2rem;
		padding: 0 0.2rem;
	}
	i,
	p {
		font-size: 0.8rem;
	}
</style>
