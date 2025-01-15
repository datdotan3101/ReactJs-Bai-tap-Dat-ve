import { configureStore } from "@reduxjs/toolkit";
import bookingTicketReducer from "./../Bai-tap/slice";

export const store = configureStore({
  reducer: {
    // Add your child reducer
    bookingTicketReducer,
  },
});
