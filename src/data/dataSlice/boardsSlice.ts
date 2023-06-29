import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import myAxios from '../../helpers/myAxios';

export type tag = {
  _id: string;
  tagName: string;
  color: string;
};
export type taskAssign = {
  _id: string;
  username: string;
  email: string;
  firstname: string;
};

export type task = {
  _id: string;
  name: string;
  description?: string;
  board: string;
  position: number;
  deadline?: Date;
  taskTags?: tag[];
  taskAssigns: taskAssign[];
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
  projectMembers: Object[];
  search: board[];
  searchTerm: String;
  filterTask: board[];
};

const initialState: initialState = {
  projectBoards: [],
  projectName: '',
  isLoading: '',
  projectMembers: [],
  search: [],
  filterTask: [],
  searchTerm: ''
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
    setProjectMembers: (state, action) => {
      state.projectMembers = action.payload;
    },
    updateBoards: (state, action) => {
      state.projectBoards = action.payload;
    },
    addBoard: (state, action) => {
      state.projectBoards = [...state.projectBoards, action.payload];
    },
    addTaskToBoard: (state, action) => {
      const boardId = action.payload.board;
      const boardIndex = state.projectBoards.findIndex((board: any) => board._id === boardId);
      if (boardIndex !== -1) {
        const board = { ...state.projectBoards[boardIndex] };
        board.tasks = [...board.tasks, action.payload];
        state.projectBoards[boardIndex] = board;
      }
    },
    searchTask: (state, action) => {
      state.searchTerm = action.payload;
      const filterTasks = state.projectBoards.map((board) => {
        return {
          ...board,
          tasks: board.tasks.filter((task) => task.name.toLowerCase().includes(action.payload))
        };
      });
      state.search = filterTasks;
    },
    filterTasks: (state, action) => {
      const filterTasks = state.projectBoards.map((board) => {
        return {
          ...board,
          tasks: board.tasks.filter((task) =>
            task.taskAssigns.some((taskasign) => taskasign._id === action.payload)
          )
        };
      });
      state.filterTask = filterTasks;
    },
    removeFilter: (state) => {
      state.filterTask = [];
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

export const {
  setProjectName,
  addTaskToBoard,
  updateBoards,
  setProjectMembers,
  addBoard,
  searchTask,
  filterTasks,
  removeFilter
} = boardsSlice.actions;
export default boardsSlice;
