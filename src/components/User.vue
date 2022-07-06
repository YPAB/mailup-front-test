<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Buscar por nombre"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <h4>Usuarios</h4>

      <div class="row">
        <div class="col-sm-4 mb-3"
        :class="{ active: index == currentIndex }"
          v-for="(user, index) in users.data"
          :key="user.id"
          @click="setActiveTutorial(user, index)"
        >
          <div class="card">
            <div class="card-body">
              <img class="card-img-top" style="width: 12rem; height: 12rem;" :src="user.picture"  alt="Card image cap"/>
              <h5 class="card-title">{{ user.title }}</h5>
              <p class="card-text">{{ user.firstName }} {{ user.lastName }}</p>
              <router-link :to="'/users/profile/' + user.id" class="badge badge-warning">Perfíl <font-awesome-icon icon="fa-solid fa-angle-right" /></router-link>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import UsersDataService from "../services/UsersDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      users: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {
      UsersDataService.getAll()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(user, index) {
      this.currentTutorial = user;
      this.currentIndex = user ? index : -1;
    },
    
    searchTitle() {
      UsersDataService.findByTitle(this.title)
        .then(response => {
          this.users = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted(){ 
    this.retrieveTutorials();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>