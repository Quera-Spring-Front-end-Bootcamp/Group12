import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import myAxios from '../../helpers/myAxios';

export const fetchWorkspaces = createAsyncThunk('fetch-workspaces', async () => {
  const workspaces = await myAxios.get(`/workspace/get-all`);
  return workspaces.data.data;
});

const WorkSpacesSlice = createSlice({
  name: 'data',
  initialState: { data: [], fetchStatus: '' },
  reducers: {},
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

export default WorkSpacesSlice;
