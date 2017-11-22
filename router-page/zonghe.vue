<template>
    <div class="filter-box">
        <div class="selected-condations">
            <div class="left-title">已选条件：</div>
            <div class="right-area">
                 <p class="selected-item" v-if="$store.getters.selected_range!='不限'">
                    {{$store.getters.selected_range}} 
                    <span class="clear-selected" @click="clearRange">X</span>
                </p>
                 <p class="selected-item" v-if="$store.getters.selected_area!='不限'">
                    {{$store.getters.selected_area}} 
                    <span class="clear-selected" @click="clearArea">X</span>
                </p>
            </div>
        </div>
        <div class="condations-box clear">
            <div class="major-range" style="clear:both">

                <div class="right-area"></div>
            </div>
            <school-range :school-range-list="$store.state.school_range_obj"></school-range>
            <school-area :school-area-list="$store.state.school_area_obj"></school-area>
        </div>
        <div style="clear:both"></div>
        <div class="tab">
        <div class="tab-header">
             *由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！
        </div>
       <table-tab :list="$store.state.list"></table-tab>
       <table-tab :list="$store.state.list"></table-tab>
        </div>
        <div style="clear:both"></div>
        <table-highschool :title="head">
           <tab-row v-for="(x,index) in row_list" :key="index" :row="x"></tab-row>
        </table-highschool>
    </div>
</template>

<script>
    import school_range from '../template/school-range.vue';
    import school_area from '../template/school-area.vue';
    import table_tab from '../template/table-tab.vue';
     import tab_row from '../template/tab-row.vue';
    import table_highschool from '../template/table-highschool.vue';
   
    export default {
        name:'overall',
        data:function(){
            return {
                 head:[],
                 row_list:[]
            }
        },
         //点击x号  调用vuex的方法
        methods:{
            clearRange:function(){
                this.$store.commit('clear_range');
            },
            clearArea:function(){
                this.$store.commit('clear_area');
            }
        },
        created:function(){
            let vm = this
           this.$http.get('/server/schoolRange.json').then(function(res){
                let range_data = res.data.list.map((value,index)=>{
                return index==0?{value:value,selected:true}:{value:value,selected:false}
                })
                  vm.$store.commit('updated_school_range',range_data)
            })  
           this.$http.get('/server/schoolArea.json').then(function(res){
                let range_area = res.data.list.map((value,index)=>{
                return index==0?{value:value,selected:true}:{value:value,selected:false}
                })
                  vm.$store.commit('updated_area_range',range_area)
            })
           this.$http.get('/server/general.json').then(function(res){
              // console.log(res)
                vm.head=res.data.result.title
                vm.row_list= res.data.result.rows
             let table_data = res.data.result.analysisData
               vm.$store.commit('table_data',table_data)
              
            })
           
        
        },
            //渲染数据的模板
        components:{
            "school-range":school_range,
            "school-area":school_area,
            "table-tab":table_tab,
            "table-highschool":table_highschool,
            "tab-row":tab_row
        }
    }
</script>

<style>
table{
    width: 100%;
}
    .filter-box{
    width: 100%;
    font-size: 16px;
}
.left-title,.right-area{
    float: left;
    box-sizing: border-box;
}
.left-title{
    margin: 5px 0;
    text-indent: 10px;
    width: 10%;
}
.right-area{
    width: 90%;
}
.selected-condations{
    line-height: 35px;
}
.selected-item{
    height: 24px;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 5px;
    line-height: 24px;
    position: relative;
    padding-right:20px; 
}
.selected-item span{
  position: absolute;
    right: 5px;
    top:5px;
}
.condations-box{
    border: 1px solid #ccc;
    padding: 5px 10px;
    line-height: 35px;
}
.filter-item{
    display: inline-block;
    min-width: 65px;
    padding: 0 5px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    margin: 5px 1px;
}
.filter-item:hover{
    background: rgba(0, 160, 92, 1);
    color: #fff;
}   
.tab-header{
          font-size:14px;
        line-height: 34px;
        color:red;
        text-indent: 10px;
}
table{
    float: left;
}
.router-link-active {
    background: rgba(0, 160, 92, 1);
    color: #fff;
    padding:5px;
}

</style>
