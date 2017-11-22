<template>
    <div class="school-area" style="clear:both">
        <div class="left-title">高校地区：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :range-object="value"></filter-item>
        </div>
        <div style="clear:both"></div> 
    </div>
</template>
<script>
    import filter_item from './filter-item.vue';
    export default {
        name:'school-area',
        props:['schoolAreaList'],
        components:{
            "filter-item":filter_item
        }
    }
</script>
<style>

</style>