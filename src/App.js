// function App() {
//    return <div>AirBnB</div>
// }
// export default App
import { useState } from 'react'
import Profile from './components/UI/profile/Profile'

function App() {
   const [logOut, setLogOut] = useState(false)
   const data = [
      {
         name: 'Aziret Aziretov',
         contact: 'aziretov@gmail.com',
         photo: 'https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg',
      },
      {
         name: 'Медер Медербеков',
         contact: 'mederbekov@gmail.com',
         photo: '',
      },
      {
         name: 'Bars Barsov',
         contact: 'barsbekov@gmail.com',
         photo: 'https://tmssl.akamaized.net/images/foto/galerie/julian-draxler-psg-1579702897-30255.jpg?lm=1579702910',
      },
      {
         name: 'Emir Emirov',
         contact: 'emirov@gmail.com',
      },
      {
         name: 'Beku Bekov',
         contact: 'bekuov@gmail.com',
      },
   ]

   const onClick = () => {
      setLogOut(!logOut)
   }

   return (
      <div className="App">
         <button type="button" onClick={onClick}>
            click me
         </button>
         {data.map((el) => (
            <Profile data={el} logOut={logOut} />
         ))}
      </div>
   )
}

export default App
