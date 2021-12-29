<script lang="ts">
	import { onMount } from 'svelte';

	// types
	import { Game } from '../classes'

	export let height;
	export let width;

	let canvas;
	let ctx;
	let game: Game;

	onMount(() => {
		if (!canvas) {
			return;
		}

		canvas.height = height;
		canvas.width = width;

		ctx = canvas.getContext('2d')

		game = new Game(ctx, width, height)
	})
</script>	

<canvas bind:this={canvas} { height } { width }></canvas>
<button onClick={game && game.begin()}>
	
</button>

<style>
	canvas {
		border: solid 1px black;
	}
</style>
