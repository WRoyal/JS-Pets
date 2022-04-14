<script>
import axios from 'axios';

export default {
	name: "Beer",
	data() {
		return {
			beerInfo: [],
			errors: [],
		};
	},
	async created(){
		axios.get("https://random-data-api.com/api/beer/random_beer")
			.then(response => {
				this.beerInfo = response.data;
			})
			.catch(e => {
				this.errors.push(e);
			})
	}
}
</script>
 <!-- v-for="value in beerInfo" :key="value.beerInfo"> -->
<template>
	<div class="api-beer-info">
		<p>
			{{ beerInfo }}
		</p>
	</div>
</template>

<style>
h1{
	font-size: 50px;
}
</style>