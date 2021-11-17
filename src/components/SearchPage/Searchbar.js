import React, {useState} from 'react'
import './Searchbar.css'

const Users= [
    {
      id: 1,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=15',
    firstname: 'Deborah',
    lastname: 'Miller',
    age: '25'
  },
  {
      id: 2,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=18',
    firstname: 'Johannes',
    lastname: 'Myles',
    age: '34'
  },
  {
      id: 3,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=345',
    firstname: 'Britta',
    lastname: 'Rhudinbergh',
    age: '43'
  },
  {
      id: 4,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=44',        
    firstname: 'Olivia',
    lastname: 'Brown',
    age: '44'
  },
  {
      id: 5,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=657',        
    firstname: 'Daniel',
    lastname: 'Rudin',
    age: '32'
  },
  {
      id: 6,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=89',        
    firstname: 'Teressa',
    lastname: 'Sandhurst',
    age: '35'
  },
  {
      id: 7,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=877',        
    firstname: 'Dina',
    lastname: 'Sokolowski',
    age: '28'
  },
  {
      id: 8,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=81',        
    firstname: 'André',
    lastname: 'Szillagy',
    age: '23'
   }, 
  {
      id: 9,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=33',          
    firstname: 'Fabian',
    lastname: 'Stocker',
    age: '45'
  },
  {
      id: 10,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=21',          
    firstname: 'Christian',
    lastname: 'Williams',
    age: '41'
  },      
]

function Searchbar() {
    const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(Users);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = Users.filter((user) => {
        return user.firstname.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(Users);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
      <article className="container">
      <div className="searchbar">
            <div className="searchbar__input">
                <input type="text" value={name} placeholder="Filter users" onChange={filter} />
                <button className="search__btn">Filter</button>
            </div>
            </div>
            <div className="content">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
              <article className="box">
              <img src={user.img} alt={"image"} className="imgA"/>    
              <div key={user.id} className="item-info">
              <h4>{user.firstname}</h4>
              <h4>{user.lastname}</h4>
              <h4>{user.age} year old</h4>
              </div>
              </article>
          ))
        ) : (
          <h1>Results are empty</h1>
        )}
        </div>
      
    </article>        
  );
}



export default Searchbar;