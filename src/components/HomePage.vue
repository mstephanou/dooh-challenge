<template>
  <div class="container-fluid m-0 p-0">
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  v-for="item in data" :key="item.assets">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{item.generator}}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">{{item.title}}</a></li>
            <li><a class="dropdown-item" href="#">{{item.assets}}</a></li>
            <li><a class="dropdown-item" href="#">{{item.dropdown}}</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div id="home-page" class="full-height p-4">   
     <div class="container pt-3">
      <div class="row pb-5">
        <div class="col-lg-4 my-auto pt-4">
          <div class="border p-3 pt-3 p-md-5 bg-white rounded shadow"  v-for="item in data" :key="item.config">
            <h2>{{item.title}}</h2>
            <h3 class="display">{{item.screen}}</h3>
            <form>
              <div class="form-group">
                <label for="emailSignup">Sign-up now to grab your free coffee!</label>
                <input id="emailSignup" 
                       placeholder="Enter email"
                       class="form-control"
                >
                <small id="emailHelp" class="form-text text-muted"></small>
                <button type="submit" class="btn btn-success">Sign-up here</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import jsonData from '../../data/db.json'


export default {
  data(){
    //JAVASCRIPT GOES HERE
    return{
      data: jsonData,
      
    }
  }

}
</script>

<style scoped>
/* .container-fluid{
    background-color: #332403;
} */

#home-page {
  background: url('../assets/morning.png') no-repeat center center;
}



</style>