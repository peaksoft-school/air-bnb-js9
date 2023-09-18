/* eslint-disable consistent-return */
import { Avatar, IconButton, MenuItem, Tooltip, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dislike, IconMenu, Like1 } from '../../../assets/icons'
import { MeatBalls } from '../meat-balls/MeatBalls'
import { RatingStars } from '../rating/RatingStars'
import { axiosInstance } from '../../../config/axiosInstance'
import { ModalForEditFeedback } from './ModalForEditFeedback'
import { likeOrDislike } from '../../../api/feedbackService'
import { feedbackGetByIdRequest } from '../../../store/feedback/feedbackThunk'
import { Button } from '../button/Button'

export default function Feedback({ data, announcementBooked }) {
   const {
      feedbackUserImage,
      feedbackUserFullName,
      rating,
      comment,
      images,
      createdAt,
      likeCount,
      disLikeCount,
      id,
   } = data

   const { announcement } = useSelector((state) => state.annByID)

   const parts = createdAt || announcement.checkOut || '01-01-23'?.split('-')
   const formattedDate = `${parts[0]}.${parts[1]}.${parts[2]}`

   const [currentEl, setCurrentEl] = useState(null)
   const [showFullText, setShowFullText] = useState(false)
   const [openModal, setOpenModal] = useState(false)
   const [ratingValue, setRatingValue] = useState(rating)
   const maxLength = 215

   const dispatch = useDispatch()

   const truncateText = (text, maxLength) => {
      if (text?.length > maxLength) {
         return `${text?.slice(0, maxLength)}...`
      }
      return text
   }
   const toggleText = () => {
      if (comment?.length <= maxLength) {
         setShowFullText(false)
      } else if (comment?.length >= maxLength) {
         setShowFullText(!showFullText)
      }
   }

   const truncatedText = comment?.substring(0, maxLength)

   const toggle = (e) => {
      setCurrentEl(e.currentTarget)
   }

   const closeHandler = () => {
      setCurrentEl(null)
   }

   const deleteFeedback = async (feedbackId) => {
      try {
         const response = await axiosInstance.delete(
            `/api/feedbacks/${feedbackId}`
         )
         dispatch(feedbackGetByIdRequest())
         return response.data
      } catch (error) {
         console.error(error)
      }
   }

   const editFeedback = () => {
      setOpenModal((prev) => !prev)
   }

   const likeHandler = async (like) => {
      try {
         const response = await likeOrDislike(id, like)
         dispatch(feedbackGetByIdRequest())
         return response.data
      } catch (error) {
         console.error(error)
      }
   }

   console.log('images:', images)

   const open = Boolean(currentEl)
   const meatBallId = open ? 'simple-popover' : undefined
   return (
      <div>
         {announcement.feedbackUserImage ||
         announcement.feedbackUserFullName ? (
            <div>
               {announcementBooked ? (
                  <Container>
                     <Block>
                        <UserInfoBlockForBooked>
                           <AvatarAndNameBlock>
                              <Avatar
                                 style={{ marginRight: '13px' }}
                                 src={feedbackUserImage && feedbackUserImage}
                              >
                                 {feedbackUserImage || feedbackUserFullName}
                              </Avatar>
                              <h4
                                 style={{
                                    marginRight: '10px',
                                 }}
                              >
                                 <Tooltip title={feedbackUserFullName}>
                                    {truncateText(feedbackUserFullName, 20)}
                                 </Tooltip>
                              </h4>
                           </AvatarAndNameBlock>

                           <RatingAndNameBlock>
                              <RatingStars
                                 ratingValue={ratingValue}
                                 setRatingValue={setRatingValue}
                              />
                              <StyledSpan>{ratingValue}</StyledSpan>
                           </RatingAndNameBlock>
                        </UserInfoBlockForBooked>
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

                     <div>
                        {images?.map((houseImg) => (
                           <StyledImg src={houseImg} alt="house" />
                        ))}
                     </div>

                     <GradeBlockForBooked>
                        <div>
                           <span style={{ color: '#828282' }}>
                              {formattedDate}
                           </span>
                        </div>

                        <div style={{ display: 'flex' }}>
                           <StyledIconButton
                              onClick={() => likeHandler('like')}
                           >
                              <Like1 />
                              <p>{likeCount}</p>
                           </StyledIconButton>

                           <StyledIconButton
                              onClick={() => likeHandler('DisLike')}
                           >
                              <Dislike />
                              <p> {disLikeCount}</p>
                           </StyledIconButton>
                        </div>
                     </GradeBlockForBooked>
                     {/* <h3> show more</h3> */}
                     <Button width="39.375rem">leave feedback</Button>
                  </Container>
               ) : (
                  <Container>
                     <Block>
                        <UserInfoBlock>
                           <div>
                              <Avatar
                                 style={{ marginRight: '13px' }}
                                 src={feedbackUserImage && feedbackUserImage}
                              >
                                 {feedbackUserImage}
                              </Avatar>
                           </div>

                           <div>
                              <RatingAndNameBlock>
                                 <h4 style={{ marginRight: '10px' }}>
                                    <Tooltip title={feedbackUserFullName}>
                                       {truncateText(feedbackUserFullName, 20)}
                                    </Tooltip>
                                 </h4>

                                 <RatingStars
                                    ratingValue={ratingValue}
                                    setRatingValue={setRatingValue}
                                 />
                                 <StyledSpan>({ratingValue})</StyledSpan>
                              </RatingAndNameBlock>

                              <span style={{ color: '#828282' }}>
                                 {formattedDate}
                              </span>
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
                              <MenuItem onClick={editFeedback}>Edit</MenuItem>
                              <MenuItem onClick={() => deleteFeedback(id)}>
                                 Delete
                              </MenuItem>
                           </MeatBalls>
                        </div>
                        {openModal && (
                           <ModalForEditFeedback
                              openModal={openModal}
                              setOpenModal={setOpenModal}
                              feedbackComment={comment}
                              feedbackImages={images}
                              id={id}
                           />
                        )}
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

                     <div>
                        {images?.length > 0
                           ? images?.map((houseImg) => (
                                <StyledImg src={houseImg} alt="house" />
                             ))
                           : null}
                     </div>

                     <GradeBlock>
                        <StyledIconButton onClick={() => likeHandler('like')}>
                           <Like1 />
                           <p>{likeCount} </p>
                        </StyledIconButton>

                        <StyledIconButton
                           onClick={() => likeHandler('DisLike')}
                        >
                           <Dislike />
                           <p> {disLikeCount}</p>
                        </StyledIconButton>
                     </GradeBlock>
                  </Container>
               )}
            </div>
         ) : (
            <h2>there is no feedback...</h2>
         )}
      </div>
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
const UserInfoBlockForBooked = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '0.9375rem',
}))

const RatingAndNameBlock = styled('div')(() => ({
   display: 'flex',
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
const GradeBlockForBooked = styled('div')(() => ({
   width: '7.1875rem',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: '1.25rem',
   gap: '27.6875rem',
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

const AvatarAndNameBlock = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
}))

const StyledImg = styled('img')(() => ({
   width: '5rem',
   height: '5rem',
   marginTop: '1rem',
   marginLeft: '0.13rem',
}))
