<template>
  <div>
    <p>FullName: {{fullName}}</p>
    <p>
      FirstName:
      <input type="text" v-model="firstName" />
    </p>

    <!-- 分割线 -->
    <p>obj.a: {{obj.a}}</p>
    <p>
      obj.a:
      <input type="text" v-model="obj.a" />
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "yuan",
      lastName: "yue",
      fullName: "",
      obj: {
        a: 123
      }
    };
  },
  watch: {
    //最初绑定的时候是不会执行的，要等到 firstName 改变时才执行监听计算
    // firstName(newName, oldName) {
    //   this.fullName = newName + "" + this.lastName;
    // }
    firstName: {
      handler(newName, oldName) {
        console.log("firstName changed");
        this.fullName = newName + "" + this.lastName;
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    },
    obj: {
      // handler(newVal, oldVal) {
      //   this.fullName = newVal.a + "" + this.lastName;
      //   console.log("obj.a changed");
      // },
      // immediate: true,
      // deep: true
    }

    // "obj.a": {
    //   handler(newVal, oldVal) {
    //     console.log("obj.a changed");
    //   },
    //   immediate: true
    // }
  }
};
</script>