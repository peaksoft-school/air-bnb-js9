import * as yup from 'yup'
import house1 from '../assets/images/popularHouse1.png'
import house2 from '../assets/images/popularHouse2.png'
import house3 from '../assets/images/popularHouse3.png'
import detailHouse2 from '../assets/images/houseDeteil2.png'
import detailHouse4 from '../assets/images/houseDeteil4.png'
import detailHouse3 from '../assets/images/houseDeteil3.png'

export const regions = [
   { id: 'option0', name: 'All', value: 'All' },
   { id: 'option1', name: 'Batken', value: 'BATKEN' },
   { id: 'option2', name: 'Osh', value: 'OSH' },
   { id: 'option3', name: 'Jalalabad', value: 'JALAL_ABAD' },
   { id: 'option4', name: 'Chui', value: 'CHUI' },
   { id: 'option5', name: 'Naryn', value: 'NARYN' },
   { id: 'option6', name: 'Talas', value: 'TALAS' },
   { id: 'option7', name: 'Issyk-Kul', value: 'ISSYK_KUL' },
   { id: 'option8', name: 'Biskek', value: 'BISHKEK' },
]
export const popular = [
   { id: 'option39', name: 'All', value: 'All' },
   { id: 'option8', name: 'Popular', value: 'desc' },
   { id: 'option9', name: 'The latest', value: 'asc' },
]

export const homeType = [
   { id: 'option40', name: 'All', value: 'All' },
   { id: 'option10', name: 'Apartment', value: 'APARTMENT' },
   { id: 'option11', name: 'House', value: 'HOUSE' },
]

export const homeTypeProfile = [
   { id: 'option10', name: 'Apartment', value: 'APARTMENT' },
   { id: 'option11', name: 'House', value: 'HOUSE' },
]
export const popularProfile = [
   { id: 'option8', name: 'popular', value: 'LOW_TO_HIGH' },
   { id: 'option9', name: 'un popular', value: 'HIGH_TO_LOW' },
]

export const price = [
   { id: 'option41', name: 'All', value: 'All' },
   { id: 'option12', name: 'Low to high', value: 'LOW_TO_HIGH' },
   { id: 'option13', name: 'High to low', value: 'HIGH_TO_LOW' },
]

export const userPrice = [
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

export const data = [
   {
      name: 'Bars Barsov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 2,
      like: 4,
      dislike: 2,
      avatar:
         'https://ca.slack-edge.com/T023L1WBFLH-U04553S5F4Y-b3857864c0e6-512',
   },
   {
      name: 'Beku Bekov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 3,
      like: 1,
      dislike: 5,
      avatar: '',
   },
   {
      name: 'Aziret Aziretov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 4,
      like: 5,
      dislike: 3,
      avatar:
         'https://ca.slack-edge.com/T023L1WBFLH-U03E00N1USF-0fc4b2f5d54e-512',
   },
   {
      name: 'Emir Emirov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 5,
      like: 4,
      dislike: 1,
      avatar: '',
   },
   {
      name: 'Aziret Aziretov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 4,
      like: 5,
      dislike: 3,
      avatar:
         'https://ca.slack-edge.com/T023L1WBFLH-U03E00N1USF-0fc4b2f5d54e-512',
   },
   {
      name: 'Bars Barsov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      starRating: 2,
      like: 4,
      dislike: 2,
      avatar:
         'https://ca.slack-edge.com/T023L1WBFLH-U04553S5F4Y-b3857864c0e6-512',
   },
]

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
