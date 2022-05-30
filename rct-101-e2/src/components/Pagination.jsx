import React from "react";

import { Button, ButtonGroup, Select } from '@chakra-ui/react'

const Pagination = ({ handleClick }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  const onChange = (value) => {
  }

  return (
    <ButtonGroup>
      <Button colorScheme='teal' variant='link' data-cy="pagination-first-button">first</Button>
      <Button colorScheme='teal' variant='link' data-cy="pagination-previous-button">prev</Button>
      <Select data-cy="pagination-limit-select" onChange={onChange}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button colorScheme='teal' variant='link' data-cy="pagination-next-button" onClick={() => handleClick(-1)}>Next</Button>
      <Button colorScheme='teal' variant='link' data-cy="pagination-last-button" onClick={() => handleClick(1)}>last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
