<template>
  <div id="app">
    <div id="bg"></div>
    <div id="main">
        <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body, html {
  height: 100%;
}

#bg {
    position: absolute;
    background-image: url(assets/background_web.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    filter: blur(20px);
    -webkit-filter: blur(20px);
    @media (max-width: 1024px) {
        background-image: url(assets/background_mobile.png);
    }
}

#main {
    position: absolute;
    padding-top: 30px;
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        position: relative;
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
            color: #42b983;
            }
        }
    }
}
</style>
