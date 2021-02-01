import { readLines } from "https://deno.land/std/io/bufio.ts";

export const input = async (prompt: string = "") => {
  console.log(prompt);
  for await (const line of readLines(Deno.stdin)) {
    return line;
  }
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
