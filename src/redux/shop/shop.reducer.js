import ShopData from "../../component/Shop/Shopdata";

const INITIAL_STATE={
    collections:ShopData
}

const shopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducer;