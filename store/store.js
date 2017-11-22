import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        school_range_obj: [],
        school_area_obj: [],
        list: []
    },
    mutations: {
        // 这里面是 数据
        updated_school_range: function(state, list) {
            // console.log(list)
            state.school_range_obj = list
        },
        updated_area_range: function(state, list) {
            state.school_area_obj = list
        },
        // 单选  通过改变数据
        reset_school_range: function(state, item) {
            //  console.log(item)
            let arr;
            arr = state.school_range_obj.map((value, index) => {
                value.selected = false;
                if (item.index == index) {
                    value.selected = item.selected;
                }
                return value;
            })
            let flag = true;
            arr.forEach(item => {
                if (item.selected) {
                    flag = false
                }
            })
            if (flag) {
                arr[0].selected = true
            }
            state.school_range_obj = arr;

        },
        // 多选的
        reset_school_area: function(state, item) {
            // console.log(item)
            state.school_area_obj[0].selected = false;
            state.school_area_obj.map((value, index) => {
                if (item.index == 0) {
                    state.school_area_obj.map((value, index) => {
                        value.selected = (index == 0)
                        return value
                    })
                    return
                }
            })
            state.school_area_obj.map((value, index) => {
                if (index == item.index) {
                    value.selected = item.selected;
                }
                return value
            })
            let flag = true;
            state.school_area_obj.forEach(item => {
                if (item.selected) {
                    flag = false
                }
            })
            if (flag) {
                state.school_area_obj[0].selected = true
            }
        },
        clear_range: function(state) {
            state.school_range_obj.forEach((value, index) => {
                if (index == 0) {
                    value.selected = true;
                } else {
                    value.selected = false;
                }
            })
        },
        clear_area: function(state) {
            state.school_area_obj.forEach((value, index) => {
                if (index == 0) {
                    value.selected = true;
                } else {
                    value.selected = false;
                }
            })
        },
        table_data: function(state, item) {
            console.log(item)
            state.list = item
        }


    },
    getters: {
        selected_range: function(state) {
            let str = '';
            state.school_range_obj.map(item => {
                if (item.selected) {
                    str += item.value;
                }
            })
            return str;
        },
        selected_area: function(state) {
            let arr = [];
            state.school_area_obj.map(item => {
                if (item.selected) {
                    arr.push(item.value);
                }
            })
            return arr.join(' , ');
        }
    }
})
export default store