<template>
    <div>
        <input type="search" name="" id="" @input="onInput">
    </div>
</template>          

<script>
    export default {
        name: "SearchBar",
        methods: {
            // onInput: event => console.log(event.target.value)
            //creating a custom event via $emit keyword
            //event name has to be as sugestive as possible
            //
            onInput: event => this.$emit("valChanged", event.target.value)
        }
    }
</script>

<style>

</style>

