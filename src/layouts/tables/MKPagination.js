// src/components/MKPagination.js

import React from 'react';
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Icon from "@mui/material/Icon";

const MKPagination = ({ count = 10, page = 1, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: Icon, next: Icon }}
          {...item}
        />
      )}
    />
  );
};

export default MKPagination;
