import { styled } from '@mui/material'
import React from 'react'

export function Booked({ item }) {
   return (
      <div>
         <StyleMapContainer>
            <MainMapContainer>
               <div>
                  <Daylinecontainer>
                     <DayPriceContainer>
                        <PriceStyle>${item.price}/</PriceStyle>
                        <DayStyle>day</DayStyle>
                     </DayPriceContainer>
                     <LineStyle />
                  </Daylinecontainer>

                  <CheckConainer>
                     <ChecinContainerStyle>
                        <Checkstyle>Check in</Checkstyle>
                        <Datestyle>{item.checkin}</Datestyle>
                     </ChecinContainerStyle>
                     <ChecinContainerStyle>
                        <Checkstyle>Check out</Checkstyle>
                        <Datestyle>{item.checkout}</Datestyle>
                     </ChecinContainerStyle>
                  </CheckConainer>
               </div>
            </MainMapContainer>
            <UserStyle>
               <Section />
               <div>
                  <NameStyle>{item.name}</NameStyle>
                  <EmailStyle>{item.email}</EmailStyle>
               </div>
            </UserStyle>
         </StyleMapContainer>
      </div>
   )
}
const StyleMapContainer = styled('div')`
   width: 28%;
   height: 15.8131%;
   margin-left: 25%;
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 2rem;
   justify-content: start;
   line-height: 3rem;
   font-size: 1rem;
   font-weight: 400;
   font-style: normal;
`

const MainMapContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: #fff;
   box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.17);
   width: 25rem;
   height: 11rem;
   gap: 90rem;
   line-height: 5rem;
`

const DayPriceContainer = styled('section')`
   display: flex;
   justify-content: center;
`
const PriceStyle = styled('p')`
   color: #000;
   font-size: 1.25rem;
   line-height: normal;
   text-transform: uppercase;
`
const DayStyle = styled('p')`
   color: #6c6c6c;
   line-height: normal;
`
const Section = styled('section')`
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
   background-color: #c4c4c4;
`
const LineStyle = styled('section')`
   background: #c4c4c4;
   width: 22.5rem;
   height: 0.0625rem;
`
const Daylinecontainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.25rem;
`
const Checkstyle = styled('p')`
   color: var(--tertiary-dark-gray, #646464);
   font-size: 0.875rem;
   line-height: 2rem;
`
const CheckConainer = styled('div')`
   display: flex;
   gap: 10rem;
   padding-top: 1.25rem;
   line-height: 3rem;
`
const Datestyle = styled('p')`
   color: var(--primary-black, #363636);
   font-family: Roboto;
   line-height: normal;
`

const UserStyle = styled('div')`
   display: flex;
   gap: 1rem;
   align-self: flex-start;
`
const EmailStyle = styled('p')`
   color: var(--tertiary-middle-gray, #828282);
   line-height: 130%;
`
const ChecinContainerStyle = styled('section')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`
const NameStyle = styled('div')`
   color: #000;
   font-weight: 500;
   line-height: normal;
`
