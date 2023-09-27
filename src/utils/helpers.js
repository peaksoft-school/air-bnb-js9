import * as yup from 'yup'
import house1 from '../assets/images/popularHouse1.png'
import house2 from '../assets/images/popularHouse2.png'
import house3 from '../assets/images/popularHouse3.png'
import detailHouse2 from '../assets/images/houseDeteil2.png'
import detailHouse4 from '../assets/images/houseDeteil4.png'
import detailHouse3 from '../assets/images/houseDeteil3.png'

export const iconNew =
   'data:image/png;base64,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'

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
   { id: 'option8', name: 'Popular', value: 'Popular' },
   { id: 'option9', name: 'The latest', value: 'The latest' },
]

export const homeType = [
   { id: 'option34', name: 'All', value: 'all' },
   { id: 'option10', name: 'Apartment', value: 'APARTMENT' },
   { id: 'option11', name: 'House', value: 'HOUSE' },
]

export const homeTypeProfile = [
   { id: 'option215', name: 'All', value: 'all' },
   { id: 'option10', name: 'Apartment', value: 'APARTMENT' },
   { id: 'option11', name: 'House', value: 'HOUSE' },
]

export const popularProfile = [
   { id: 'option112', name: 'all' },
   { id: 'option8', name: 'popular', value: 'LOW_TO_HIGH' },
   { id: 'option9', name: 'un popular', value: 'HIGH_TO_LOW' },
]

export const price = [
   { id: 'option12', name: 'All', value: 'all' },
   { id: 'option12', name: 'Low to high', value: 'LOW_TO_HIGH' },
   { id: 'option13', name: 'High to low', value: 'HIGH_TO_LOW' },
]

export const userPrice = [
   { id: 'option34', name: 'All', value: 'all' },
   { id: 'option12', name: 'Low to high', value: 'Low to high' },
   { id: 'option13', name: 'High to low', value: 'High to low' },
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
