import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
//import { Modal, Button } from 'react-bootstrap';

import 'react-toastify/dist/ReactToastify.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { FaPlus, FaEdit, FaTrash, FaCheck } from 'react-icons/fa'

import api from '../../services/api';

import './styles.css';

export default function Dashboard({ history }) {
  const [tasks, setTasks] = useState([]);

  async function newTask() {
    toast.success('Button functional');
  }

  async function destroyTask() {
    toast.error('❌ Tarefa excluída')
  }

  async function checkTask() {
    toast.success('✅ Tarefa concluída')
  }

  async function editTask() {
    history.push('/edit');
  }

  useEffect(() => {
    async function loadTask() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/tasks', { headers: { user_id } });
      console.log(response);
      setTasks(response.data);
    }
    loadTask();
  }, [])

  return (
    <>
      <ToastContainer />
      <header id="dash-header">
        <h2>Minhas tarefas</h2>
        <FaPlus size="28px" className="icon-plus" onClick={newTask} />
      </header>
      <ul>
        {tasks.map(task => (
          <li className="tasks" key={task._id}>
            <strong> {task.name} </strong>
            <span> {task.description} </span>
            <div className="task-icons">
              <FaCheck size="18px" className="check-icon" onClick={checkTask} />
              <FaEdit size="18px" className="edit-icon" onClick={editTask} />
              <FaTrash size="18px" className="trash-icon" onClick={destroyTask} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
