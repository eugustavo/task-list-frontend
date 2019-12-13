import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../services/api';


export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/userfind', { email, password });

    if (response.data.email !== email && response.data.password !== password) {
      return toast.error(response.data.message);
    }
    const { _id } = response.data;
    localStorage.setItem('user', _id);
    history.push('/dashboard');
  }

  return (
    <>
      <ToastContainer />
      <p>
        Crie suas <strong>tarefas</strong> e nunca mais esqueça das coisas :D
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL</label>
        <input
          type="email"
          id="email"
          placeholder="Seu e-mail incrível"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          placeholder="Sua senha incrível"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  );
}
