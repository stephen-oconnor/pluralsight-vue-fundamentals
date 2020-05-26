<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }" exact>
              <img src="./assets/build-a-bot-logo.png" alt="Build a Bot!" class="logo" />
              Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Build' }" exact>
              Build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <!-- This is where the router will render the component(s) -->
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555555, #999999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  padding: 30px;
  background-color: #ffffff;
  width: 964px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: #ffffff;
}
.container {
  display: flex;
  justify-content: center;
  margin: 10px auto 0 auto;
}
.aside {
  padding: 30px;
  background-color: #aaaaaa;
  width: 100px;
  min-height: 300px;
}
</style>
