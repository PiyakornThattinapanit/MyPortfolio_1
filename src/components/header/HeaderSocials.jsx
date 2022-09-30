import React from 'react'
import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.facebook.com/piyakorn.thattinapanit/' target='_blank'><BsFacebook/></a>
        <a href='https://www.instagram.com/big_berry_/' target='_blank'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/piyakorn-thattinapanit-77649a230/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/PiyakornThattinapanit' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials