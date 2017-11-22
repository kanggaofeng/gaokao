<template>
    <table>
            <thead>
               <tr>
                <td v-for="(value,index) in title" :key="index">{{value}}</td>
               </tr>
            </thead>
            <slot></slot>
        </table>
</template>
<script>
    export default {
        name:'table_highschool',
        props:['title']
    }
</script>

<style scoped>
table {
border: 1px solid black;
width: 100%;
margin: 20px 0;
}
td{
    border: 1px solid black;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
thead{
  background: rgba(0, 160, 92, 1);
  color: white;
}
</style>