<template>
   <tbody class="table_bigbox">
       <tr>
       <td v-for="(item,index) in item_row" :key="index" class="tdd"><span v-if="index==0" @click="add" class="table_add">+</span> {{item}}</td>
       <tr>
           <td colspan="9" v-if="flag">
              <table class="table_box" >
                   <thead>
                       <tr class="table_header">
                           <td>高校地区</td>
                           <td>高校名称</td>
                           <td>专业（类）</td>
                           <td>类中所含专业</td>
                           <td>选考科目范围</td>
                       </tr>
                        <tr  v-for="(items,index) in item_table" :key="index" id="dd">
                            <td>{{items.province}}</td>
                            <td>{{items.collegeName}}</td>
                            <td>{{items.majorName}}</td>
                            <td>{{items.remark.join('、')}}</td>
                            <td>{{items.subjectRangeNames.join('、')}}</td>
                        </tr>
               </thead>
              </table>

           </td>
       </tr>
   </tbody>
</template>
<script>
    export default {
        name:'tab_row',
        props:['row'],
        data(){
            return {
                item_row:[],
                item_table:[],
                flag:false
            }
        },
        created:function(){
          
            let len = this.row.length
            this.item_row = this.row.slice(0,len-1)
            this.item_table = this.row[9]
       
        },
        methods:{
            add:function(){
               this.flag = !this.flag
            }
        }
    }
</script>


<style scoped>
.table_box{
    width: 100%;
    background: #f4f4f4;
}
.table_header{
     background: rgba(0, 160, 92, 1);
     color: #fff;
}
.cc{
    width: 100%;
    background: #f4f4f4;
     color: black;  
}
#dd{
  background: #fff;
     color: black;     
} 
#dd td{
    height: 30px;
    line-height: 30px;
   width:50px;
    vertical-align:middle;
}
.tdd{
    position: relative;
}
.table_add{
    position: absolute;
    left:5px;
    top: 5px;
    background: rgba(0, 160, 92, 1);
    height: 20px;
    width: 20px;
    line-height: 20px;
    color:#fff;
     text-align: center;
    font-weight: bold;
}
.table_bigbox{
    width: 100%;
}
</style>