<script>
	import { Button } from '../../components/ui';
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
		action="/success"
	>
		<input type="hidden" name="form-name" value="contactMe" />
		<h1 class="h2 text-center mb-2">Contact</h1>
		<p class="mb-4 text-center variant-ghost-tertiary p-3 rounded">
			Leave me a message and I'll get back to you as soon as possible. It's important you provide a
			valid email, as I'll use that to contact you back.
		</p>
		<div class="flex gap-1">
			<label class="label">
				<span>Email</span>
				<input
					class="input"
					type="email"
					required
					title="Please provide your email so I can contact you back"
					name="email"
					placeholder="Your email"
				/>
			</label>
			<label class="label">
				<span>Subject</span>
				<input
					class="input"
					name="subject"
					required
					title="What is your inquiry?"
					type="text"
					placeholder="Subject"
				/>
			</label>
		</div>
		<label class="label mt-3">
			<span>Your Message</span>
			<textarea
				class="textarea"
				name="message"
				title="The content of your message"
				required
				rows="4"
				placeholder="Your message.."
			/>
		</label>
		<div class="mx-auto w-fit mt-5">
			<Button type="submit">Send</Button>
		</div>
	</form>
</div>

<style>
	form {
		box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
		background-image: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.1) 0%,
			rgba(255, 255, 255, 0.1) 50%,
			rgba(255, 255, 255, 0.05) 50%,
			rgba(255, 255, 255, 0.05) 100%
		);
	}

	input,
	textarea {
		border: 1px solid rgba(0, 0, 0, 0.1);
	}
</style>
