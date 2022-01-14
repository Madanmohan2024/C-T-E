import React from 'react'
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
const Footer = () => {
    return (
         <FooterContainer>
          <FooterSubscription>
           <FooterSubHeading>
               join my site for 
        latest notes and exam-papers :) 
          </FooterSubHeading>
          <FooterSubText> you can unsubscribe at any time... 
          </FooterSubText> 
         <Form>
           <FormInput name="email" type="email" placholder="your Email" />
           <Button fontBig> subscribe</Button>
         </Form>
         </FooterSubscription> 
         <FooterLinksContainer>
          <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle> About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'> how it works</FooterLink>
           <FooterLink to='/about'> terms of service</FooterLink>
           </FooterLinkItems>

           <FooterLinkItems>
            <FooterLinkTitle> social media</FooterLinkTitle>
           <FooterLink to='/sign-up'>You Need to be Sign Up</FooterLink>
           <FooterLink to='/'> Instagram</FooterLink>
           <FooterLink to='/'> Facebook</FooterLink>
           <FooterLink to='/'>GitHub</FooterLink>
           <FooterLink to='/'> Twitter</FooterLink>
           </FooterLinkItems> 

           <FooterLinkItems>
            <FooterLinkTitle> references</FooterLinkTitle>
           <FooterLink to='/sign-up'> how it works</FooterLink>
           <FooterLink to='https://www.cleverprogrammer.com/'> youtube</FooterLink>
           <FooterLink to='https://www.geeksforgeeks.org/'> GeeksForGeeks</FooterLink>
           <FooterLink to='https://reactjs.org/'>React.js</FooterLink>
            <FooterLink to='/'> terms of service</FooterLink> 
           </FooterLinkItems>
          </FooterLinksWrapper>
         </FooterLinksContainer>
         <SocialMedia>
        <SocialMediaWrap>
         <SocialLogo to='/'>
            <SocialIcon />
            C-T-E
          </SocialLogo>
          <WebsiteRights>C-T-E © 2021,All Rights Reserved</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
          </SocialMediaWrap>
      </SocialMedia>

       </FooterContainer>   
        
    )
}

export default Footer
