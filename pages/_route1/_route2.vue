<template>
  <div>
    <dynamic :template="html" :data="propsData"></dynamic>
    <div>Route 1: {{route1}}</div>
    <div>Route 2: {{route2}}</div>
    <label for="">Change Value : <input type="text" v-model="myVal" /></label>
    <div>
      This is an ugly page, click
      <router-link :to="homePageUrl">here</router-link>
      <span> to go back to the homepage.</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { dynamic } from '../../utils/dynamic'

  export default {
    data: () => ({
      homePageUrl: '/',
      html: '<div></div>',
      myVal: null,
      route1: '',
      route2: ''
    }),
    created () {
      console.log(`This is the static route : ` + this.route1)
      console.log(`This is the page route : ` + this.route2)
    },
    asyncData ({ params, error }) {
      const { route1, route2 } = params
      const url = `https://apex.oracle.com/pls/apex/farzadapex/${route1}/getvuehtml/${route2}`
      return axios.get(url)
        .then((response) => {
          return {
            html: response.data.html,
            route1: params.route1,
            route2: params.route2
          }
        })
        .catch(() => {
          error({
            statusCode: 404,
            message: 'Post Not Found'
          })
        })
    },
    computed: {
      propsData () { return { myVal: this.myVal } }
    },
    components: {
      dynamic
    }
  }
</script>
