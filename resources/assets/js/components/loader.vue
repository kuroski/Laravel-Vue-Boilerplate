<style lang="less">
#loader {
    z-index: 9999;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #323232;
    color: #FFF;
    padding: 0.5em;
    border-radius: 0px 0px 0 5px;
    opacity: 0.7;

    transition: opacity .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out;

    img {
        margin-right: 0.5em;
    }
}
</style>

<template>
    <div id="loader" v-if="isLoading">
        <img src="./assets/svg-loaders/puff.svg" />
        Loading...
    </div> 
</template> 


<script>
module.exports = {
      data: function() {
        return {
            isLoading: false
        };
    },

    ready: function() {
    },

    events: {
        'loading:show': function () {
            this.isLoading = true;
        },

        'loading:hide': function() {
            this.isLoading = false;
        }
    }
}
</script>