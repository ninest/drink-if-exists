
export const getNpmPackage = async (word: string = '') => {
  const url = `https://api.npms.io/v2/search?q=${word}`;

  const response = await fetch(url);
  if (response.ok) {
    let json = await response.json();

    // check if there are results
    if (json.results.length > 1){
      const result = json.results[0]
      if (result.package.name.toLowerCase() === word.toLowerCase()) {
        return {
          exists: true,
          result: result
        };
      } 
    }
    return { exists: false }
  } else {
    return { error: true }
  }
}


// example
// const a = await getNpmPackage('help me pleae')
// console.log(a);
