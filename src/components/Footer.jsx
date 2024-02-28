import React from 'react'
import Container from './ui/Container'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center bg-gray-700 text-white w-full'>
      <Container>

      <p> &copy; {new Date().getFullYear()} Gymflow. All rights reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer