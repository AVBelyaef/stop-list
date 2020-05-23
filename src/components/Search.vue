<template>
        <div>
            <div class="input-field col s10 m6 ">
                <i class="material-icons prefix">search</i>
                <input
                        id="icon_prefix"
                        type="text"
                        class="validate"
                        v-model.trim="search"
                        @input="searchPhone"
                >
                <label for="icon_prefix">Искать</label>
            </div>
            <div class="col s2" style="margin-top: 22px;" >
                <button
                        class="waves-effect red btn-floating btn-small"
                        @click.prevent="clearSearch"
                >
                    <i class="material-icons " >clear</i>
                </button>
            </div>
        </div>
</template>

<script>
  export default {
    name: 'Search',
    data: () => ({
      search: '',
    }),
    methods: {
      searchPhone() {
        this.$store.dispatch('changeSearch', this.search);
      },
      clearSearch() {
        this.$store.dispatch('changeSearch', '');
        this.search = '';
      },
    }
  };
</script>
