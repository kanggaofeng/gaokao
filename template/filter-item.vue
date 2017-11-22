<template>
    <span class="filter-item" @click="toggle" :class="{selected:rangeObject.selected}">{{rangeObject.value}}</span>
</template>

<script>
    export default {
        props:['index','range-object','catagory'],
        methods: {
         
            toggle: function () {
                if(this.catagory == "高校层次"){
                  //  alert(6666)
                    this.$store.commit('reset_school_range',{
                        index:this.index,
                        selected: !this.rangeObject.selected
                    })
                    console.log(this.rangeObject.selected)
                }
                if(this.catagory == "高校地区"){
                    this.$store.commit('reset_school_area',{
                        index:this.index,
                        selected:!this.rangeObject.selected
                    })
                }
            }
        },
    }
</script>

<style>
    .right-area .selected {
         background: rgba(0, 160, 92, 1);
         color:#fff;
    }
</style>
