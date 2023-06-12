<script lang="ts">
	import { Techs, MyInterests, ProfileData } from '.';
</script>

<section class="container max-w-3xl md:my-5 card p-5 md:grid grid-cols-3 gap-2">
	<div class="col-span-2">
		<ProfileData />
		<Techs />
	</div>
	<MyInterests />
</section>
