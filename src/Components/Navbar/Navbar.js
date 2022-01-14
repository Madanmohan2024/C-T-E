import React,{useState,useEffect} from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles'; 
import{
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements';
export const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick= () => setClick(!click)
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
    } else{
      setButton(true)
    }
  }
  
  useEffect(() =>{
    showButton();
  },[]);

  window.addEventListener('resize',showButton);

  return (
   <>
   <IconContext.Provider value={{color:'#fff'}}>
      <Nav>
       <NavbarContainer>
       <NavLogo to ="/">
         <NavIcon />
         C-T-E
       </NavLogo>
       <MobileIcon onClick ={handleClick}>
         {click ? <FaTimes /> :
         <FaBars />}
       </MobileIcon>
       <NavMenu onclick ={handleClick} click={click} >
         <NavItem>
           <NavLink to='/'>
             Home
           </NavLink>
         </NavItem>
       
         <NavItem>
           <NavLink to='/course'>
           Course
           </NavLink>
         </NavItem>
    
         <NavItem>
           <NavLink to='/about'>
           About
           </NavLink>
         </NavItem>
         <NavItem>
           <NavLink to='/feedback'>
           Feedback
           </NavLink>
         </NavItem>
         <NavItemBtn>
           {button ? (
             <NavBtnLink to="/sign-up">
               <Button primary>Sign Up</Button>
             </NavBtnLink>
           ):(
             <NavBtnLink to="/login">
             <Button fontBig primary>
              login
             </Button>
             </NavBtnLink>
           )}
         </NavItemBtn>
       </NavMenu>

       </NavbarContainer>
      </Nav>
      </IconContext.Provider>
   </>
  );
};
export default Navbar;
