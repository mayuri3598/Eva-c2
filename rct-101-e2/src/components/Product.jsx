import React from "react";
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Tag, TagLabel } from '@chakra-ui/react'

const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product" boxShadow={"2xl"} rounded={"lg"} p={6}>
      <Image data-cy="product-image" boxSize='200px' src={props.imageSrc} alt='Dan Abramov' />
      <Text fontSize='md' data-cy="product-category">{props.category}</Text>
      <Tag size="sm" variant='solid' colorScheme='teal'>
        <TagLabel data-cy="product-gender" >{props.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title" as='h3' size='lg'>{props.title}</Heading>
      <Box data-cy="product-price"
        as="span" color="gray.600" fontSize="sm">{props.price}</Box>
    </Stack>
  );
};

export default Product;
