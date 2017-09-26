/**
 * Created by liangyongxin on 2017/9/26.
 */
export const getOpenid=()=> $.ajax({
  url:"/api/openid",
  type:"GET",
})
export const addInfo = (openId,name,phone,address)=> $.ajax({
  url:"/api/info?"+"openId="+openId +"&name="+name+"&phone="+phone+"&address="+address,
  type:'POST',
  contentType: "application/json",
})