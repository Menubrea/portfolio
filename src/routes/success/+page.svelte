<div class="h-full flex items-center justify-center">
	<section class="card p-5 max-w-sm">
		<h1
			class="h4 bg-gradient-to-br from-pink-300 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
		>
			Message successfully sent!
		</h1>
		<p class="mb-4">
			I check my email daily, and will do my best to get back to you in a timely fashion.
		</p>
		<a href="/"><i aria-hidden="true" class="fa-solid fa-arrow-left mr-2" />Go back</a>
	</section>
</div>

<style>
	.card {
		background: linear-gradient(90deg, rgb(255, 243, 243) 0%, rgb(255, 253, 251));
		box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
		animation: fade 1s ease-in-out;
		opacity: 0;
		animation-fill-mode: forwards;
	}

	a {
		text-decoration: underline;
		margin-top: 1rem;
		font-weight: 700;
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
