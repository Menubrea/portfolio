<script lang="ts">
	import type { devProcess } from '../../constants/devProcess';
	import { devProcessData, describeProcess } from '../../constants/devProcess';
	let devProcess: devProcess[] = devProcessData;
</script>

<section class="my-4">
	<div class="container p-4">
		<h2 class="h3 text-center">My development process</h2>
		<p class="mx-auto max-w-3xl text-center">
			{describeProcess}
		</p>
	</div>
	<div class="lg:flex flex-wrap gap-2 container">
		{#each devProcess as process}
			<div class="p-5 w-full grow basis-1/4 devProcess">
				<h3
					class="h4 bg-gradient-to-br from-pink-300 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
				>
					<span aria-hidden="true" class="mr-2">0{process.id.toString()}</span>
					<span><i aria-hidden="true" class={process.icon} /></span>
					{process.title}
				</h3>
				<p>{process.description}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.devProcess {
		background-color: rgba(255, 255, 255, 0.2);
		border: 0.5px solid rgba(0, 0, 0, 0.089);
	}
</style>
