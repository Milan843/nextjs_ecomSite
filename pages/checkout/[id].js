import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { getAllProductIds, getProductData } from "../../lib/products";
export const config = { amp: true };
export default function Checkout({ postData }) {
  console.log(postData, "findout");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [mobile, setMobile] = useState("");
  const [coupon, setCoupon] = useState("");

  return (
    <Layout>
      <div class="container">
        <h1 class="display-4">Check Out Page</h1>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h3>Product Name</h3>
            <p class="lead">{postData.data[0].title}</p>
          </div>
        </div>
        <form>
          <h4 class="display-6">Please enter your details</h4>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Contact Name</label>
              <input
                type="password"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="form-control"
                id="inputPassword4"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Mobile</label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                class="form-control"
                id="inputCity"
              />
            </div>

            <div class="form-group col-md-2">
              <label for="inputZip">Coupon Code</label>
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                class="form-control"
                id="inputZip"
              />
            </div>
          </div>

          <Link href="/">
            <a type="submit" class="btn btn-primary">
              CHECK OUT
            </a>
          </Link>
        </form>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllProductIds();
  // console.log(paths,"look here");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // let newId=JSON.stringify()

  const postData = await getProductData(params.id);

  return {
    props: {
      postData,
    },
  };
}
