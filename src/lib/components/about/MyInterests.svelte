<script lang="ts">
	import { interestsData } from '../../constants/interests';
	import type { Interests } from '../../constants/interests';
	let myInterests: Interests[] = interestsData;
</script>

<div class="mt-4 md:mt-0">
	<h2 class="h4">Interested in</h2>
	<ul class="flex flex-wrap gap-1">
		{#each myInterests as obj}
			<li class="badge bg-tertiary-100">
				{obj.interest}
			</li>
		{/each}
	</ul>
</div>

<style>
	li {
		font-weight: 500;
	}
</style>
