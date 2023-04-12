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

export function sortData(data) {
    return data.sort((a, b) => a['name'].localeCompare(b['name']));
}

export const returnPaginationRange = (totalPages, page, siblings) => {

    console.log('totalPages2>>>', totalPages)
    console.log('page2>>>', page)
    
    // const totalPageNoDot = 5;
    if (totalPages <= 5) {
        return createRangeArr(1, totalPages);
    }

    const showLeftDots = page > 4;
    const showRightDots = page < totalPages - 4;

    if (!showLeftDots && showRightDots) {
        const leftRange = createRangeArr(1, 5);
        return [...leftRange, ' ...', totalPages];
    }

    if (showLeftDots && !showRightDots) {
        const rightRange = createRangeArr(totalPages - 5, totalPages);
        return [1, '... ', ...rightRange];
    }

    if (showLeftDots && showRightDots) {
        const middleRange = createRangeArr(page - 1, page + 1);
        return [1, '... ', ...middleRange, ' ...', totalPages];
    }
} 


function createRangeArr(first, last) {
    let rangeArr = [];

    for (let i = first; i <= last; i++) {
        rangeArr.push(i);
    }

    return rangeArr;
}