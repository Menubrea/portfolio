<script>
	import { ButtonNav } from '../components/ui';
	import { Sky } from '../components/enhancers';
</script>

<div class="flex h-full items-center justify-center relative overflow-hidden">
	<Sky />
	<div class="p-2 welcomeMessage">
		<!-- <p class="h1">Hello</p> -->
		<h1 class="h1">Truls Haakenstad | Menubrea</h1>
		<blockquote class="blockquote">
			Frontend Developer, UI/UX Designer, and aspiring Fullstack Developer.
		</blockquote>
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
	}

	.welcomeMessage > p {
		animation: slideIn 0.5s ease-in-out;
	}

	.welcomeMessage > h1 {
		animation: slideRight 0.6s ease-in-out;
	}

	.welcomeMessage > blockquote {
		animation: slideRight 1s ease-in-out;
	}

	@keyframes slideRight {
		from {
			transform: translateX(-100%);
			opacity: 0;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes slideIn {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
