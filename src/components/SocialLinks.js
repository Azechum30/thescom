import React from 'react'
import './SocialLinks.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Contacts = (Icon, title, fontSize) =>{
  return(
    <div className='contacts'>
      <span className='contact__icon'>{Icon && <Icon style={{fontSize : fontSize}}/>}</span>
      <span className='contact__title'>{title}</span>
    </div>
  ) 
}

const SocialLink = (Icon, link, color, fontSize) =>{
    return (
      <div className='links'>
        <a href={link}>{Icon && <Icon className='social__icon' style={{color: color, fontSize : fontSize}}/>}</a>
      </div>
    )
  }

function SocialLinks() {
  return (
    <div className='socialLinks__container bg-dark text-white'>
      <div className="contact">
      <p className='py-3'>CONTACT INFO</p>
        {Contacts(PersonIcon, 'The Second Coming Cathedral', 16)}
        {Contacts(HomeIcon, 'Opposite New Sports Stadium, Tamale', 16)}
        {Contacts(PhoneIcon, '+233 540 649 355', 16)}
        {Contacts(EmailIcon, 'admin@thecom.net', 16)}
      </div>

      <div className="social__links">
        <p className='py-3 mx-3'>FIND US ON SOCIAL MEDIA:</p>
        <div className="social__icon">
        {SocialLink(FacebookRoundedIcon, 'https://www.facebook.com', 'white', 30)}
        {SocialLink(TwitterIcon, 'https://www.twitter.com', 'white', 30)}
        {SocialLink(InstagramIcon, 'https://www.instagram.com', 'white', 30)}
        {SocialLink(YouTubeIcon, 'https://www.youtube.com', 'white', 30)}
        </div>
      </div>
    </div>
  )
}

export default SocialLinks