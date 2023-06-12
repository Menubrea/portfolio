<script lang="ts">
	import { interestsData } from '../../constants/interests';
	import type { Interests } from '../../constants/interests';
	let myInterests: Interests[] = interestsData;
</script>

<div class="mt-4 md:mt-0">
	<h2 class="h4">Interested in</h2>
	<ul class="flex flex-wrap gap-1">
		{#each myInterests as obj}
			<li
				class="badge variant-ghost-primary bg-gradient-to-br from-gray-600 to-zinc-800 bg-clip-text text-transparent box-decoration-clone"
			>
				{obj.interest}
			</li>
		{/each}
	</ul>
</div>
