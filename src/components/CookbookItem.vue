<template>
  <div class="el-container">
    <div v-if="isEdit" class="edit-form">
      <div class="form-control left">
        <input type="text" id="name" v-model.trim="name">
      </div>
      <div class="form-control left">
        <textarea rows="10" cols="110" type="text" id="description" v-model.trim="description"></textarea>
      </div>
    </div>
    <div v-else class="content">
      <div class="header">
        <h2>{{ element.name }}</h2>
        <span class="datetime">{{ element.created_at }}</span>
      </div>

      <hr>
      <div>{{ element.description }}</div>
    </div>
    <div class="nav">
      <button v-show="!isEdit" @click="toggleEditForm(!isEdit)">Edit</button>
      <button v-show="isEdit" @click="editItem">Save</button>
      <button @click="deleteItem" :disabled="isEdit">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isEdit: false,
      name: this.element.name || "",
      description: this.element.description || ""
    };
  },

  methods: {
    toggleEditForm(value) {
      this.isEdit = value;
    },

    editItem() {
      if (!this.name || !this.description) {
        return;
      }

      this.toggleEditForm(false);

      const data = {
        id: this.element.id,
        name: this.name,
        description: this.description
      };

      this.$store.dispatch("recipes/editItem", data);
    },

    deleteItem() {
      this.$store.dispatch("recipes/deleteItem", this.element.id);
    }
  }
};
</script>

<style scoped>
.el-container {
  flex-grow: 1;
  margin: 1%;
  padding: 25px;
  text-align: center;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 10px 20px;
}

.nav {
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.nav button {
  padding: 5px 15px;
  margin-right: 5px;
}

.datetime { text-align: right}
.header {
  display: flex;
  justify-content: space-between;
}

.left {
  text-align: left;
}
</style>
