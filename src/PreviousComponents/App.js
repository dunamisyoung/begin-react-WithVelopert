import React, { useMemo, useReducer, createContext } from 'react';
import produce from 'immer';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countAciveUsers(users) {
  console.log('활성 사용자 수를 세는중 ..');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'dunamisyoung',
      email: 'public.dunamisyoung@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tangerinePeanut',
      email: 'public.tangerinePeanut@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'eiluoso',
      email: 'public.eiluoso@gmail.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    // return {
    //   inputs: initialState.inputs,
    //   users: state.users.concat(action.user),
    // };
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    // return {
    //   ...state,
    //   users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
    // };
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   ...state,
    //   users: state.users.filter((user) => user.id !== action.id),
    // };

    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countAciveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
