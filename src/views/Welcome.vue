<template>
  <div>Welcome!11</div>
</template>
<script>
import * as fs from "fs";
export default {
  name: "welcome",
  created() {
    axios
      .get("/api/v1/h5/salon/pageList")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>