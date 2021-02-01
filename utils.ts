import { readLines } from "https://deno.land/std/io/bufio.ts";

export const input = async (prompt: string = "") => {
  console.log(prompt);
  for await (const line of readLines(Deno.stdin)) {
    return line;
  }
};

export const api = async (url: string) => {};
