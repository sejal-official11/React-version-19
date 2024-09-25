import { DarkLight, ThemeProvider } from "./DarkLight";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  );
};
