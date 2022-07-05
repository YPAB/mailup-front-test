<template>

    
    <div v-if="currentProfile" class="container">
    <router-link to="/users" class="nav-link">
        <button type="button" class="btn btn-primary" style="float: right;">Volver</button>
    </router-link>
    <br/> <br/>
    <div class="card">
        <img class="card-img-top mb-2" style="width: 12rem; height: 12rem;" :src="currentProfile.picture" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Perfíl</h5>
            <div class="row">
                <div class="col-sm-6">
                    <h5 class="card-title">{{ currentProfile.title }}  {{ currentProfile.firstName }} {{ currentProfile.lastName }}</h5>
                     <ul class="list-group list-group-flush">
                        <li class="list-group-item">Fecha Nacimiento: {{ currentProfile.dateOfBirth }}</li>
                        <li class="list-group-item">Genero: {{ currentProfile.gender }}</li>
                        <li class="list-group-item">Email: {{ currentProfile.email }}</li>
                        <li class="list-group-item">Telefono: {{ currentProfile.phone }}</li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <h5 class="card-title"> Ubicación </h5>
                     <ul class="list-group list-group-flush">
                        <li class="list-group-item">Calle: {{ currentProfile.location.street }}</li>
                        <li class="list-group-item">Ciudad: {{ currentProfile.location.city }}</li>
                        <li class="list-group-item">Estado: {{ currentProfile.location.state }}</li>
                        <li class="list-group-item">País: {{ currentProfile.location.country }}</li>
                    </ul>
                </div>
            </div>
           
        </div>
    </div>
    
  </div>
  <div v-else>
    <br />
    <p>Cargando...</p>
  </div>
  
</template>
<script>
import UsersDataService from "../services/UsersDataService";
export default {
  name: "profile-show",
  data() {
    return {
      currentProfile: null,
      message: ''
    };
  },
  methods: {
    getProfile(id) {
      UsersDataService.get(id)
        .then(response => {
          this.currentProfile = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
  },
  mounted() {
    this.message = '';
    this.getProfile(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>