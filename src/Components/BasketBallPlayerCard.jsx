import React, { useState } from 'react'
import { BasketballPlayerAPI } from './Api'
import Layout from './Common/Layout'
import { Box, Button, Container, Grid, TextField } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { toast } from 'react-toastify';


const BasketBallPlayerCard = () => {
  const[loadmore,setLoadmore] = useState(6)
  const[search,setSearch] = useState("")
  const LoadMoreCrads = ()=>{
    setLoadmore(loadmore + 6)
  }

  const Liked = ()=>{
    toast.success("You have liked the player")

  }

  const Disliked = ()=>{
    toast.warning("You have disliked the player")
  }
 


  return (
    <>
    <Layout>
        <Container>
          <Box sx={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
          <TextField sx={{width:"20rem"}}
          placeholder='Search your player names here....'
          label="Player search"
          onChange={(e)=>setSearch(e.target.value)}/>
          </Box>
         
        <Grid container spacing={3} sx={{paddingTop:"3rem"}}>
        {
       BasketballPlayerAPI.filter((item)=>{
        if(item===""){
          return item
        }
         else if(item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return item
         }
       }).slice(0,loadmore).map((item)=>{
        return(
            <>
            <Grid item sm={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
             {item.name}
          </Typography>
          <Grid container spacing={3}>
            <Grid item sm={6}>
           
          <Typography variant="body1" color="text.secondary">
           Position: {item.position}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Stats:<br/> {item.stats.pointsPerGame}(PPG)<br/> {item.stats.assistsPerGame}(APG) <br/>
            {item.stats.reboundsPerGame}(RPG)
          </Typography>

            </Grid>
            <Grid item sm={6}>
              <Button onClick={Liked}><ThumbUpIcon/></Button>
              <Button onClick={Disliked}><ThumbDownIcon/></Button>
              
              

            </Grid>

          </Grid>


        </CardContent>
      </CardActionArea>
    </Card>

                </Grid>
               
          
            
            
            </>
        )
       }) 
    }
                

                </Grid>
                <Box sx={{display:"flex",justifyContent:"center",marginTop:"2rem",marginBottom:"2rem"}}>
                  <Button variant="contained" onClick={LoadMoreCrads} sx={{backgroundColor:"#ef4444"}}>Load 
                    More</Button></Box>


      
        </Container>


    </Layout>


    
    </>
  )
}

export default BasketBallPlayerCard