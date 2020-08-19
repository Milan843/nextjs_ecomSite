import fs from 'fs'
import path from 'path'
var faker = require('faker');
import fetch from "isomorphic-fetch"

let rawdata = fs.readFileSync('productList.json');
let products = JSON.parse(rawdata);
export async function productData(){


//   const res= await fetch('https://fakestoreapi.com/products?limit=5')
//   const res= await fetch('https://fakestoreapi.com/products/category/apple?limit=5')
// .then(res=>res.json())
// .then(json=>console.log(json)) category/jewelery

//    for(var i=0;i<=10;i++){
//     var productName = faker.commerce.productName(); 
//     var price=faker.commerce.price()
//     var product=faker.commerce.product()
//     var color=faker.commerce.color()
//     data.push({productName,price,product,color})
//    }
// console.log(data ,"in lib static generation");

// console.log(products,"good work");

return products
// return res.json()


}

export async function getAllProductIds() {
//   const res= await fetch('https://fakestoreapi.com/products?limit=5')
//   const res= await fetch(`https://fakestoreapi.com/products/${id}`)
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    // let allData=await res.json()
    // console.log(allData,"hereeeee");
    
    return products.map(product => {
      return {
        params: {
          id: product.id.toString()      
        }
      }
    })
  }

  export async function getProductData(id) {
      
      let newId=parseInt(id)
let data={}
//     const res= await fetch(`https://fakestoreapi.com/products/${newId}`)
//     .then(res=>data=res.json())
   

//   console.log( data.Promise,"productdata");
  
 let particularProduct= products.filter(prod=>prod.id==id)

    // Combine the data with the id
    return {
      id,
      data:particularProduct
    }
  }