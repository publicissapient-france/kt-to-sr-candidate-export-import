<template>
  <section class="one-by-one">
    <h1>Import Candidate from KinTribe to SmartRecruiters</h1>
    <div class="one-by-one__body">
      <input v-model="candidateId" @keyup.enter="importCandidate()" class="one-by-one__input" type="text"/>
      <div @click="importCandidate()" class="one-by-one__cta">Import candidate 💥</div>
    </div>
    <ul class="one-by-one__loading" v-if="loading">
      <li>Kt profile export...</li>
      <li>Kt experience transform...</li>
      <li>Kt education transform...</li>
      <li>Kt history transform...</li>
      <li>Kt tags transform...</li>
      <li>Kt status transform...</li>
      <li>Sr import...</li>
    </ul>
    <div class="one-by-one__result">
      <div class="one-by-one__result--success" v-if="success">
        🎉 Great! Candidate imported, check SmartRecruiters.
        <pre>
          {{success}}
        </pre>
      </div>
      <div class="one-by-one__result--error" v-if="error">
        😱 An error occurred, contact Gerome or Benjamin with candidate id and time.
        <pre class="one-by-one__result--logs">{{error}}</pre>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        success: null,
        error: null,
        loading: false,
        candidateId: "",
      };
    },
    methods: {
      async importCandidate() {
        try {
          this.loading = true;
          const res = await axios.post(`${process.env.VUE_APP_ENDPOINT}/ktToSr`, {ktCandidateId: this.candidateId});
          this.success = res.body;
          this.error = null;
        } catch (e) {
          this.success = null;
          this.error = e.response.data;
        } finally {
          this.loading = false;
        }
      }
    },
  }
</script>

<style scoped>
  .one-by-one {
    width: 100%;
    background-color: #F1F1F1;
    max-width: 700px;
    margin: auto;
    height: 100vh;
    padding: 10px;
  }

  .one-by-one__loading {
    background-color: #B4B4B4;
    padding: 10px;
    list-style: none;
    color: #FFFFFF;
  }

  .one-by-one__body {
    display: flex;
    margin: 30px 0;
  }

  .one-by-one__input {
    width: 200px;
    padding: 5px;
    font-size: 14px;
  }

  .one-by-one__input:focus {
    outline: 0;
  }

  .one-by-one__cta {
    background-color: #079FFF;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
    opacity: .6;
    color: #FFFFFF;
  }

  .one-by-one__cta:hover {
    opacity: 1;
  }

  .one-by-one__result--success {
    background-color: #00E6C3;
    color: #FFFFFF;
    padding: 10px;
    margin: 10px 0;
    width: fit-content;
  }

  .one-by-one__result--error {
    background-color: #FE414D;
    color: #FFFFFF;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    width: 97%;
    overflow: scroll;
  }

  .one-by-one__result--logs {
    width: 100%;
  }
</style>
