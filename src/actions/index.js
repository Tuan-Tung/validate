export const showDetailProduct = (item) =>{
    return{
        type: "show",
        payload: item,
    }
}
export const showAllProduct = (item) =>{
    return{
        type: "all",
        render: item,
    }
}
export const cancelProduct = (item) =>{
    return{
        type: "cancel",
        index: item,
    }
}
export const changeProduct = (item) =>{
    return{
        type: "change",
        change: item,
    }
}
