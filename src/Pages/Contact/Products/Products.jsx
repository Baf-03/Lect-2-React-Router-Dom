
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';
import { Link } from 'react-router-dom';
 
export default function Products() {
  
  let [ApiData,setApiData]=useState([]);

  const getApi=async()=>{
    const response = await axios.get("https://dummyjson.com/products")
    let data=response.data.products
    setApiData(data)
    console.log(data)
    
    
  }
  useEffect(()=>{
   getApi()
  },[])
  useEffect(()=>{
    console.log(ApiData)
  })
  return (
  
      <div className='flex justify-center flex-wrap mt-5 gap-[50px]'>
       {ApiData.length>0?(
        ApiData.map((element)=>{
          return(

            <Card className="mt-6 w-96 " key={element.id}>

          <CardHeader color="blue-gray" className="relative h-[20rem]">
            <img
             src={element.images[0] } className='h-[100%] w-full'
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {element.title}
            </Typography>
            <Typography className='line-clamp-2'>
              {element.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
          <Link to={`/SingleProducts/${element.id}`}><Button>Read More</Button></Link>
          </CardFooter>
        </Card>
          )
          }
       
        )
        
     
       ):(<div className='flex justify-center items-center h-[100vh]'>
        <img src='https://media.tenor.com/iSedznQcBR4AAAAC/hindustani-bhau-ruko-zara.gif'/>Loading</div>)}
        
       
       </div>
      
    

   
  );
}