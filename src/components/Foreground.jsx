import React, {useRef} from 'react'
import Cards from '../components/Cards'

const Foreground = () => {

    const ref = useRef(null)

    const data = [
      {
        id: "1",
        desc: "This box contains information about the Movement Center and the Movement Center Position of the Movement Center",
        fileSize: "12 MB",
        close: true,
        tag: {
          isOpen: true,
          tagLine: "Click, Hold & then Drag",
          tagColor: "red",
        },
      },
      {
        id: "2",
        desc: "This box contains information about the Movement Center on the Internet Server",
        fileSize: "129 MB",
        close: true,
        tag: {
          isOpen: true,
          tagLine: "Click, Hold & then Drag",
          tagColor: "blue",
        },
      },
      {
        id: "3",
        desc: "You can drag these cards whenever you choose. This box contains information about the Movement Center",
        fileSize: "89 MB",
        close: true,
        tag: {
          isOpen: true,
          tagLine: "Click, Hold & then Drag",
          tagColor: "grey",
        },
      },
      {
        id: "4",
        desc: "This box contains information about the Movement Center and the Location Center and  the Location Center",
        fileSize: "67 MB",
        close: true,
        tag: {
          isOpen: true,
          tagLine: "Click, Hold & then Drag Now",
          tagColor: "blue",
        },
      },
    ];


  return (
    <>
        <div ref={ref} className='fixed top-0 left-0 z-[3] h-screen w-full flex flex-wrap gap-5 '>
            {data.map((item, index)=>(
                <Cards key={index} data={item} reference={ref}/> 
            ))}
        </div>
    </>
  )
}

export default Foreground