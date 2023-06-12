<script>
	import { ButtonNav } from '../components/ui';
</script>

<div class="flex h-full items-center justify-center relative overflow-hidden">
	<div class="p-2 welcomeMessage">
		<h1 class="h1">
			Truls Haakenstad | <span
				class="bg-gradient-to-br from-emerald-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
				><i class="fa fa-github" aria-hidden="true" />
				Menubrea</span
			>
		</h1>
		<p class="text-2xl mt-2">
			Frontend Developer, UI/UX Designer, and aspiring Fullstack Developer.
		</p>
		<div class="mt-5">
			<ButtonNav />
		</div>
	</div>
</div>

<style>
	.welcomeMessage {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 1;
		opacity: 0;
		animation: fade 1s ease-in-out;
		animation-fill-mode: forwards;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
