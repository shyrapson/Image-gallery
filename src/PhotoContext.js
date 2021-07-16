import React,{useEffect, createContext,useState} from 'react'
import { apiKey } from './api/config';


export const PhotoContext = createContext()

 const ImageProvider = props => {
    const [images, setImages] = useState ([]);
    const [loading, setLoading] = useState(true);
    const [term, setTerm] = useState('')
    const BASE_URL=(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo`)
    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits)
            setLoading(false)
         })
         .catch(e => console.log(e))
       
       
    }, [term])

    return (
        <PhotoContext.Provider value={{images,setTerm,loading}}>
            {props.children}
            
        </PhotoContext.Provider>
    )
}

export default ImageProvider
