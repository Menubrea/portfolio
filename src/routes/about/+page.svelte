<script lang="ts">
	import { Development, Profile } from '../../lib/components/about';
</script>

<div class="flex flex-col h-full items-center justify-center relative overflow-hidden">
	<Profile />
	<Development />
</div>

<style>
	div {
		animation: fadeIn 0.6s ease-in-out;
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
