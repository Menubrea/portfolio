<script lang="ts">
	import { Development, Profile } from '../../components/about';
</script>

<div class="flex flex-col h-full items-center justify-center relative overflow-hidden">
	<Profile />
	<Development />
</div>

<style>
	div {
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
