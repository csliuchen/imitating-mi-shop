/* eslint-disable no-unused-vars */
//es6 规范
const STORAGE_KEY = 'mall';//注意这个对应的 value 格式，变量必须加上双引号，不可以使用单引号，例子 {"user":{"userName":"Wenjun","age":21,"sex":1}}
export default{
    //在例子 {"user":{"userName":"Wenjun","age":21,"sex":1,"score":{"gpa":3.2}}}里
    //module_name 是 user，key 是 score，value 是 "gpa":3.2
    //在原有基础上运行 storage.setItem('score',{gpa:3.2},'user'); 可增添 gpa 数据
    //moduel必须是现有的key
    setItem(key,value,module_name){
        //setItem('score',{gpa:3.2},'user');
        if (module_name){
            let val = this.getItem(module_name);
            //console.log(val)
            //console.log(val[key])
            val[key] = value;//可以这样给这个暂时还undefined的key赋值
            //console.log(value)
            this.setItem(module_name,val);//相当于把整个user替换掉
        }else{
        let val = this.getStorage();
        val[key] = value;
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));//把新的 storage 传回去
        }
    },
    getItem(key, module_name){
        if (module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return this.getStorage()[key];
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}') //通过api返回storage（或者空值），然后json化并返回
    },
    clear(key, module_name){
        let val = this.getStorage();
        if (module_name){
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}