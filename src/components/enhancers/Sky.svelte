<div class="sky" />
<div class="sky-2" />

<style>
	.sky,
	.sky-2 {
		position: absolute;
		height: 200%;
		width: 200%;
		background-image: url(./src/assets/sky.svg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 0;
		animation: expand 60s ease-in-out infinite alternate;
	}

	.sky-2 {
		background-position: 100% 100%;
		animation: expandLeft 40s ease-in-out infinite alternate;
		opacity: 0.5;
	}

	@keyframes expand {
		from {
			transform: translateY(50%) scale(1) translateX(20%);
		}

		to {
			transform: translateY(0) scale(1.1) translateX(-20%);
		}
	}

	@keyframes expandLeft {
		from {
			transform: scale(1) translateX(-50%);
		}
		to {
			transform: scale(1.1) translateX(0%);
		}
	}
</style>
