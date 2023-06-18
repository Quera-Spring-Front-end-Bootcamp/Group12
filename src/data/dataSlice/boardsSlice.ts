import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import myAxios from '../../helpers/myAxios';

export type task = {
  _id: string;
  name: string;
  description?: string;
  board: string;
  position: number;
  deadline?: Date;
  taskTags?: object[];
  taskAssigns?: object[];
  comments?: object[];
};

type board = {
  _id: string;
  name: string;
  position: number;
  project: string;
  tasks: task[];
};

type initialState = {
  projectBoards: board[];
  projectName: string;
  isLoading: string;
};

const initialState: initialState = {
  projectBoards: [],
  projectName: '',
  isLoading: ''
};

export const getProjectBoards = createAsyncThunk<any, any>(
  'boards/getProjectBoards',
  async (projectId) => {
    try {
      const res = await myAxios.get(`/board/${projectId}`);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const boardsSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setProjectName: (state, action) => {
      state.projectName = action.payload;
    },
    updateBoards: (state, action) => {
      state.projectBoards = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProjectBoards.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(getProjectBoards.fulfilled, (state, action) => {
      state.isLoading = 'seccuss';
      state.projectBoards = action.payload;
    });
    builder.addCase(getProjectBoards.rejected, (state) => {
      state.isLoading = 'error';
    });
  }
});

export const { setProjectName } = boardsSlice.actions;
export default boardsSlice;
