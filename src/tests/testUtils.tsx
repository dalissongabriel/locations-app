import rootReducer from "@/app/combinedReducers";
import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";

export const mockStore = (preloadedState: any) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

function render(
  ui: ReactElement,
  {
    preloadedState = undefined,
    store = mockStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
