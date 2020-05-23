<template>
    <li>
        <span>
            {{ phone.phone }}
        </span>
        <div>
            <router-link
                :to="`/phones/${phone.id}/edit`"
                style="margin-right: 10px;"
                class="waves-effect btn-floating btn-small"
            >
                <i class="material-icons ">edit</i>
            </router-link>
            <button
                class="waves-effect red btn-floating btn-small"
                @click.prevent="$emit('remove-phone', phone.id)"
            >
                <i class="material-icons ">delete</i>
            </button>
        </div>
    </li>
</template>

<script>
  export default {
    name: 'PhoneItem',
    props: {
      phone: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
    li {
        border-bottom: 1px solid #ccc;
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
