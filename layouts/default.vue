<template lang="">
  <div>
    <nav></nav>
    <slot />
    <footer></footer>
  </div>
</template>
<script></script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav {
  background-color: red;
  padding: 20px;
}
footer {
  background-color: green;
  padding: 20px;
}
</style>
