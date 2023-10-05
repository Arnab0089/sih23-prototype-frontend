import { configureStore, createSlice } from "@reduxjs/toolkit";
import { knowMode, setMode } from "./utils";
const lightTheme = {
  primary: "#ffffff",
  secondary: "#03dac6",
  background: "#ffffff",
  card: "#96B6C5",
  text: "#000000",
  border: "#000000",
  notification: "#6200ee",
};

const darkTheme = {
  primary: "#000000d5",
  secondary: "#b0bec5",
  background: "#ffffff",
  card: "#445069",
  text: "#ffffff",
  border: "#ffffff",
  notification: "#bb86fc",
};

const initialState = {
  theme: knowMode() || "light",
  colors: knowMode() ? darkTheme : lightTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
        state.colors = darkTheme;
        setMode("dark");
      } else {
        state.theme = "light";
        state.colors = lightTheme;
        setMode("light");
      }
    },
  },
});

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export const { toggleTheme } = themeSlice.actions;
