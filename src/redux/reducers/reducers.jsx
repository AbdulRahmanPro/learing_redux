import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0, // ابدأ بقيمة null للمستخدم
}; 

const userSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    addcount:(stata)=>{
        stata.count += 1
    },
    removecount:(stata)=>{
        stata.count -= 1
    },
    incremenByAmount:(stata,action)=>{
        stata.count += action.payload
    }
  },
});

export const { addcount , removecount,incremenByAmount } = userSlice.actions;

export default userSlice.reducer;
س