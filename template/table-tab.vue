<template>
    <table>
            <thead>
               <tr>
                <td>选考科目</td>
                <td>高校数</td>
                <td>专业</td>
                <td>科目比例</td>
               </tr>
            </thead>
            <tbody>
                <tr v-for="(x,index) in list" :key="index">
                   	<td>{{x.subject}}</td>
                    <td>{{x.collegesCount}}</td>
                    <td>{{x.majorCount}}</td>
                    <td>{{x.rate}}</td>
                </tr>
               
            </tbody>
        </table>
</template>
<script>
    export default {
        name:'table-tab',
        props:['list']
    }
</script>
<style>
table {
border: 1px solid black;
width: 50%;

}
thead{
    color: white;
}
td{
    border: 1px solid black;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
thead{
  background: rgba(0, 160, 92, 1);
}
</style>