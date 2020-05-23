<template>
    <div >
        <Loader v-if="loading" />
        <form v-else class="col s12"  @submit.prevent="submitHandler">
            <div class="row" style="display: flex; align-items: center">
                <div class="input-field col s10">
                    <input
                        id="icon_prefix"
                        type="text"
                        class="validate"
                        v-model.trim="phone"
                        autofocus
                    >
                </div>
                <div class="col s2">
                    <button class="waves-effect btn-floating btn-small pulse" type="submit">
                        <i class="material-icons ">check</i>
                    </button>
                </div>
            </div>
        </form>
        <router-link
            :to="'/phones'"
            class="waves-effect waves-light btn"
        >Назад
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'PhoneUpdate',
    data: () => ({
      phone: '',
      loading: true,
    }),
    async mounted() {
      const id = this.$route.params.id;
      const data = await this.$store.dispatch('getPhoneById', id);
      this.phone = data.phone;
      this.loading = false;
    },
    methods:{
      async submitHandler() {
        try {
          const id = this.$route.params.id;
          const formData = {
            phone: this.phone,
            id,
          }
          await this.$store.dispatch('updatePhone', formData)
          await this.$router.push('/phones');
        } catch (e) {
          console.log(e.message);
        }

      }
    }
  };
</script>

