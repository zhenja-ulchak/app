import React, { useState, useEffect } from 'react';
import { fetchTodos, createToDoList, updateToDoList, deleteToDoList } from '../../api/ToDoApiProvaider';
import {
  Container, TextField, Button, Box, Typography, IconButton,

} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { useTable } from 'react-table';
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState({ id: null, task: '' });
  const [punch, setPunch] = useState(false);

  const marginButton = {
    marginTop: '8px',
  
  
  };
  const updateBox = {
    width: '50%',
    position: 'fixed',
    top: '0',
    marginTop: '70px',
    zIndex: '9999',
    background: '#878787'
  };
  const wInput = {
    width: '30%',
    marginRight: '20px',
    marginLeft:'20%'
  };
  const conteinerW = {
    width: '100%',

    marginTop: '200px',

  };

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      const task = data.data["customer_todo"];
      setTodos(task.map((i) => i));
    };
    loadTodos();
  }, [punch]);


  const addTodo = async () => {
    const addedTodo = await createToDoList({ task: `${newTodo}` });
    setTodos([...todos, addedTodo]);
    setNewTodo('');
  };

  const handleEditClick = (todo) => {
    setEditTodo({
      id: todo.id,
      task: todo.text,
    });
  };

  const handleUpdate = async () => {
    try {
      const { id, task } = editTodo;
      const updatedTodo = await updateToDoList(id, { task });
      setTodos(todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      ));
      setEditTodo({ id: null, task: '' });
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
    setPunch(true);
  };

  const handleDelete = async (id) => {
    await deleteToDoList(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Налаштування таблиці для відображення завдань
  const data = React.useMemo(
    () => todos.map(todo => ({
      id: todo.id,
      col1: todo.task,
      colNumber: todo.number,
      colCheck: (
        <>
        <FaCheck />
        {/* <IoClose /> */}
        </>

      ),
      col2: todo.status,
      col3: todo.start_date,
      col4: todo.end_date,
      col5: todo.diff_time,
      col6: todo.lastchange,
      col7: todo.lastchange_by,
      col8: todo.created,
      col9: todo.created_by,

      col11: (
        <>
          <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(todo)}>
            <EditIcon />
          </IconButton>
          {/* <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />
          </IconButton> */}
        </>
      ),
    })),
    [todos]
  );

  const columns = React.useMemo(

    () => [
      {
        Header: 'Task',
        accessor: 'col1',
      },
      {
        Header: 'Number',
        accessor: 'colNumber',
      },
      {
        Header: 'Number',
        accessor: 'colCheck',
      },
      {
        Header: 'Status',
        accessor: 'col2',
      },
      {
        Header: 'Start date',
        accessor: 'col3',
      },
      {
        Header: 'End date',
        accessor: 'col4',
      },
      {
        Header: 'Diff time',
        accessor: 'col5',
      },
      {
        Header: 'Last change',
        accessor: 'col6',
      },
      {
        Header: 'Last change by',
        accessor: 'col7',
      },
      {
        Header: 'Created',
        accessor: 'col8',
      },
      {
        Header: 'Created by',
        accessor: 'col9',
      },

      {
        Header: 'Actions',
        accessor: 'col11',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const navigate = useNavigate();

  const handleCellClick = (todoId) => {
    if (todoId) {
      navigate(`/details/${todoId}`);
      console.log(`Navigating to /details/${todoId}`);
    } else {
      console.error("Todo ID is undefined");
    }
    
  }
  return (
    <>
      <div sx={{ ...conteinerW }}>
        {editTodo.id && (
          <Box sx={{ ...updateBox }}>
            <Typography sx={{ marginBottom: '40px', color: '#ffffff' }} variant="h6" noWrap component="p">
              Fix case
              <Button
                sx={{ color: '#000000' }}
                onClick={() => setEditTodo({ id: null, task: '' })}
              >
                <CloseIcon />
              </Button>
            </Typography>
            <TextField
              label="Update Todo"
              variant="outlined"
              sx={{
                width: '84%',
                marginBottom: '20px',
                marginLeft: '15px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px',
                  '&:hover': {
                    border: '2px solid #fff',
                  },
                },
              }}
              value={editTodo.task}
              onChange={(e) => setEditTodo({ ...editTodo, task: e.target.value })}
            />
            <Button sx={marginButton} variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Box>
        )}
        <h1>Add case</h1>
        <TextField
          sx={{ ...wInput }}
          label="New Todo"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button sx={marginButton} variant="contained" color="primary" onClick={addTodo}>
          Add
        </Button>
        <div style={{ maxHeight: '500px', overflowY: 'auto', overflowX: 'auto', marginTop: '20px', marginLeft: '20%' }}>      
              <table {...getTableProps()} style={{ marginTop: '20px' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{

                      background: '#fff',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} >
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        textAlign: 'center',
                        background: '#fff',
                        minWidth: '200px',

                      }}
                      onClick={() => handleCellClick(row.original.id)}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
