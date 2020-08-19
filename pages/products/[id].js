import Layout from '../../components/layout'
import {getAllProductIds, getProductData } from '../../lib/products'
import Link from 'next/link'
export const config = { amp: true } 
export default function Post({postData}) {
    // console.log(postData,"findout");
    
  return <Layout>

<div class="container">
 
  <div class="row">
    <div class="col-6">
        {/* <div class="row-2">
        Title:  {postData.data[0].title}
        </div>
        <div class="row-2">
        Title:  {postData.data[0].title}
        </div> 
         <div class="row-2">
        Title:  {postData.data[0].title}
        </div> */}

<div class="jumbotron">
  <h1 class="display-4">{postData.data[0].title}</h1>
  <p class="lead">PRICE : {postData.data[0].price} INR</p>
  <hr class="my-4" />
  <p>{postData.data[0].description} </p>
  <Link href="/checkout/[id]" as={`/checkout/${postData.data[0].id}`}>
  <a class="btn btn-primary btn-lg">CHECK OUT</a>
  </Link>
</div>
    </div>
    <div class="col-6">
    <img src={postData.data[0].image} alt="product" height="400" width="500"></img>

    </div>
  </div>
</div>
       {/* Title:  {postData.data[0].title}
      <br />
     Id: {postData.data[0].id}
      <br />
    Price:  {postData.data[0].price}
      <br />
      <img src={postData.data[0].image} alt="product" height="400" width="500"></img>
      <br />
    Description  {postData.data[0].description}
      <br /> */}
  </Layout>
}

export async function getStaticPaths() {
    const paths =await getAllProductIds()
    // console.log(paths,"look here");
    
    return {
      paths,
      fallback: false
    }
  }


export async function getStaticProps({ params }) {
    // console.log(params,"staticprops");
    // let newId=JSON.stringify()
    
    const postData =await getProductData(params.id)
    // console.log(postData,"postData");

    return {
      props: {
        postData
      }
    }
  }