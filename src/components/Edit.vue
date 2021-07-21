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

        <button class="edit-button" v-on:click="renameUsers()">Submit</button>
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

<style scoped>
.edit-form{
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 50px;
    

}
.edit-button{
    margin-top: 30px;
    width: 100px;
    height: 50px;
    border-radius: 30px;
    font-size: 20px;
    border: 0;
    background-color: #FCB4AC;
    color: rgb(100, 99, 99);
    
}
.edit-button:hover{
    border: 2px solid #C4C4C4;
    background-color: #C4C4C4;
    color:black
}
input{
    width: 300px;
    height: 80px;
    background-color: #dbdbdb;
    border: 0;
    border-radius: 30px;
    font-size: 25px;
    padding: 20px;
    font-family: Rubik;
    color: rgb(48, 48, 48);
}
input:focus{
    outline:none
}
</style>