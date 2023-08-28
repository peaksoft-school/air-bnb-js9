import React from 'react'
import { Pagination, styled } from '@mui/material'
import Stack from '@mui/material/Stack'

export function Paginations({ count, pages }) {
   return (
      <Stack spacing={2}>
         <StylePagination
            count={count}
            color="secondary"
            onChange={(e, value) => pages(value)}
         />
      </Stack>
   )
}

const StylePagination = styled(Pagination)(() => ({
   '.css-rx6kgi-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
      color: ' #DD8A08',
      backgroundColor: '#F7F7F7',
   },
   '.css-rx6kgi-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover': {
      backgroundColor: '#ffff',
      '  &:hover': {
         backgroundColor: ' #DD8A08',
         color: '#fff',
      },
   },
   '.MuiPaginationItem-icon': {
      color: 'var(--secondary-brown, #DD8A08)',
   },
}))
