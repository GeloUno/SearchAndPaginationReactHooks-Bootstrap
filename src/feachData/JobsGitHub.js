
// const BASE_URL = 'http://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json';
 const BASE_URL = 'https://swapi.dev/api/';

export const feachJobsGitHub = async () =>{
 const res = await(await fetch(BASE_URL)).json();
 console.log('res :>> ', res);
 return res; 
}
