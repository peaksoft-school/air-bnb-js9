import * as yup from 'yup'
import house1 from '../assets/images/popularHouse1.png'
import house2 from '../assets/images/popularHouse2.png'
import house3 from '../assets/images/popularHouse3.png'
import detailHouse2 from '../assets/images/houseDeteil2.png'
import detailHouse4 from '../assets/images/houseDeteil4.png'
import detailHouse3 from '../assets/images/houseDeteil3.png'

export const regions = [
   { id: 'option1', name: 'Batken' },
   { id: 'option2', name: 'Osh' },
   { id: 'option3', name: 'Jalal-abad' },
   { id: 'option4', name: 'Chui' },
   { id: 'option5', name: 'Naryn' },
   { id: 'option6', name: 'Talas' },
   { id: 'option7', name: 'Issyk-Kul' },
]
export const popular = [
   { id: 'option8', name: 'popular' },
   { id: 'option9', name: 'un popular' },
]
export const homeType = [
   { id: 'option21', name: 'All', value: ' ' },
   { id: 'option10', name: 'Apartment', value: 'APARTMENT' },
   { id: 'option11', name: 'House', value: 'HOUSE' },
]

export const price = [
   { id: 'option20', name: 'All', value: ' ' },
   { id: 'option12', name: 'Low to high', value: 'asc' },
   { id: 'option13', name: 'High to low', value: 'desc' },
]

export const popularHouse = [
   {
      img: `${house1}`,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '$26',
      rating: '3.4',
   },
   {
      img: `${house2}`,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '$26',
      rating: '3.4',
   },
   {
      img: `${house3}`,
      title: 'Asman guest house',
      address: '723510 Osh Muzurbek Alimbekov 9/7',
      price: '$26',
      rating: '3.4',
   },
]

export const house = [
   {
      id: 1,
      original: detailHouse2,
      thumbnail: detailHouse2,
   },
   {
      id: 2,
      original: detailHouse4,
      thumbnail: detailHouse4,
   },
   {
      id: 3,
      original: detailHouse2,
      thumbnail: detailHouse2,
   },
   {
      id: 4,
      original: detailHouse3,
      thumbnail: detailHouse3,
   },
]

export const Hotel = [
   {
      nameHotel: 'Name of hotel',
      addresHotel: '12 Morris Ave, Toronto, ON, CA',
      discriptionHotel:
         'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',
      hostAvatar: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      hostName: 'Anna Annova',
      hostEmail: 'anna@gmail.com',
   },
]

export const booked = [
   {
      price: 26,
      checkin: '02.02.22',
      checkout: '02.02.22',
      name: 'Anna Annova',
      email: 'anna@gmail.com',
   },
   {
      price: 26,
      checkin: '02.02.22',
      checkout: '02.02.22',
      name: 'Anna Annova',
      email: 'anna@gmail.com',
   },
   {
      price: 26,
      checkin: '02.02.22',
      checkout: '02.02.22',
      name: 'Anna Annova',
      email: 'anna@gmail.com',
   },
]
export const schema = yup.object().shape({
   houseType: yup
      .string()
      .transform((value) => value.toUpperCase())
      .required('Please select a home type'),
   maxGuests: yup.string().required('Please enter the number of guests'),
   price: yup.string().required('Please enter the price'),
   title: yup.string().required('Please enter a title'),
   description: yup.string().required('Please enter a description'),
   region: yup.string().required('Please select the region'),
   province: yup.string().required('Please enter the town'),
   address: yup.string().required('Please enter the address'),
})

export const bookings = [
   {
      urls: [
         'https://images.pexels.com/photos/17428217/pexels-photo-17428217/free-photo-of-grand-hotel-on-sea-shore-in-llandudno.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      ],
      location: 'ads asf asefafa faf ',
      rating: 97,
      title: 'afdvf asdf asf asf ',
      checkin: '200.20.2012',
      checkout: '1223.213.3123.',
      price: 334,
   },
]
export const announcement = [
   {
      id: 3,
      title: 'announcement',
   },
   {
      id: 4,
      title: 'Beku',
   },
]
export const moderation = [
   {
      id: 5,
      title: 'moderation',
   },
]

export const allHousingBooked = [
   { id: 'option18', name: 'All', value: ' ' },
   { id: 'option14', name: 'Booked', value: 'BOOKED' },
   { id: 'option15', name: 'Not booked', value: 'NOT_BOOKED' },
]

export const allHousingPopular = [
   { id: 'option19', name: 'All', value: ' ' },
   { id: 'option16', name: 'Popular', value: 'asc' },
   { id: 'option17', name: 'The lastest', value: 'desc' },
]
