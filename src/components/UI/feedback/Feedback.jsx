import { Avatar, Rating, styled } from '@mui/material'
import React, { useState } from 'react'
import { Dislike, Like1 } from '../../../assets/icons'
import { MenuEditAndDelete } from '../menu/MenuEditAndDelete'

export default function Feedback({ data }) {
   const [value, setValue] = useState(2)
   const [open, setOpen] = useState(false)

   const toggle = () => {
      setOpen((prev) => !prev)
   }
   return (
      <Container>
         <Block>
            <UserInfoBlock>
               <div>
                  <Avatar style={{ marginRight: '13px' }}>
                     {data.name[0]}
                  </Avatar>
               </div>

               <div>
                  <RatingAndNameBlock>
                     <h4>{data.name}</h4>
                     <Rating
                        style={{ marginLeft: '9px' }}
                        value={value}
                        onChange={(event, newValue) => {
                           setValue(newValue)
                        }}
                     />
                     <StyledSpan>({value})</StyledSpan>
                  </RatingAndNameBlock>

                  <span style={{ color: '#828282' }}>28.04.22</span>
               </div>
            </UserInfoBlock>

            <div>
               <MenuEditAndDelete open={open} openHandler={toggle}>
                  <h3>Edit</h3>
                  <h3>Delete</h3>
               </MenuEditAndDelete>
            </div>
         </Block>

         <p>
            {data.comment}
            <a href="link">See less</a>
         </p>
         <GradeBlock>
            <div>
               <Like1 />6
            </div>

            <div>
               <Dislike /> 2
            </div>
         </GradeBlock>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '39.375rem',
   margin: '0 auto ',
   marginTop: '1.5625rem',
   p: {
      color: '#828282',
      a: {
         marginLeft: '10px',
      },
   },
}))

const Block = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const UserInfoBlock = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-around',
   marginBottom: '0.9375rem',
}))

const RatingAndNameBlock = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap: '0.625rems ',
}))

const StyledSpan = styled('span')(() => ({
   color: '#919191',
   marginLeft: '0.5rem',
}))

const GradeBlock = styled('div')(() => ({
   width: '7.1875rem',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: '1.25rem',

   div: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.3125rem',
   },
}))
