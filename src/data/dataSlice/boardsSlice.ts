import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../helpers/myAxios";


const initialState = {
    projectBoards: [],
    projectName:'',
    isLoading:true,
}

export const getProjectBoards =createAsyncThunk<any, any>('boards/getProjectBoards',async(projectId)=>{
    try {
        const res =await myAxios.get(`/board/${projectId}`);
        return res.data.data;
    } catch (error) {
        console.log(error)
    }
})


const boardsSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
      setProjectName:(state,action)=>{
        const name = action.payload;
        state.projectName=name;
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getProjectBoards.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getProjectBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectBoards = action.payload;
      });
      builder.addCase(getProjectBoards.rejected, (state) => {
        state.isLoading = false;
      });
    },
  });

export const {setProjectName} =boardsSlice.actions;
export default boardsSlice.reducer;