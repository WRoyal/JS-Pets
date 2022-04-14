<script>
import axios from 'axios';
export default {
	name: "Person",
	data() {
		return {
			personInfo: [],
			job: null,
			errors: [],
			getAge(date) {
				return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
			},
		};
	},
	async created(){
		let response = await axios.get("https://random-data-api.com/api/users/random_user");
		this.personInfo = await response.data;
		this.job = await response.data.employment.title;
		// console.log(this.personInfo.avatar)
	}
}
// ageFunc.getAge()  personInfo.date_of_birth

</script>
 <!-- v-for="value in personInfo" :key="value.personInfo" -->
<template>
	<div class="main">
		<div class="person-block">
			<div class="person-main">
				<img :src="`${personInfo.avatar}`" alt="Person-avatar" class="image">
				<div class="text-block">
					<div class="first-line">
						<p class="person-name">{{ personInfo.first_name }} {{ personInfo.last_name }}</p>
						<p>{{ getAge(personInfo.date_of_birth) }}</p>
					</div>
					<div class="second-line">
						<p>{{ job }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
</style>