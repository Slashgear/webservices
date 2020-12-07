<template>
  <div class="debugger">
    <h3>POST http://localhost:1234/rpc</h3>
    <pre
      class="language-js"
      v-html="JSON.stringify({ method, params, id }, null, 2)"
    />
    <button type="button" @click="send">Lancer la requête</button>
    <pre v-if="result" v-html="JSON.stringify(result, null, 2)"></pre>
  </div>
</template>

<script>
export default {
  props: ["method", "params", "id"],
  data: () => ({
    result: null
  }),
  methods: {
    send() {
      return fetch("http://localhost:1234/rpc", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: this.method,
          params: this.params,
          id: this.id
        })
      })
        .then(res => res.json())
        .then(data => {
          this.result = data;
        })
        .catch(error => {
          this.result = error;
        });
    }
  }
};
</script>

<style>
.debugger {
  color: white;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  background-color: #444;
}

.debugger textarea {
  width: 100%;
  border-radius: 8px;
  height: auto;
}

.debugger button {
  color: white;
  background-color: dodgerblue;
  font-size: 24px;
  border-radius: 8px;
}
</style>
