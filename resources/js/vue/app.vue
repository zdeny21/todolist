<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo list</h2>
            <add-item-form
                v-on:reloadlist="getList()"
            />
        </div>
        <list-view
            :items ="items"
            v-on:reloadlist="getList()"
        />
    </div>
</template>

<script>
import AddItemForm from "./addItemForm";
import ListView from "./listView";

export default {
name: "app",
    components: {ListView, AddItemForm},
    data: function () {
        return {
            items: []
        }
    },
    methods: {
        getList() {
            axios.get('api/items').then( response => {

                this.items = response.data;

            })
                .catch( error => {
                console.log( error );
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}
#title {
    text-align: center;
    background: #e6e6e6;
}
.heading {
    background: white;
    padding: 10px;
}
</style>
