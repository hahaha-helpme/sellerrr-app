<script>
  export let data;
  const head = data?.page?.head ?? '';
  const body = data?.page?.body ?? '';
</script>

<svelte:head>
  {@html head}
</svelte:head>

{@html body}
