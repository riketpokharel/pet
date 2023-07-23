import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  "../../style/Singlepage.css";
import { Button } from '@chakra-ui/react';


export const SinglePage = () => {
    const [page,setPage]=useState({})
    const {id}=useParams()


    const singleData=()=>{
        axios.get(`https://shy-erin-perch-kit.cyclic.app/cats/get/${id}`)
        .then((res)=>{
            setPage(res.data)
            //console.log(res.data); 
        })
        .catch((err)=>console.log(err))
    }
    

    useEffect(()=>{
        singleData() 
      
    },[])

    console.log(page)
    

  return (
    <div>
        <div className='singlePageContainer'>
     
     <div className='singlePageimg'>
       <img src={page.image} alt="" />
     </div>
     <div className='singlePageData'>
        <header>DETAILS</header>
       <div>
       <h1>Name: {page.cat_name}</h1>
       <h2>Breed: {page.breed}</h2>
       <h3>Age: {page.age}</h3>
       <h4>Price: ${page.price}/-</h4>
       <br />
       <p>Price Inclusive of all taxes</p>
       </div>
       <br />
      <div className='singlePageDetails'>
      <h1> About {page.cat_name}</h1>
      <br />
         <p>Introducing {page.description}</p>
      </div>
      <Button variant={'outline'} >BUY</Button>
     </div>
    
 </div>
 <div>
         
     </div>
    </div>
  )
}
