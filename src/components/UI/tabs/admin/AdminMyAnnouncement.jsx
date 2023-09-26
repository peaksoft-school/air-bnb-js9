import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { AdminCards } from '../../cards/admin/AdminCards'

export function AdminMyAnnouncement() {
   const { announcements } = useSelector((state) => state.admin)
   console.log(announcements, 'announcements')
   return (
      <div>
         {announcements?.length === 0 ? (
            <NoCard>Уou dont have a cards</NoCard>
         ) : (
            <AdminCards
               data={announcements}
               image
               imagesClick="click"
               toPath="true"
            />
         )}
      </div>
   )
}
const NoCard = styled('div')`
   border: 4px dashed #dd8a08;
   padding: 20px;
   text-align: center;
   font-size: 18px;
   color: #555;
   background-color: #f9f9f9;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   max-width: 300px;
   margin-left: 16.6rem;
   margin-top: 5rem;
`

// const Container = styled('div')`
//    padding: 3% 0px;
//    width: 100%;
//    flex-direction: column;
//    justify-content: start;
// `
