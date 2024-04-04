import { logoutApi } from "@/api/user_api"
import { message } from "ant-design-vue"
import { useStore } from "@/stores/store"
import router from "@/router"

//在.js里使用router,从router拿

export async function logout(){
    const store = useStore()
    let res = await logoutApi()
    store.clear()
    await router.push({name:"login"})
    if(res.code){
        message.error(res.msg)
        return
    }
    
    
    message.success(res.msg)
}