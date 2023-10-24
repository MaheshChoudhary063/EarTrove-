
import Boat from '../../assests/boat.jpg';
import Noise from '../../assests/noise.jpeg'
import Realme from '../../assests/realme.jpeg'
import Mivi from '../../assests/mivi.jpeg'
const INITAL_STATE={
    sections:[
        {
            title:'Boat',
            imageUrl:Boat,
            id:1,
            linkUrl:'Boatt'
        },
        {
            title:'Noise',
            imageUrl:Noise,
            id:2,
            linkUrl:'Noisee'

        },
        {
            title:'Mivi',
            imageUrl:Mivi,
            id:3,
            linkUrl:'Mivii'
        },
        {
            title:'Realme',
            imageUrl:Realme,
            id:4,
            linkUrl:'Realmee'
        }
    ]
}

const directoryReducer=(state=INITAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;