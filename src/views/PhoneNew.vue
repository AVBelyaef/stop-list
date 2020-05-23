<template>
    <div>
        <form class="col s12"  @submit.prevent="submitHandler">
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
                <div class="col s2 ">
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
    name: 'PhoneNew',
    data: () => ({
      phone: '',
    }),
    methods: {
      async submitHandler() {
        try {
          if(this.phone) {
            await this.$store.dispatch('createPhone', {
              date: new Date().toString(),
              phone: this.phone,
            });
            await this.$router.push('/phones');
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
</script>

