/**
 * Created by liangyongxin on 2017/9/26.
 */
import { rem2px } from './lib/utils'
import api from './api/api'
import './lib/wx-setting'
// jQuery编程模板
//   不可变量
const data = {
  demo1:'demo1',
  demo2:'demo2',
  demo3:'demo3',
}
let Home = {
  $els:{},
  init(){
    this.initElement();
    this.initEvent();
  },
  /**
   * 初始化元素
   */
  initElement(){
    this.$els.wrapper = $('#wrapper');
  },
  /**
   * 初始化事件
   */
  initEvent(){
  }

};



Home.init();