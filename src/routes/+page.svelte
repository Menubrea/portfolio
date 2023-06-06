<script>
	import { Sky } from '../components/enhancers';
	import { ButtonNav } from '../components/ui';
</script>

<div class=" flex justify-center items-center h-full relative overflow-hidden">
	<Sky />
	<div class="p-2 welcomeMessage">
		<p class="h1">Hello</p>
		<h1 class="h3">I am Truls Haakenstad | Menubrea</h1>
		<blockquote class="blockquote">
			Frontend Developer, UI/UX Designer, and aspiring Fullstack Developer.
		</blockquote>
		<ButtonNav />
	</div>
</div>

<style>
	.welcomeMessage {
		overflow: hidden;
		--width: 2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		backdrop-filter: blur(10px);
	}

	h1 {
		font-family: 'source-sans-pro', sans-serif;
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
