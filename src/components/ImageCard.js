import React, { useContext } from 'react'
import { PhotoContext } from '../PhotoContext'
import Image from './Image'
import ImageSearch from './imageSearch'
import { NoImage } from './NoImage'


function ImageCard() {

  const { images, loading, setTerm } = useContext(PhotoContext);

  return (
    <div className="container mx-auto ">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!loading && images.length <= 0 && <NoImage />}
      {loading ? <h1 className="text-6xl text-center mx-auto">loading...</h1>
      :<div className="grid grid-col-1 gap-4 sm:grid-cols-3 ">
          {images.map((image, id) => (
            <Image key={image.id} image={image} />
          ))}
        </div>
      }
    </div>
  )
}

export default ImageCard
