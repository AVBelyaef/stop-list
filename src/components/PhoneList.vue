<template>
    <div>
        <div class="title">
            <span>Телефон</span>
            <span>Дейтсвия</span>
        </div>
        <hr>
        <Loader v-if="loading"/>
        <ul v-else-if="phones.length">
            <PhoneItem
                    v-for="phone of resultSearch"
                    :phone="phone"
                    :key="phone.id"
                    @remove-phone="removePhone"
                    v-if="phones.length"
            />
        </ul>
        <p v-else>Добавьте телефон!</p>
            <Paginate
                    v-model="page"
                    :page-count="pageCount"
                    :click-handler="pageChangeHandler"
                    :prev-text="'Назад'"
                    :next-text="'Вперёд'"
                    :container-class="'pagination'"
                    :page-class="'waves-effect'"
            />
    </div>
</template>

<script>
  import PhoneItem from './PhoneItem';
  import _ from 'lodash';

  export default {
    name: 'PhoneList',
    data: () => ({
      loading: true,
      phones: [],
      page: 1,
      pageSize: 25,
      pageCount: 0,
      allItems: [],
      items: [],
    }),
    components: { PhoneItem },
    async mounted() {
      try {
        const result = await this.$store.dispatch('getPhones');
        this.phones = result || [];
        this.page = + this.$route.query.page || 1
        this.loading = false;
      } catch (e) {
        console.log(e.message);
      }
    },
    methods: {
      async removePhone(id) {
        try {
          this.loading = true;
          await this.$store.dispatch('removePhone', id);
          this.phones = await this.$store.dispatch('getPhones') || [];
          this.loading = false;
        } catch (error) {
          throw error;
        }
      },
      async pageChangeHandler(page) {
        await this.$router.push(`${this.$route.path}?page=${page}`);
        this.page = +(this.$route.query.page);
        this.items = this.allItems[page - 1] || this.allItems[0];
      },
      setupPagination(allItems) {
        this.allItems = _.chunk(allItems, this.pageSize);
        this.pageCount = _.size(this.allItems);
        this.items = this.allItems[this.page - 1] || this.allItems[0];
      },
    },
    computed: {
      resultSearch() {
        if (!this.$store.state.phones.search) {
          this.setupPagination(this.phones)
          return this.items;
        } else {
          return this.phones.filter((item) => {
            return item.phone.indexOf(this.$store.state.phones.search) > - 1;
          });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        &.pagination {
            float: right;
            padding: 10px 0;
         }
    }

    hr {
        margin: 0;
    }

    .title {
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
    }
</style>
