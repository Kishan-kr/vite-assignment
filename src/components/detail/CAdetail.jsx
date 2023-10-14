import React, { useEffect, useState } from 'react'
import Intro from './Intro'
import Navbar from '../navabar/Navbar'
import Footer from '../footer/Footer'
import TaskAndCharges from './TaskAndCharges'
import Testimonial from './Testimonial'
import ImageCarousel from './ImageCarousel'
import About from './About'
import userData from '../../data/users.json'
import { useParams } from 'react-router-dom'
import UserNotFound from '../error/UserNotFound'
import Loader from '../Loader'

function CAdetail() {
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  // Search for the user with the matching ID
  const fetchUser = () => {
    const data = userData.find((user) => user.id === Number(id));
    console.log(data)
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
    setLoading(false);
  }, [])

  if (!user) {
    return <UserNotFound />;
  }


  return (
    <>{loading ? <Loader /> :
      <div className='bg-background text-lg text-black'>
        <Navbar />
        <div className='flex flex-col gap-12 py-8 px-3 md:flex-row md:px-12 lg:px-24'>

          <div className='flex flex-col gap-12'>
            <Intro user={user} />
            <TaskAndCharges user={user} />
            <Testimonial testimonial={user.testimonial} />
          </div>

          <div className='flex flex-col gap-12'>
            <ImageCarousel image={user.image} />

            <About user={user} />
          </div>

        </div>

        <Footer />
      </div>}</>
  )
}

export default CAdetail