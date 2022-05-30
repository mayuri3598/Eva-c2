import React, { useEffect, useState } from "react";
import AddProduct from './AddProduct';
import Pagination from './Pagination';
import Product from "./Product";
import axios from "axios";
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import styles from "./Products.module.css"

const Products = () => {

  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);

  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;


  useEffect(() => {
    const getData = (page) => {
      axios.get(`http://localhost:8080/products?_page=${page}_limit=2`).then(({ data }) => {
        console.log(data);
        setProductList(data);
      })
    }
    getData();
  }, [page])


  const handleClick = (value) => {
    setPage(page + value);
  }


  return (
    <Flex className={styles.flexdiv}
      p={4}
      mt={4}>
      {/*  AddProduct */}
      <AddProduct />
      <Grid w="full" gridGap={4} gridTemplateColumns="1fr 1fr 1fr">
        {/* List of Products */}
        {productList.map((list) => (
          <Product key={list.id} {...list} />
        ))}
      </Grid>
      {/* Pagination */}
      <Pagination handleClick={handleClick} />
    </Flex>
  );
};

export default Products;
