<script>
	// @ts-nocheck

	import { ButtonAlt } from '../../components/ui';
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact me" />
	<meta
		name="keywords"
		content="contact, email, message, Contact Truls Haakenstad, Contact Menubrea, Menubrea.dev"
	/>
</svelte:head>

<div class="h-full flex items-center justify-center">
	<form
		class="p-5 rounded max-w-lg"
		name="contactMe"
		method="POST"
		data-netlify="true"
		netlify-honeypot="bot-field"
		action="/success"
	>
		<input type="hidden" name="form-name" value="contactMe" />
		<h1
			class="h2 text-center mb-2 bg-gradient-to-br from-pink-300 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
		>
			Contact
		</h1>
		<p class="mb-4 text-center p-3 rounded">
			Send me a message and I'll get back to you as soon as possible. It's important you add a valid
			email to reach you, as I will use that to contact you back.
		</p>
		<p class="hidden">
			<label>
				Don’t fill this out if you’re human: <input name="bot-field" />
			</label>
		</p>
		<div class="flex gap-1">
			<label class="label">
				<span>Email</span>
				<input
					class="input w-full"
					type="email"
					required
					title="Please provide your email so I can contact you back"
					name="email"
					placeholder="Your email"
				/>
			</label>
			<label class="label">
				<span>Name</span>
				<input
					class="input w-full"
					name="name"
					required
					minlength="1"
					title="Please provide a name"
					type="text"
					placeholder="Your name"
				/>
			</label>
		</div>
		<label class="label mt-3">
			<span>Your Message</span>
			<textarea
				class="textarea"
				name="message"
				title="The content of your message"
				minlength="1"
				required
				rows="4"
				placeholder="Your message.."
			/>
		</label>
		<div class="mx-auto w-fit mt-5">
			<ButtonAlt type="submit">Send message</ButtonAlt>
		</div>
	</form>
</div>

<style>
	form {
		background: linear-gradient(90deg, rgb(255, 243, 243) 0%, rgb(255, 253, 251));
		box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
		animation: fade 1s ease-in-out;
		opacity: 0;
		animation-fill-mode: forwards;
	}

	input,
	textarea {
		border: 1px solid rgba(0, 0, 0, 0.1);
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
