import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import myAxios from '../../helpers/myAxios';

export const fetchWorkspaces = createAsyncThunk('fetch-workspaces', async () => {
  const workspaces = await myAxios.get(`/workspace/get-all`);
  return workspaces.data.data;
});

type workspace = {
  _id: string;
  name: string;
  user: string;
  projects: [];
  members:[];
};
type initialState = {
  fetchStatus: string;
  data: workspace[];
};

const initialState: initialState = {
  data: [],
  fetchStatus: ''
};

const WorkSpacesSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateWorkspaces: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteWorkspace: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((workspace: any) => workspace._id !== id);
    },
    editWorkspace: (state, action) => {
      const id = action.payload._id;
      const workspaceIndex = state.data.findIndex((workspace: any) => workspace._id === id);
      if (workspaceIndex !== -1) state.data[workspaceIndex] = action.payload;
    },
    addProject:(state,action) =>{
      const id =action.payload.workspace
      const workspaceIndex = state.data.findIndex((workspace: any) => workspace._id === id);
      if(workspaceIndex !==-1){
        const workspace:any = { ...state.data[workspaceIndex] };
        workspace.projects.push(action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaces.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = 'success';
      })
      .addCase(fetchWorkspaces.pending, (state) => {
        state.fetchStatus = 'pending';
      })
      .addCase(fetchWorkspaces.rejected, (state) => {
        state.fetchStatus = 'error';
      });
  }
});

export const { updateWorkspaces, deleteWorkspace,editWorkspace,addProject } = WorkSpacesSlice.actions;
export default WorkSpacesSlice;
