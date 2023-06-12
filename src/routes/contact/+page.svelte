<script>
	import { Button } from '../../components/ui';
</script>

<div class="h-full flex items-center justify-center">
	<form class="card p-5 rounded" name="contact" method="POST" data-netlify="true">
		<h1 class="h2 text-center my-5">Contact</h1>
		<input type="hidden" name="form-name" value="contact" />
		<div class="flex gap-1">
			<label class="label">
				<span>Email</span>
				<input class="input" type="email" name="email" placeholder="Your email" />
			</label>
			<label class="label">
				<span>Subject</span>
				<input class="input" name="subject" type="text" placeholder="Subject" />
			</label>
		</div>
		<label class="label mt-3">
			<span>Your Message</span>
			<textarea class="textarea" name="message" rows="4" placeholder="Your message.." />
		</label>
		<div class="mx-auto w-fit mt-5">
			<button class="btn btn-primary" type="submit"> Send </button>
		</div>
	</form>
</div>

<style>
	form {
		box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	}

	input,
	textarea {
		border: 1px solid rgba(0, 0, 0, 0.1);
	}
</style>
