<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let btnSize: 'btn-sm' | 'btn-md' | 'btn-lg' = 'btn-sm';
</script>

<button {type} class="btn {btnSize}">
	<slot />
</button>

<style>
	button {
		padding: 3px 1.5em;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
		position: relative;
	}

	button::before,
	button::after {
		content: '{';
		left: 0.5rem;
		width: fit-content;
		position: absolute;
		transform: translateX(-30%);
	}

	button::after {
		left: auto;
		right: 0.5rem;
		content: '}';
		transform: translateX(30%);
	}

	button:hover::before {
		animation: moveLeft 1s ease-in-out infinite alternate;
	}

	button:hover::after {
		animation: moveRight 1s ease-in-out infinite alternate;
	}

	@keyframes moveLeft {
		0% {
			transform: translateX(-30%);
		}
		100% {
			transform: translateX(20%);
		}
	}

	@keyframes moveRight {
		0% {
			transform: translateX(30%);
		}
		100% {
			transform: translateX(-20%);
		}
	}
</style>
