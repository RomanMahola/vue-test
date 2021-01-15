<template>
  <div class="cookbook">
    <h1>{{ msg }}</h1>
    <div class="nav">
      <button>Add New</button>
    </div>
    <div class="list">
      <template v-for="element in recipes">
        <CookbookItem :key="element.id" :element="element" />
      </template>
    </div>
  </div>
</template>
<script>
import CookbookItem from "@/components/CookbookItem";
import { mapGetters } from 'vuex'

export default {
  name: "Cookbook",
  components: {CookbookItem},
  props: {
    msg: String
  },
  methods: {

  },
  computed: {
    recipes() {
      return this.$store.state.recipes.recipes
    },

    ...mapGetters([
        'sortedByName'
    ])
  },
  mounted() {
    this.$store.dispatch("recipes/getRecipes");
  },

}
</script>

<style scoped>
.list {
  max-width: 970px;
  display: inline-block;
}

.nav {
  max-width: 970px;
  padding-top: 20px;
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
}

.nav button {
  padding: 5px 15px;
  margin-right: 5px;
}
</style>