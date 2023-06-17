<script lang="ts">
	export let href: string;
</script>

<a {href} class="variant-ghost-secondary rounded-sm px-2 py-1 text-sm"
	><span aria-hidden class="mr-1">[</span><slot /><span aria-hidden class="ml-1">]</span></a
>

<style>
	a:hover {
		outline: 1px dashed black;
	}
</style>
