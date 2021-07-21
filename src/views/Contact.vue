<template>
  	<div id="contact-form" class="contact-form" >
		<h1 class="contact-form_title">Contact Us</h1>
		<div class="separator"></div>
		<div v-if="isSending" class="loading">Sending...</div>
		<form class="form">
			<input 
				required name="name" 
				v-model='contact.name' 
				placeholder="Name" 
				type="text" 
				autocomplete="on"
			>
			<input 
				required name="email"
				v-model="contact.email" 
				placeholder="E-mail" 
				type="email" 
				autocomplete="off"
			>
			<textarea 
				name="message" 
				v-model="contact.message" 
				rows="4" 
				placeholder="Message">
			</textarea>
		   <button 
		   		class="button" 
			    @submit="onSubmit">
				Send
			</button>
		</form>
  	</div>
	  <Edit/>
</template>

<script>
import Edit from  '../components/Edit.vue'
export default {
  name: 'Contact',
  components: {
	  Edit
  },
  	data() {
		return{
			contact: {
				name: '',
				email: '',
				message: '',
			},
			isSending: false,
		}
	},
	methods: {		
		onSubmit(evt) {
			evt.preventDefault();
			this.isSending = true;
    	},
  	}
}
</script>

<style scoped>
.contact-form {
	margin-top: 350px;
	margin-bottom: 50px;
	margin-left: 800px;
	max-width: 1000px;
	width: 100%;
}
.contact-form .separator {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
}
.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 30px;
}
.contact-form_title {
	color: rgb(12, 12, 12);
	text-align: center;
	font-size: 50px;
}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	padding: 50px 50px;
	margin-bottom: 15px;
	outline: none;
}
.contact-form textarea {
	resize: none;
}
.contact-form .button {
	background: #CB4B44;
	border: solid 1px #CB4B44;
	color: rgb(3, 3, 3);
	cursor: pointer;
	padding: 20px 50px;
	text-align: center;
	font-weight: bold;
	font-size: 30px;
	text-transform: uppercase;
}
.contact-form .button:hover {
	background: #C4C4C4;
	border: solid 1px #C4C4C4;
}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 20px;
	border-radius: 3px
}
</style>