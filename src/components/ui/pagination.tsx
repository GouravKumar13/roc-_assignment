import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButtons({ count, handleChange }) {
  return (
    <Stack  >
      <Pagination count={count} onChange={handleChange} showFirstButton showLastButton />

    </Stack>
  );
}