import { api } from "./utils.ts";

interface Package {
  exists: boolean;
  name?: string;
  description?: string;
}

export const getNpmPackage = async (
  name: string
): Promise<{ data: Package; error: any }> => {
  const url = `https://api.npms.io/v2/search?q=${name}`;
  const { data, error } = await api(url);

  if (data) {
    if (data.results.length >= 1) {
      const result = data.results[0];

      if (result.package.name.toLowerCase() === name.toLowerCase()) {
        return {
          data: {
            exists: true,
            name: result.package.name,
            description: result.package.description,
          },
          error: undefined,
        };
      }
    } else {
      return {
        data: { exists: false },
        error: undefined,
      };
    }
  }
  return { data, error };
};

export const getDenoPackage = async (
  name: string
): Promise<{ data: Package; error: any }> => {
  const url = `https://api.deno.land/modules?query=${name}`;
  const { data, error } = await api(url);

  if (data) {
    if (data.data.results.length >= 1) {
      const result = data.data.results[0];
      if (result.name.toLowerCase() === name.toLowerCase()) {
        return {
          data: {
            exists: true,
            name: result.name,
            description: result.description,
          },
          error: undefined,
        };
      }
    } else {
      return { data: { exists: false }, error: undefined };
    }
  }
  return { data, error };
};
