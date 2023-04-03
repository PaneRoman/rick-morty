import { v4 as uuidv4 } from "uuid";

export async function getData(param) {
    console.log('param>>>', param)
    const response = await fetch(`https://rickandmortyapi.com/api/character/${param}`);
    return await response.json();
}

export const createFakeSkeletonData = () => {
    let fakeArr = Array(8).fill({loading: true, name: 'Rick', species: 'Human'});
    
    return fakeArr.map(item => {
      return {...item, id: uuidv4()};
    })
  
}

export function debonce(callback, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args)
        }, delay);
    }
}