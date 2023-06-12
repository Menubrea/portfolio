<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button {type} class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary">
	<slot />
</button>

<style>
	button {
		padding: 3px 1.5em;
		border: 0.5px solid rgba(0, 0, 0, 0.157);
		position: relative;
	}

	button::before,
	button::after {
		content: '[';
		left: 0.5rem;
		width: fit-content;
		position: absolute;
		transform: translateX(-30%);
	}

	button::after {
		left: auto;
		right: 0.5rem;
		content: ']';
		transform: translateX(30%);
	}

	button:hover::before {
		animation: moveLeft 0.5s ease-in-out infinite alternate;
	}

	button:hover::after {
		animation: moveRight 0.5s ease-in-out infinite alternate;
	}

	@keyframes moveLeft {
		0% {
			transform: translateX(-30%) scale(1);
		}
		100% {
			transform: translateX(0) scale(1.1);
		}
	}

	@keyframes moveRight {
		0% {
			transform: translateX(30%) scale(1);
		}
		100% {
			transform: translateX(0) scale(1.1);
		}
	}
</style>
