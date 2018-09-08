<template>
  <main>

    <h1>{{ msg }}</h1>
    <h2>{{ results.result }}</h2>

    <div v-if="results.result === 'YES'">
      <p>The Saints beat {{ results.opponent_name }} <br>
        {{ results.saints_score }} to {{ results.opponent_score }}
      </p>
    </div>

    <div v-else-if="results.result === 'NO'">
      <p>The Saints lost to {{ results.opponent }} <br>
        {{ results.saints_score }} to {{ results.opponent_score }}
      </p>
    </div>

  </main>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'SaintsWin',
    data () {
      return {
        msg: 'Did the saints win?',
        results: {}
      }
    },
    created() {
      let self = this;
      const url = 'https://didthesaintswin-staging.herokuapp.com/result.json';
      axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }).then(function (res) {
        self.results = res.data;
      }).catch(function (error) {
        console.log('err', error);
      });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
