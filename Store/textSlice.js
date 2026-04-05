// Check this line carefully!
import { createSlice, configureStore } from '@reduxjs/toolkit'; 

const textSlice = createSlice({
  name: 'appText',
  initialState: { value: '' },
  reducers: {
    updateText: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { updateText } = textSlice.actions;
export const store = configureStore({
  reducer: { appText: textSlice.reducer }
});