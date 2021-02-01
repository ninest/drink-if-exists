import { gray, readLines } from "./deps.ts";

export const input = async (prompt: string = "") => {
  console.log(prompt);
  for await (const line of readLines(Deno.stdin)) {
    return line;
  }
};

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
  console.log(5);
};
