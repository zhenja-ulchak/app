import React, { useState, useEffect, useRef } from 'react';
import { fetchTodos, createToDoList, updateToDoList, deleteToDoList } from '../../api/ToDoApiProvaider';
import {
  Grid, TextField, Button, Box, Typography, IconButton,Modal 

} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { useTable } from 'react-table';
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState({ id: null, task: '' });
  const [punch, setPunch] = useState(false);
  const [visibleOpen, setVisibleOpen] = useState(false);
  const [visibleAddOpen, setAddVisibleOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);


  const [visibleColumns, setVisibleColumns] = useState([
    'col1', 'colNumber', 'colCheck', 'col2', 'col3', 'col4', 'col11'
  ]);

  const marginButton = {
    marginTop: '8px',
  };
  const updateBox = {
    width: '40%', 
    position: 'absolute',
     zIndex: '9999',
      right: '553px',
       top: '291px',
        background: '#fff',
         border: '1px solid rgb(177 177 177)',
          padding: '22px' 
  };
  const wBox = {
    width: '87%',
    marginRight: '20px',
    marginLeft: '13%'
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
    console.log(addedTodo);
    
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
          <FaCheck size={30} />
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
console.log(data);

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
        Header: 'Check',
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
        headerStyle: { backgroundColor: '#fff', color: '#000', textAlign: 'center', fontWeight: 'bold', position: 'sticky', right: 0, zIndex: 10 },
        cellStyle: {  position: 'sticky', right: 0, backgroundColor: '#fff', zIndex: 5  },
      },
    ],
    []
  );
  const filteredColumns = React.useMemo(
    () => columns.filter(column => visibleColumns.includes(column.accessor)),
    [visibleColumns, columns]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: filteredColumns, data });




  const handleCellClick = (todoId) => {
    if (todoId) {
      navigate(`/details/${todoId}`);
     
    } else {
      console.error("Todo ID is undefined");
    }

  }


  const handleToggleColumn = (columnId) => {
    setVisibleColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((col) => col !== columnId)
        : [...prev, columnId]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisibleOpen(false); // Закриваємо меню
        setEditTodo(false)
        setAddVisibleOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);
  return (
    <>
      {editTodo.id && (
           <Modal
           open={editTodo}
    
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
         >
        <Box sx={{ ...updateBox }}>
          <Typography sx={{ marginBottom: '40px', color: '#ffffff' }} variant="h6" noWrap component="p">
            Fix case
            <Button
              
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
        </Modal>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...wBox }}>
            <Button style={{ float: 'right' }} onClick={() => setVisibleOpen(!visibleOpen)}>
              <FaRegEye size={30} />
            </Button>
            {visibleOpen
              ?
              (<Box ref={menuRef} style={{ float: 'right', position: 'absolute', zIndex: '99999', right: '60px', top: '229px', background: '#fff', border: '1px solid rgb(177 177 177)', padding: '22px' }}>
                {columns.map((column) => (
                  <div key={column.accessor}>
                    <input
                      type="checkbox"
                      checked={visibleColumns.includes(column.accessor)}
                      onChange={() => handleToggleColumn(column.accessor)} />
                    <label>{column.Header}</label>
                  </div>
                ))}
              </Box>)
              :
              (<Box></Box>)}
            <Button style={{ float: 'right', }}
              onClick={() => setAddVisibleOpen(!visibleOpen)}>
              <FaPlus size={30} />
            </Button>

            {visibleAddOpen ?

              (
              
                <Modal
                open={visibleAddOpen}
         
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                   <Box ref={menuRef}
                sx={{ width: '40%', position: 'absolute', zIndex: '9999', right: '553px', top: '291px', background: '#fff', border: '1px solid rgb(177 177 177)', padding: '22px' }}
              >

                <TextField
                  sx={{ width: '83%', marginRight:'20px' }}
                  label="New Todo"
                  variant="outlined"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)} />
                <Button sx={marginButton} variant="contained" color="primary" onClick={addTodo}>
                  Add
                </Button>
              </Box>


              </Modal>
           )
              :
              (<Box></Box>)

            }

          </Box>
        </Grid>
        <Grid item xs={12}>
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
                          ...column.headerStyle
                        }}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, index) => (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: '10px',
                            textAlign: 'center',
                            background: '#fff',
                            minWidth: '200px',
                            ...cell.column.cellStyle
                          }}
                          onClick={() => {
                            if (index !== row.cells.length - 1) {
                              handleCellClick(row.original.id);
                              console.log(row.original.id);
                              
                            }
                      
                          }}
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
        </Grid>

      </Grid>


  

    </>
  );
};

export default TodoApp;
