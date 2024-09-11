
clicked=(e)=>{
    inp.value+=e.target.textContent
}

equals=()=>{
    inp.value=eval(inp.value)
}

allclear=()=>{
    inp.value=""
}