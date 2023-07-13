import Feedback from './components/UI/feedback/Feedback'

function App() {
   const data = [
      {
         name: 'Anna Annova',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six years old and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      },
      {
         name: 'Bars Barsov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six years old and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      },
      {
         name: 'Aziret Aziretov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six years old and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      },
      {
         name: 'Beku Bekuov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six years old and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      },
      {
         name: 'Emir Emirov',
         comment:
            'Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six years old and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks w.',
      },
   ]

   return (
      <div>
         {data.map((el) => (
            <Feedback data={el} />
         ))}
      </div>
   )
}
export default App
