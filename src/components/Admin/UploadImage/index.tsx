import React, { useState } from 'react'
import { storage } from '../../../firebase'

const UploadImage = () => {
  const [imageSrc, setImageSrc] = useState<any>(null)
  const [url, setUrl] = useState<string>('')
  const [progress, setProgress] = useState<number>(0)

  const handleChange = (e: any) => {
    if (e.target.files[0]) {
      const image = e.target.files[0]
      setImageSrc({ image })
    }
  }
  const handleUpload = () => {
    const { image } = imageSrc
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgress(progress)
      },
      (error) => {
        // error function ....
        console.log(error)
      },
      () => {
        // complete function ....
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url)
            setUrl(url)
          })
      }
    )
  }
  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <img src={url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
    </div>
  )
}

export default UploadImage
