<script>
	import Header from '../lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Daily Activity</title>
	<meta name="description" content="Rekap Pinjaman" />
</svelte:head>

<main>
	<div class="mb-4">
		<Header />
	</div>
	<div class="mx-3">
		<slot />
	</div>
</main>
