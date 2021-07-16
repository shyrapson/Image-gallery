import React from 'react'
import ImageCard from './components/ImageCard'
import ImageProvider from './PhotoContext'

function App() {
  return (
    <ImageProvider>
       <ImageCard/>
    </ImageProvider>
  )
}

export default App
