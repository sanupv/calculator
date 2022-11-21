function display(num){
    result.value+=num
}
function allClear(){
    result.value=""
}
function answer(){
    ans=result.value
    
    result.value=eval(ans)
}
function backSpace(){
    data=result.value
    
    result.value=data.slice(0,-1)
}