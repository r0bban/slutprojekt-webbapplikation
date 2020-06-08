<template>
  <article class="user-card">
    <div class="wrapper name">
      <p class="label name">Namn</p>
      <input class="data name" v-model="currentUser.name" type="text" :disabled="!isEditMode" />
    </div>
    <div class="wrapper email">
      <p class="label email">E-post</p>
      <input class="data email" v-model="currentUser.email" type="text" :disabled="!isEditMode" />
    </div>
    <div v-if="user.role == 'admin'" class="wrapper role">
      <p class="label">Roll</p>
      <input class="data role" v-model="currentUser.role" type="text" disabled />
    </div>
    <div v-if="currentUser.adress" class="wrapper address">
      <div v-if="currentUser.adress.street" class="wrapper street">
        <p class="label street">Gatuaddress</p>
        <input class="data street" v-model="currentUser.adress.street" type="text" :disabled="!isEditMode" />
      </div>
      <div v-if="currentUser.adress.zip" class="wrapper zip">
        <p class="label zip">Postkod</p>
        <input class="data zip" v-model="currentUser.adress.zip" type="number" :disabled="!isEditMode" />
      </div>
      <div v-if="currentUser.adress.city" class="wrapper city">
        <p class="label city">Stad</p>
        <input class="data city" v-model="currentUser.adress.city" type="text" :disabled="!isEditMode" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isEditMode: this.editMode,
      currentUser: this.user
    };
  },
  props: {
    user: Object,
    editMode: Boolean
  }
};
</script>


<style>
</style>