import { gray, readLines } from "./deps.ts";

/* Print line the width of the terminal window */
export const hr = () => {
  const terminalCols = 5; // TODO: get terminal width
  const line = "-".repeat(terminalCols);
  return gray(line);
};

export const api = async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      return { data: await response.json(), error: undefined };
    } else {
      return { data: undefined, error: await response.json() };
    }
  } catch (error) {
    return { data: undefined, error };
  }
};
