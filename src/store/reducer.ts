// import { TGoods, TReview } from '../mocks/types';
// import { createReducer } from '@reduxjs/toolkit';
// import { getGood, getResponse } from './action';

// type initialStateType = {
//   review: TReview[];
// 	products: TGoods[];
// };

// const initialState: initialStateType = {
//   review: [],
//   products: [],
// };

// const reducer = createReducer(initialState, (builder)=> {

//   builder.addCase(getResponse, (state, action) => {
//     state.review = action.payload.review;
//   });

//   builder.addCase(getGood, (state, action) => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     state.products = action.payload.products;
//   });

// });

// export {reducer};
