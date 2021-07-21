<template>
    <div class='edit-form'>
        <label>Name</label>
        <input type="text" v-model="form.name"/>

        <label>E-mail</label>
        <input type="text" v-model="form.email"/>

        <label>Ocupation</label>
        <input type="text" v-model="form.occupation"/>

         <label>Bio</label>
        <input type="text" v-model="form.bio"/>

        <button v-on:click="renameUsers()">Submit</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            form: {
                name: '',
                email: '',
                occupation: '',
                bio: ''
            }
        }
    },
    computed: {
        ...mapState(['users'])
    },
    created() {
        this.$store.dispatch('getUsers')
    },
    methods: {
        renameUsers(id, index) {
            let newName = this.form.name
            let newBio = this.form.bio
            let newEmail = this.form.email
            let newOccupation = this.form.occupation
            let users = { newName, id, index, newBio,newEmail, newOccupation  }
            this.$store.dispatch('renameUsers', users)
            this.rename = ''
            this.bio = ''
            this.email = ''
            this.occupation = ''
        }
    }
}

</script>