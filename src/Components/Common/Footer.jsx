import * as React from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { YouTube, YoutubeSearchedFor } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <>
  
        <Box component="section" sx={{display:"flex",justifyContent:"center",backgroundColor:"black",width:"auto",padding:"2rem 2rem"}}>
            
            <Grid container spacing={3}>
                <Grid item sm={4}>
                    <Typography sx={{color:"white"}}>
                    <Typography variant="h4" >
                    Contact us</Typography>
                    <Typography variant='h6'>
                    Welcome to our website!<br />
Address: Golf lake, 123 <br />
Westin Road <br />
Kol - 1228787
                    </Typography>


                    </Typography>


                </Grid>
                <Grid item sm={4}>
                    
                    <Typography sx={{color:"white"}}>
                    
                    <Typography variant="h4" >
                    Follow us</Typography>

                    <Box>
                    
                    </Box>
                    

                   <a href="https://www.facebook.com" target='_blank' 
                   style={{textDecoration:"none",color:"white",padding:"0px 5px"
               }}><FacebookIcon/> </a>
               <a href="https://www.instagram.com/" target='_blank'  style={{textDecoration:"none",color:"white",padding:"0px 5px"
               }}><InstagramIcon/></a>
               <a href=""></a>
               <a href="https://x.com/i/flow/login" target='_blank'  style={{textDecoration:"none",color:"white",padding:"0px 5px"
               }}> <TwitterIcon/></a>
               <a target='_blank'  href="https://github.com/Sm6011998/React-CRUD-Application" style={{textDecoration:"none",color:"white",padding:"0px 5px"
               }}> <YouTube/></a>
              
              

                    </Typography>
                    
               


                </Grid>
                <Grid item sm={4} sx={{display:"flex",justifyContent:"center"}}>
                    <Typography sx={{color:"white",}}>
                    <Typography variant="h4" >
                About us</Typography>
                <Box>
                <Typography variant='h6' sx={{color:'white',fontSize:"1rem"}}> Welcome to Basketball Inc., your number one source for all things basketball. We're dedicated to providing you the very best of basketball content,
                     with an emphasis on player statistics, game analysis, and industry news.</Typography>
                </Box>

                   

                    </Typography>
              

                </Grid>

            </Grid>

        </Box>

    
    </>
   
  );
}
