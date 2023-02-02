import React from 'react';
import { useState } from 'react';
import api from "../api"

const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll());

  const qualitiesClassName = "m-2 badge bg-";

  const handleDelete = (userId) => {
    setUsers(prevState => prevState.filter(user => user._id !== userId));
  };

  const getTitleClassName = () => {
    let classes = "m-2 badge bg-";
    classes += users.length !== 0 ? "primary" : "danger";
    return classes;
  }

  const createTitle = () => {
    let sumOfUsers = users.length;
    let manEnding;
    let partyEnding;
    let tableTitle = `${sumOfUsers} человек${manEnding} тусан${partyEnding} с тобой сегодня`;

    if (users.length >= 2 && users.length <= 4) {
      manEnding = 'а';
      partyEnding = 'ет';
      tableTitle = `${sumOfUsers} человек${manEnding} тусан${partyEnding} с тобой сегодня`;
    } else if (users.length === 0) {
      tableTitle = "Никто с тобой не тусанет";
    } else if (users.length === 1) {
      manEnding = '';
      partyEnding = 'ет';
      tableTitle = `${sumOfUsers} человек${manEnding} тусан${partyEnding} с тобой сегодня`;
    } else {
      manEnding = '';
      partyEnding = 'ут';
      tableTitle = `${sumOfUsers} человек${manEnding} тусан${partyEnding} с тобой сегодня`;
    }

    return tableTitle;
  }

  const renderPharse = () => {
    if (users.length === 0) return '';
    return (
      <>
        {
          users.map((u, i) => (
            <tr key={i} id={i}>
              <td key={u._id + 'name'} id={u._id + 'name'}>{u.name}</td>
              <td key={u._id + i} id={u._id + i}>{u.qualities.map(q => (
                  <span
                        className={qualitiesClassName + q.color}
                        key={q._id}
                        id={q._id}
                        >
                      {q.name}
                  </span>
                ))}
              </td>
              <td key={u.profession._id} id={u.profession._id}>{u.profession.name}</td>
              <td key={u._id + 'meet'} id={u._id + 'meet'}>{u.completedMeetings}</td>
              <td key={u._id + 'prof'} id={u._id + 'prof'}>{u.rate}</td>
              <td key={u._id + 'btn'} id={u._id + 'btn'}>
                <button
                      className="btn bg-danger m-2 text-white"
                      id={u._id}
                      onClick={() => handleDelete(u._id)}
                      >
                  delete
                </button></td>
            </tr>
          ))
        }
      </>
    )
  };

  const createTableHat = () => {
    return (
      <>
        <h2>
          <span className={getTitleClassName()}>
            {createTitle()}
            </span>
        </h2>
      </>
    )
  }

  const createTableBody = () => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderPharse()}
          </tbody>
        </table>
      </>
    )
  }

  return (
    <>
      {createTableHat()}
      {users.length !== 0 ? createTableBody() : ''}
    </>
  )
};

export default Users;

