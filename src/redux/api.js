import axios from 'axios';
import * as d3 from 'd3';


export const fetchImagesByUser = async(userId) => {
  const url = `https://api.unsplash.com/photos/random/?user=${userId}&client_id=I0xGcimco-2dGPdxoNOFryg7kR0POqneNyXiwhbUgKM&count=3&orientation=squarish`
  try {
    const res = await axios.get(url);
    const data = res.data;
    return data;
  } catch(err){
    throw new Error(err)
  }
}

export const mockFetchImagesByUser = async (userId) => {
  console.log('MOCK USER ID', userId)
  let relatedImages;
  await setTimeout(1000, ()=> {
    relatedImages = [
      `${userId}_img1`, `${userId}_img2`, `${userId}_img3`
    ]
  })
  relatedImages = [
    `${userId}_img1`, `${userId}_img2`, `${userId}_img3`
  ]
  console.log('RELATED IMAGES: ', relatedImages)
  return relatedImages
}

export const fetchImages = async(query='fitness') => {
  console.log('query', query);
  const url = `https://api.unsplash.com/photos/random/?query=${query}&client_id=I0xGcimco-2dGPdxoNOFryg7kR0POqneNyXiwhbUgKM&count=12&orientation=squarish`
  try {
    const res = await axios.get(url)
    const data = res.data;
    return data;
  }
  catch(err) {
    throw new Error(err)
  }
}

export const makeBadCall = async() => {
  try {
    const res = await axios.get('https://api.unsplash.com/photos/random/?client_id=NULL&count=30&orientation=squarish')
    const data = res.data;
    return data;
  }
  catch(err) {
    throw new Error(err)
  }
}

export const fetchCaloriesData = async() => {
  try{
    const caloriesData = await d3.csv('/data/calories_burned_jan.csv', d=>({
      date: d.date,
      calories_burned: +d.calories_burned
      }))
    return caloriesData
  } catch(err) {
    throw new Error(err)
  }
}