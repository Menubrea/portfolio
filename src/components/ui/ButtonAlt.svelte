<button
	><span
		class="bg-gradient-to-br from-pink-400 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
		><slot /><i class="fa-solid fa-arrow-right ml-5" /></span
	></button
>

<style>
	button {
		position: relative;
		overflow: hidden;
		padding: 0.4em 1em;
		font-size: 1.2rem;
		border-radius: 0.3rem;
		font-family: anodyne, sans-serif;
		border: 1px solid rgb(32, 32, 32);
	}

	button i {
		transition: transform 0.6s ease-in-out;
	}

	button::before {
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: rgb(255, 240, 240);
		z-index: -1;
		transform: translateX(-90%);
		transition: transform 0.6s ease-in-out;
	}

	button:hover {
		box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
	}

	button:hover::before {
		transform: translateX(10%);
	}
</style>
