<template>
  <div class="layout">
    <v-app-bar color="primary" dark>
      <v-toolbar-title>47hats 2019</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >{{ link.label }}</v-btn>
    </v-app-bar>
    <nuxt class="nuxt-content"/>
    <Footer/>
  </div>
</template>
<script>
  import Footer from '~/components/Sections/Footer'

  export default {
    data() {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Login",
          url: "/login"
        },
        {
          label: "Dashboard",
          url: "/dashboard"
        }
      ]
    };
  },
    components: {
      Footer
    }
  }
</script>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nuxt-content {
  flex-grow: 1;
}
</style>
