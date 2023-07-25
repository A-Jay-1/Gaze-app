import photo1 from "C:/Users/LENOVO/OneDrive/Documents/Gaze/my-app/src/Images/sunil-damor-SHJ5gqk2myE-unsplash.jpg";
import photo2 from "C:/Users/LENOVO/OneDrive/Documents/Gaze/my-app/src/Images/richard-jaimes-s97-KYat9sA-unsplash.jpg";
import photo3 from "C:/Users/LENOVO/OneDrive/Documents/Gaze/my-app/src/Images/robbie-down-f3vwAXn7pgg-unsplash.jpg";
import photo4 from "C:/Users/LENOVO/OneDrive/Documents/Gaze/my-app/src/Images/mika-ruusunen-W0i1N6FdCWA-unsplash.jpg";
/* import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function MasonryImageList() {
    return (
      <Box sx={{ width: 800, height: 750, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  }


const itemData= [
    {
   img: "./aleksandr-ledogorov-G-JJy-Yv_dA-unsplash.jpg",
   title: "photo1",
    },
    {
    img: "./danie-franco-l9I93gZKTG4-unsplash.jpg",
    title: "photo2"
    },
   {
    img: "./malcolm-lightbody-LozSjBBVgYQ-unsplash.jpg",
    title: "photo3"
   },
   {
    img:  "./mika-ruusunen-W0i1N6FdCWA-unsplash.jpg",
    title:"photo4"
   },
   {
    img:"./richard-jaimes-s97-KYat9sA-unsplash.jpg",
    title: "photo5"
   },
   {
    img: "./robbie-down-f3vwAXn7pgg-unsplash.jpg",
    title:"photo6"
   },
   {
    img:"./sunil-damor-SHJ5gqk2myE-unsplash.jpg",
    title:"photo7"
   }
   
    
];

/* 
{
    img: "./omid-armin-Bo-nfOGTFPE-unsplash.jpg",
    title:"photo8"
   },
   {
    img:    "./s-tsuchiya-XP77927UGxE-unsplash.jpg",
    title:"photo9"
   },
   {
    img:    "./axp-photography-8TJQiISauTs-unsplash.jpg",
    title:"photo10"
   },
   {
    img:    "./eamonn-wang-ux3kKvHxXmI-unsplash.jpg",
    title:"photo11"
   },
   {
    img:"./chirag-dulyan-qOd6UZdvMC4-unsplash.jpg",
    title:"photo12"
   }
 */
export default function Grid() {
    return (
        <div class="container">
            <div class="card">
                <img src={photo1}/>
                
            </div>
            <div class="card">
                <img src={photo2} />
                
            </div>
            <div class="card">
                <img src={photo3} />
                
            </div>
            <div class="card">
                <img src={photo4} />
                
            </div>
            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg" />
               
            </div>
        </div>
    );
}
