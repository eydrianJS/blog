import { useState, useEffect, useCallback } from 'react'
import placeholder from './placeholder.jpg'
import { getImage, getComments } from '../../../../firebase'
import moment from 'moment'

interface Comment {
  id: string
  content: string
  time: string
  author: string
  likes: number
  milisecond: number
}

const useBlogEntryInitial = ({ item }: { item: any }) => {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [comments, setComments] = useState<Comment[]>([])
  const [openComments, setOpenComments] = useState(false)

  const handlerToggleComments = useCallback(() => {
    setOpenComments(!openComments)
  }, [openComments])

  useEffect(() => {
    if (item) {
      getImage(item.image).then((data) => {
        setImageSrc(data)
      })
      getComments(item.id).then((data) => {
        if (data) {
          const currentComments: Comment[] = []
          data.docs.forEach((comment: firebase.firestore.DocumentData) => {
            const doc = comment.data()
            const time = moment(parseInt(`${doc.time.seconds}000`))
            const mom = moment().add(-30, 'days')
            let endTime = time.format('ddd MMM DD YYYY')
            if (!time.isBefore(mom)) {
              endTime = time.startOf('minutes').fromNow()
            }
            currentComments.push({
              id: comment.id,
              author: doc.author,
              content: doc.content,
              time: endTime,
              likes: doc.likes,
              milisecond: doc.time.seconds
            })
          })
          currentComments.sort((a, b) => b.milisecond - a.milisecond)
          setComments(currentComments)
        }
      })
    }
  }, [item.id, item])

  return {
    imageSrc,
    setComments,
    handlerToggleComments,
    comments,
    openComments
  }
}

export default useBlogEntryInitial
