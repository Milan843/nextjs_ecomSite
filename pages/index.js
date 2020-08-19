import Head from "next/head";
import React, { useState, useEffect } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { productData } from "../lib/products";
import Link from "next/link";

export default function Home({ allProductdata }) {
  const [productSelected, setproductSelected] = useState(allProductdata);
  const [term, setTerm] = useState("");
  // useEffect(()=>{
  //   setproductSelected(allProductdata)
  // })
  let onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("submit",term,productSelected.length);
    setproductSelected(productSelected.filter((prod) => prod.category == term));
  };
  return (
    <Layout home>
      <div className="search-bar ui segment">
        <form onSubmit={onFormSubmit} className="ui-form">
          <div className="field">
            <label>Select an product category </label>
            <br />
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
      <section>
        <h2>Product List</h2>
        <ul>
          {productSelected.map(({ id, price, title, category, image }) => (
            <div class="card mb-3">
              <img
                class="card-img-top"
                src={image}
                alt="Card image cap"
                height="400"
                width="500"
              />
              <div class="card-body">
                <h5 class="card-title">Category: {category}</h5>
                <p class="card-text">Title: {title}</p>
                <p class="card-text">
                  <small class="text-muted">Price: {price}</small>
                </p>
                <Link href="/products/[id]" as={`/products/${id}`}>
                  <a class="btn btn-primary">View Product</a>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProductdata = await productData();
  // console.log(allProductdata,"getstaticProps");

  return {
    props: {
      allProductdata,
    },
  };
}
