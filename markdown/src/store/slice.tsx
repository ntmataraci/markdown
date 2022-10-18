import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface textState {
    value: string
  }
  
  // Define the initial state using that type

  export const texting=`A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |`

  const initialState: textState = {
    value: "",
  }

  
  export const textSlice = createSlice({
    name: 'mytext',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      changer: (state, action: PayloadAction<string>) => {
        state.value = action.payload
      },
    },
  })

  export const {changer} =textSlice.actions
  export default textSlice.reducer