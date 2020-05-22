
export const getNpmPackage = async (word: string = '') => {
  const url = `https://api.npms.io/v2/search?q=${word}`;

  const response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    const result = json.results[0]
    if (result.package.name.toLowerCase() === word.toLowerCase()) {
      return {
        exists: true,
        result: result
      };
    } else {
      console.log('nag')
      return { exists: false }
    }
  } else {
    return { error: true }
  }
}


// example
// const a = await getNpmPackage('word')
// console.log(a);
