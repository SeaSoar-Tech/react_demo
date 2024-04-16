import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const url = "http://localhost:3004/data";

const channelSlice = createSlice(
    {
        name: 'channel',
        initialState: {
            list:[]
        },

        reducers:{
            setList: (state, action)=>{
                state.list = action.payload;
            }
        }

    }
)

const {setList} = channelSlice.actions

export const fetchList = ()=>{

    return async (dispatch) =>{
        try{
            const res = await axios.get(url)
            console.dir(res);
            dispatch(setList(res.data))
        }catch(e){
            console.log("fetch error: " + e.message);
        }

    }

}

export default channelSlice.reducer
