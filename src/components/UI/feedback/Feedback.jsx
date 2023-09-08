import { Avatar, IconButton, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'
import { Dislike, IconMenu, Like1 } from '../../../assets/icons/index'
import { MeatBalls } from '../meat-balls/MeatBalls'
import { RatingStars } from '../rating/RatingStars'

export default function Feedback({ data, onLike, onDislike }) {
   const { avatar, comment, dislike, like, name, starRating } = data

   const [currentEl, setCurrentEl] = useState(null)
   const [showFullText, setShowFullText] = useState(false)

   const maxLength = 215

   const toggleText = () => {
      if (comment.length <= maxLength) {
         setShowFullText(false)
      } else if (comment.length >= maxLength) {
         setShowFullText(!showFullText)
      }
   }

   const truncatedText = comment.substring(0, maxLength)

   const toggle = (e) => {
      setCurrentEl(e.currentTarget)
   }

   const closeHandler = () => {
      setCurrentEl(null)
   }

   const open = Boolean(currentEl)
   const meatBallId = open ? 'simple-popover' : undefined
   return (
      <Container>
         <Block>
            <UserInfoBlock>
               <div>
                  <Avatar
                     style={{ marginRight: '13px' }}
                     src={avatar && avatar}
                  >
                     {avatar || name[0]}
                  </Avatar>
               </div>

               <div>
                  <RatingAndNameBlock>
                     <h4 style={{ marginRight: '10px' }}>{name}</h4>

                     <RatingStars starRating={starRating} />
                     <StyledSpan>({starRating})</StyledSpan>
                  </RatingAndNameBlock>

                  <span style={{ color: '#828282' }}>28.04.22</span>
               </div>
            </UserInfoBlock>

            <div>
               <IconMenu onClick={toggle} />
               <MeatBalls
                  anchorEl={currentEl}
                  open={open}
                  close={closeHandler}
                  id={meatBallId}
                  width=" 11.25rem"
                  height="5.5rem"
               >
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Delete</MenuItem>
               </MeatBalls>
            </div>
         </Block>

         <CommentBlock>
            <p>
               {showFullText ? (
                  <span> {comment} </span>
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
               <p>{like}</p>
            </StyledIconButton>

            <StyledIconButton onClick={onDislike}>
               <Dislike />
               <p> {dislike}</p>
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
   marginTop: '.5625rem',
}))

const ShowMoreAndLess = styled('button')(() => ({
   color: ' var(--tertiary-blue, #266BD3)',
   lineHeight: '130%',
   textDecorationLine: 'underline',
   background: 'none',
   border: 'none',
   cursor: 'pointer',
   fontSize: '1rem',
}))
