import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setDataHelper } from '../utils';
import { Payload } from '../types';

export interface GlobalState {
  name: string;
}

const initialState: GlobalState = {
  name: 'zhangsan',
};

const { actions, reducer } = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalState(state, { payload }: PayloadAction<Payload>) {
      setDataHelper(state, payload);
    },
  },
});
export const { setGlobalState } = actions;
export default reducer;
