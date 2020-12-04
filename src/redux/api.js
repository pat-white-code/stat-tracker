import axios from 'axios';

const url = 'https://api.unsplash.com/photos/random/?client_id=I0xGcimco-2dGPdxoNOFryg7kR0POqneNyXiwhbUgKM&count=30&orientation=squarish'

export const fetchImages = async() => {
  try {
    const res = await axios.get(url)
    const data = res.data;
    return data;
  }
  catch(err) {
    throw new Error(err)
  }
}