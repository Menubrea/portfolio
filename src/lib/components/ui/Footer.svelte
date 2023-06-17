<script lang="ts">
	type anchorList = {
		icon?: string;
		href: string;
		text: string;
	};

	let name: string;
	name = 'Menubrea';

	const links: anchorList[] = [
		{
			icon: 'devicon-svelte-plain',
			href: 'https://kit.svelte.dev',
			text: 'Svelte'
		},
		{
			icon: 'devicon-tailwindcss-plain',
			href: 'https://tailwindcss.com/',
			text: 'Tailwind CSS'
		},
		{
			icon: 'devicon-devicon-plain',
			href: 'https://www.skeleton.dev/',
			text: 'Skeleton UI'
		}
	];
</script>

<footer class="bg-surface-100">
	<div class="flex flex-col items-center justify-center text-center py-2">
		<div class="flex items-center gap-1">
			<span class="text-sm text-gray-600">&copy; 2023 by</span>
			<a href="https://menubrea.github" class="text-sm font-bold text-gray-800">{name}</a>
			<div class="hidden sm:flex gap-2 items-center">
				<span class="text-sm">| Built with love using:</span>
				{#each links as link}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-gray-800"
						><i class={link.icon} /><span class="ml-1">{link.text}</span></a
					>
				{/each}
			</div>
		</div>
	</div>
</footer>

<style>
	i {
		font-size: 0.8rem;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
