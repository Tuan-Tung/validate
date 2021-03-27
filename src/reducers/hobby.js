
const hobbyProduct = {
    list: [
        {
            category: "adidas",
            id: 1,
            name: 'Giày thể thao',
            price: 500000,
            number: 1,
            img: 'https://res.cloudinary.com/dkzpakm7v/image/upload/v1609139768/samples/anh/img/giay-nike-air-force_pqnru1.jpg'
        },
        {
            category: "nike",
            id: 2,
            name: 'Giày lười',
            price: 500000,
            number: 1,
            img: 'https://res.cloudinary.com/dkzpakm7v/image/upload/v1609139757/samples/anh/img/Giay-luoi-Gucci-nam-dep_khe0lx.jpg'
        },
        {
            category: "adidas",
            id: 3,
            name: 'quần thể thao',
            price: 500000,
            number: 1,
            img: 'https://res-console.cloudinary.com/dkzpakm7v/thumbnails/v1/image/upload/v1608865311/c2FtcGxlcy9hbmgvaW1nL2pvZ2dlcjJfemx1ZTdx/preview'
        },
        {
            category: "ni-ling",
            id: 4,
            name: 'quần jogger',
            price: 500000,
            number: 1,
            img: 'https://res.cloudinary.com/dkzpakm7v/image/upload/v1608865311/samples/anh/img/jogger5_lgk1wb.jpg'
        },
        {
            category: "adidas",
            id: 5,
            name: 'Giày thể thao',
            price: 500000,
            number: 1,
            img: 'https://res.cloudinary.com/dkzpakm7v/image/upload/v1608865310/samples/anh/img/gi%C3%A0ya2_grande_h0yvyp.jpg'
        },
        {
            category: "nike",
            id: 6,
            name: 'Giày lười',
            price: 500000,
            number: 1,
            img: 'https://res.cloudinary.com/dkzpakm7v/image/upload/v1608865310/samples/anh/img/gi%C3%A0y4_iuthcy.jpg'
        }
    ],
    category: [
        "adidas", "nike", "ni-ling"
    ],
    activeId: null,
    newProduct: JSON.parse(localStorage.getItem('task')) || []
}


const hobbyReducer = (state = hobbyProduct, action) => {

    switch (action.type) {
        case "all" :{
           let categoryHobby =  action.render
            return{
                ...state,
                activeId: categoryHobby
            }
        }
        case "show": {
            let newList = [...state.newProduct]

            if (!newList.length) {
                newList.push(action.payload)
            }
            else {
                let result = -1
                newList.forEach((value, index) => {
                    if (value.id === action.payload.id) {
                        result = index
                    }
                })
                if(result !== -1){
                    newList[result].number += 1
                }
                else{
                    newList.push(action.payload)
                }
            }
            localStorage.setItem("task", JSON.stringify(
                newList
            ))

            return {
                ...state,
                newProduct: newList
            }
        }
        case "cancel": {
            let cancelProduct = [...state.newProduct]

            cancelProduct.splice(action.index, 1)
            localStorage.setItem("task", JSON.stringify(
                cancelProduct
            ))

            return {
                ...state,
                newProduct: cancelProduct
            }
        }
        case "change":{
            let changeProduct = [...state.newProduct]
            
            changeProduct.forEach((value,index) =>{
                if(value.id === action.change.id){
                    value = action.change
                }
            })
            localStorage.setItem("task", JSON.stringify(
                changeProduct
            ))
            return{
                ...state,
                newProduct: changeProduct
            }
        }

        default:
            return state;
    }

}

export default hobbyReducer;
