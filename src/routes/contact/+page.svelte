<script lang="ts">
	import { ButtonAlt } from '../../lib/components/ui';

	let name: string | null = null;
	let email: string | null = null;
	let message: string | null = null;

	let formValidated: boolean = false;
	$: formValidated = !!name && !!email && !!message;

	interface ExtendedFormProps {
		'netlify-honeypot'?: string;
		'data-netlify'?: string;
	}

	export let customProps: ExtendedFormProps = {
		'netlify-honeypot': 'bot-field',
		'data-netlify': 'true'
	};
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact me" />
	<meta
		name="keywords"
		content="contact, email, message, Contact Truls Haakenstad, Contact Menubrea, Menubrea.dev"
	/>
</svelte:head>

<div class="h-full grid grid-cols-3 justify-center contact">
	<form
		{...customProps}
		class="p-5 max-w-lg col-span-3 md:col-span-2 mx-auto h-full flex flex-col justify-center"
		name="contactMe"
		method="POST"
		data-netlify="true"
		action="/success"
	>
		<input type="hidden" name="form-name" value="contactMe" />
		<h1
			class="h2 text-center mb-5 bg-gradient-to-br from-pink-500 to-pink-900 bg-clip-text text-transparent box-decoration-clone"
		>
			Get in touch
		</h1>
		<p class="mb-5 pb-5 max-w-sm mx-auto text-center">
			Send me a message and I'll get back to you as soon as possible. It's important you add a valid
			email to reach you, as I will use that to contact you back.
		</p>
		<div class="hidden">
			<label>
				Don’t fill this out if you’re human: <input name="bot-field" />
			</label>
		</div>
		<div class="flex gap-1 w-full">
			<label class="label w-full">
				<span>Email</span>
				<input
					bind:value={email}
					class="input"
					type="email"
					required
					title="Please provide your email so I can contact you back"
					name="email"
					placeholder="Your email"
				/>
			</label>
			<label class="label w-full">
				<span>Name</span>
				<input
					bind:value={name}
					class="input"
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
			<span>Message</span>
			<textarea
				bind:value={message}
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
			<ButtonAlt disabled={!formValidated} type="submit">Send message</ButtonAlt>
		</div>
	</form>
</div>

<style>
	form {
		inset: 0 auto;
		backdrop-filter: blur(20px);
		overflow: hidden;
	}

	form > h1 {
		animation: slideFromTop 0.5s ease-in-out;
		animation-fill-mode: forwards;
	}

	form > p {
		animation: slideFromLeft 0.7s ease-in-out;
		transform: translateX(-100%);
		animation-fill-mode: forwards;
	}

	.contact {
		background-image: url('https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjUwMS13YW4tNDAtaGFsZnRvbmViZ18xLmpwZw.jpg');
		background-size: cover;
		background-position: center;
	}

	input,
	textarea {
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	@keyframes slideFromTop {
		from {
			transform: translateY(-40%);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideFromLeft {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}
</style>
