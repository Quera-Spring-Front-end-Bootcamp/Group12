import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import myAxios from '../../helpers/myAxios';

export type task = {
  name: string;
  description?: string;
  board: string;
  position: number;
  deadline: Date;
  taskTags: object[];
  taskAssigns: object[];
  comments: object[];
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
  isLoading: boolean;
};

const initialState: initialState = {
  projectBoards: [],
  projectName: '',
  isLoading: true
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
      const name = action.payload;
      state.projectName = name;
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
  }
});

export const { setProjectName } = boardsSlice.actions;
export default boardsSlice.reducer;
