import { Avatar, IconButton, styled } from '@mui/material'
import React, { useState } from 'react'
import { Dislike, Like1 } from '../../../assets/icons'
import { MenuEditAndDelete } from '../menu/MenuEditAndDelete'
import { RatingStars } from '../rating/RatingStars'

export default function Feedback({ data, onLike, onDislike }) {
   const [open, setOpen] = useState(false)
   const [showFullText, setShowFullText] = useState(false)

   const maxLength = 215

   const toggleText = () => {
      if (data.comment.length <= maxLength) {
         setShowFullText(false)
      } else if (data.comment.length >= maxLength) {
         setShowFullText(!showFullText)
      }
   }

   // const truncatedText = data.comment.substring(0, maxLength)
   const truncatedText = data.comment.substring(0, maxLength)

   const toggle = () => {
      setOpen((prev) => !prev)
   }
   return (
      <Container>
         <Block>
            <UserInfoBlock>
               <div>
                  <Avatar
                     style={{ marginRight: '13px' }}
                     src={data.avatar && data.avatar}
                  >
                     {data.avatar || data.name[0]}
                  </Avatar>
               </div>

               <div>
                  <RatingAndNameBlock>
                     <h4>{data.name}</h4>

                     <RatingStars starRating={data.starRating} />
                     <StyledSpan>({data.starRating})</StyledSpan>
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

         <CommentBlock>
            <p>
               {showFullText ? (
                  <span> {data.comment} </span>
               ) : (
                  <span> {truncatedText}</span>
               )}

               <ShowMoreAndLess onClick={toggleText}>
                  {showFullText ? 'See less' : 'See more'}
               </ShowMoreAndLess>
            </p>
         </CommentBlock>

         <GradeBlock>
            <StyledIconButton onClick={onLike}>
               <Like1 />
               <p>{data.like}</p>
            </StyledIconButton>

            <StyledIconButton onClick={onDislike}>
               <Dislike />
               <p> {data.dislike}</p>
            </StyledIconButton>
         </GradeBlock>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '39.375rem',
   marginTop: '1.5625rem',
   p: {
      color: '#828282',
      a: {
         marginLeft: '0.625rem',
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
}))

const StyledIconButton = styled(IconButton)(() => ({
   p: { color: '#000', fontSize: '1rem', paddingLeft: '0.61rem' },
}))

const CommentBlock = styled('div')(() => ({
   width: '36.4375rem',
   marginTop: '-1.25rem',
}))

const ShowMoreAndLess = styled('span')(() => ({
   color: ' var(--tertiary-blue, #266BD3)',
   lineHeight: '130%',
   textDecorationLine: 'underline',
}))
