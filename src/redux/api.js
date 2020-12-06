import axios from 'axios';


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

export const fetchImages = async(query='fitness') => {
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