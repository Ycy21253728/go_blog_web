
export function roll(top){
    let timer = null
    timer = setInterval(()=>{
        let newTop = document.documentElement.scrollTop
        if(newTop>=top){
            clearInterval(timer)
            return
        }
        document.documentElement.scrollTop+=20
    },5)
}