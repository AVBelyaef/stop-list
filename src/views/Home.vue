<template>
    <div >
        <div class="row">
            <div class=" col s12 " >
                <Search/>
                <router-link
                    :to="'phones/new'"
                    class="waves-effect waves-light btn col offset-s2 offset-m4 "
                    style="margin-top: -30px"
                >Добавить
                </router-link>
             </div>
        </div>
        <PhoneList/>
    </div>
</template>

<script>
  import Search from '../components/Search';
  import PhoneList from '../components/PhoneList';

  export default {
    name: 'Home',
    data: () => ({
      loading: true,
      phones: [],
    }),

    components: {
      PhoneList,
      Search,
    },
  };
</script>

