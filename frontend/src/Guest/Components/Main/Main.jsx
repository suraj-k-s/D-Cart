import React from 'react'
import './main.scss'
//import icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

//import the images
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
//paste array named data



const Main = () => {

  const Data = [

    {

      id: 1,
      imgsrc: img,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {

      id: 2,
      imgsrc: img2,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {

      id: 3,
      imgsrc: img3,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {

      id: 4,
      imgsrc: img4,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {

      id: 5,
      imgsrc: img5,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {

      id: 6,
      imgsrc: img6,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {

      id: 7,
      imgsrc: img7,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {

      id: 8,
      imgsrc: img8,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {

      id: 9,
      imgsrc: img9,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      Fees: '$700',
      description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },

  ]

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div  data-aos="fade-up" data-aos-duration="3000" className="secContent grid">
        {
          Data.map((val) => {
            return (
              <div key={val.id} className='singleDestination'>
                {/*return single id from the map array*/}
                <div data-aos="fade-up" data-aos-duration="3000" className="imageDiv">
                  <img src={val.imgsrc} alt={val.destTitle} />
                  
                </div>
                <div data-aos="fade-up" data-aos-duration="3000"  className="cardInfo">
                
                  <h4 className="destTitle">
                    {val.destTitle}
                  </h4>
                  
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{val.location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{val.grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{val.Fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>
                      {val.description}
                    </p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            )
          })
        }


      </div>
    </section>
  )
}

export default Main