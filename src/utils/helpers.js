import * as yup from 'yup'
import house1 from '../assets/images/popularHouse1.png'
import house2 from '../assets/images/popularHouse2.png'
import house3 from '../assets/images/popularHouse3.png'
import detailHouse2 from '../assets/images/houseDeteil2.png'
import detailHouse4 from '../assets/images/houseDeteil4.png'
import detailHouse3 from '../assets/images/houseDeteil3.png'

export const regions = [
   { id: 'option34', name: 'All', value: 'all' },
   { id: 'option1', name: 'Batken', value: 'BATKEN' },
   { id: 'option2', name: 'Osh', value: 'OSH' },
   { id: 'option3', name: 'Jalal-Abad', value: 'JALAL_ABAD' },
   { id: 'option4', name: 'Chui', value: 'CHUI' },
   { id: 'option5', name: 'Naryn', value: 'NARYN' },
   { id: 'option6', name: 'Talas', value: 'TALAS' },
   { id: 'option7', name: 'Issyk-Kul', value: 'ISSYK_KUL' },
   { id: 'option8', name: 'Bishkek', value: 'BISHKEK' },
]

export const popular = [
   { id: 'option34', name: 'All', value: 'all' },
   { id: 'option8', name: 'Popular', value: 'desc' },
   { id: 'option9', name: 'The latest', value: 'asc' },
]

export const homeType = [
   { id: 'option34', name: 'All', value: 'all' },
   { id: 'option10', name: 'Apartment', value: 'APARTMENT' },
   { id: 'option11', name: 'House', value: 'HOUSE' },
]

export const homeTypeProfile = [
   // { id: 'option215', nam  e: 'All', value: ' All' },
   { id: 'option10', name: 'Apartment', value: 'APARTMENT' },
   { id: 'option11', name: 'House', value: 'HOUSE' },
]

export const popularProfile = [
   // { id: 'option112', name: 'All' },
   { id: 'option8', name: 'popular', value: 'LOW_TO_HIGH' },
   { id: 'option9', name: 'un popular', value: 'HIGH_TO_LOW' },
]

export const price = [
   // { id: 'option12', name: 'All', value: ' ' },
   { id: 'option12', name: 'Low to high', value: 'LOW_TO_HIGH' },
   { id: 'option13', name: 'High to low', value: 'HIGH_TO_LOW' },
]

export const userPrice = [
   { id: 'option34', name: 'All', value: 'all' },
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

export const Hotel = {
   houseType: 'APARTMENT ',
   maxGuests: 5,
   region: 'Name of hotel',
   address: '12 Morris Ave, Toronto, ON, CA',
   province: ' Toronto, ON, CA',
   description:
      'The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.',
   hostAvatar: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
   user: {
      fullName: 'Anna Annova',
      email: 'anna@gmail.com',
   },
   userFullName: 'Anna Annova',
   userEmail: 'anna@gmail.com',
}

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
      feedbackUserFullName: 'Barsbek Makhmatov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      rating: 2,
      likeCount: 4,
      disLikeCount: 2,
      feedbackUserImage:
         'https://ca.slack-edge.com/T023L1WBFLH-U04553S5F4Y-b3857864c0e6-512',
      createdAt: '29-11-2023',
      id: '1',
   },
   {
      feedbackUserFullName: 'Beku Bekov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      rating: 3,
      likeCount: 1,
      disLikeCount: 5,
      feedbackUserImage: '',
      createdAt: '29-11-2023',
      id: '2',
   },
   {
      feedbackUserFullName: 'Aziret Aziretov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      rating: 4,
      likeCount: 5,
      disLikeCount: 3,
      feedbackUserImage:
         'https://ca.slack-edge.com/T023L1WBFLH-U03E00N1USF-0fc4b2f5d54e-512',
      images: [
         'https://www.diybunker.com/wp-content/uploads/2021/09/home-2-1024x751.jpg',
         'https://foyr.com/learn/wp-content/uploads/2022/05/family-room-in-a-house-1024x683.jpg',
         'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2021/10/18115838/modern-house-design.jpg',
         'https://archello.s3.eu-central-1.amazonaws.com/images/2020/06/20/Contemporary-House-Interior-Design-1.1592613106.9601.jpg',
      ],
      createdAt: '29-11-2023',
      id: '3',
   },
   {
      feedbackUserFullName: 'Emir Duishonaliev',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      rating: 5,
      likeCount: 4,
      disLikeCount: 1,
      feedbackUserImage: '',
      createdAt: '29-11-2023',
      id: '4',
   },
   {
      feedbackUserFullName: 'Aziret Aziretov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      rating: 4,
      likeCount: 5,
      disLikeCount: 3,
      feedbackUserImage:
         'https://ca.slack-edge.com/T023L1WBFLH-U03E00N1USF-0fc4b2f5d54e-512',
      createdAt: '29-11-2023',
      id: '5',
   },
   {
      feedbackUserFullName: 'Bars Barsov',
      comment:
         'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      rating: 2,
      likeCount: 4,
      disLikeCount: 2,
      feedbackUserImage:
         'https://ca.slack-edge.com/T023L1WBFLH-U04553S5F4Y-b3857864c0e6-512',
      createdAt: '29-11-2023',
      id: '6',
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

export const allHousingBooked = [
   { id: 'option18', name: 'All', value: 'all' },
   { id: 'option14', name: 'Booked', value: 'BOOKED' },
   { id: 'option15', name: 'Not booked', value: 'NOT_BOOKED' },
]

export const allHousingPopular = [
   { id: 'option19', name: 'All', value: 'all' },
   { id: 'option16', name: 'Popular', value: 'asc' },
   { id: 'option17', name: 'The lastest', value: 'desc' },
]

export const allPrice = [
   { id: 'option20', name: 'All', value: 'all' },
   { id: 'option12', name: 'Low to high', value: 'asc' },
   { id: 'option13', name: 'High to low', value: 'desc' },
]

export const addRegions = [
   { id: 'option1', name: 'BATKEN', value: 'BATKEN' },
   { id: 'option2', name: 'JALAL-ABAD', value: 'JALAL_ABAD' },
   { id: 'option3', name: 'YSSYK-KOL', value: 'YSSYK-KOL' },
   { id: 'option4', name: 'NARYN', value: 'NARYN' },
   { id: 'option5', name: 'OSH', value: 'OSH' },
   { id: 'option6', name: 'TALAS', value: 'TALAS' },
   { id: 'option7', name: 'CHUI', value: 'CHUI' },
]
