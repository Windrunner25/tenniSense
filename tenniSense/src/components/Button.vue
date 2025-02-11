<template>
  <div
    style="
      display: flex;
      align-items: center;
      height: 500px;
      width: 500px;
      justify-content: center;
    "
  >
    <v-btn @click="increase">Rally Count</v-btn>
  </div>
</template>

<script>
import db from "../firebase/init.js";
import { collection, addDoc } from "firebase/firestore";

export default {
  methods: {
    async increase() {
      const colRef = collection(db, "count");
      const dataObj = {
        firstName: "John",
        lastName: "Smith",
        dob: "1999",
      };

      const docRef = await addDoc(colRef, dataObj);

      console.log("Document was created with ID:", docRef.id);
    },
  },
};
</script>
