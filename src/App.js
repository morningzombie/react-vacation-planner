import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

import Vacations from './components/Vacations'
import './App.css';
import CreateVacation from './components/CreateVacation';


const API = "https://acme-users-api-rev.herokuapp.com/api";
console.log(API)
const fetchUser = async () => {
  const storage = window.localStorage;
  const userId = storage.getItem('userId');
  if (userId) {
    try {
      return (await axios.get(`${API}/users/detail/${userId}`)).data;
    }
    catch (ex) {
      storage.removeItem('userId');
      return fetchUser();
    }
  }
  const user = (await axios.get(`${API}/users/random`)).data;
  storage.setItem('userId', user.id);
  return user;
}

export default function App() {
  const [user, setUser] = useState({});
  const [vacations, setVacations] = useState([]);
  const [dates, setDates] = useState({ startDate: '', endDate: '' });

  const createVacation = (vacation) => {
    // return axios.post(`${API}/users/${user.id}/vacations`, vacation)
    //   .then(response => setVacations([...vacations, response.data]));
  }



  const destroyVacation = () => { }



  return (
    <div>
      <h1>Acme Vacation Planner for {user.fullName} ({vacations.length})</h1>
      <CreateVacation createVacation={createVacation} />
      <Vacations vacations={vacations} destroyVacation={destroyVacation} />
      <div>
        {vacations}
      </div>
    </div>
  );
}

// export default { App, CreateVacation };
