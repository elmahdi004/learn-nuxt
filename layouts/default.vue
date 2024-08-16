<template lang="">
  <div>
    <nav>
        <ul>
            <li>
                <nuxt-link to="/home">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/elmahdi">El mahdi</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">Main</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name:'products'}">Products</nuxt-link>
            </li>
        </ul>
    </nav>
    <slot />
    <footer></footer>
  </div>
</template>
<script></script>
<style>
.router-link-active {
  color: black; /* Change this to your desired active color */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
    text-decoration: none;
    color: white;
}
nav {
  background-color: red;
  padding: 20px;
}
footer {
  background-color: green;
  padding: 20px;
}
ul{
    display: flex;
}
li{
    list-style: none;
    margin: 0 30px;
}
</style>
