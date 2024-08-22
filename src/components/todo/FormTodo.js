import React, { useState, useEffect, useRef } from 'react';
import { fetchTodos, createToDoList, updateToDoList, deleteToDoList } from '../../api/ToDoApiProvaider';
import {
  Grid, Button, Box, IconButton, Checkbox

} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import { useTable } from 'react-table';

import { useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import ModalAdd from './components/ModalAddToDo'
import ModuleUpdate from './components/ModalUpdateToDo'
import ColumnTooltip from './components/AddColumnTooltip'

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [updateTodo, setUpdateTodo] = useState(false);
  const [editTodo, setEditTodo] = useState({ id: null, task: '' });
  const [punch, setPunch] = useState(false);
  const [visibleOpen, setVisibleOpen] = useState(false);
  const [visibleAddOpen, setAddVisibleOpen] = useState(false);
  const [color, setColor] = useState(false)
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const Year = currentDate.getFullYear();
  const Day = currentDate.getDate();  // День місяця
  const Month = currentDate.getMonth() + 1;  // Місяць (додаємо 1)
  const Hours = currentDate.getHours(); // Години
  const Minutes = currentDate.getMinutes(); // Хвилини
  const Seconds = currentDate.getSeconds(); // Секунди

  const formattedDate = `${Year}-${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`;
  console.log(formattedDate);

  const navigate = useNavigate();
  const menuRef = useRef(null);





  const [visibleColumns, setVisibleColumns] = useState([
    'col1', 'colNumber', 'colCheck', 'col2', 'col3', 'col4', 'col11'
  ]);

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
  }, [punch, updateTodo]);


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
    setUpdateTodo(true)
  };

  const handleUpdate = async () => {
    try {
      const { id, task } = editTodo;
      const updatedTodo = await updateToDoList(id, { task });
      setTodos(todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      ));
      setEditTodo({ id: null, task: '' });
      setUpdateTodo(false)


    } catch (error) {
      console.error("Failed to update todo:", error);
    }
    setPunch(true);
  };

  const handleDelete = async (id) => {
    await deleteToDoList(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const handleCheckboxChange = (event, id) => {
    // Логіка для зміни стану вибору чекбокса
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isChecked: event.target.checked } : todo
    );
    setColor(true)
    setTodos(updatedTodos);
  };
  const calculateTimeDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInMilliseconds = end.getTime() - start.getTime();
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const days = Math.floor(differenceInSeconds / (24 * 3600));
    const hours = Math.floor((differenceInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((differenceInSeconds % 3600) / 60);
    const seconds = differenceInSeconds % 60;

    return `${days} days ${hours}:${minutes}:${seconds}`;
  };

  const data = React.useMemo(
    () => todos.map(todo => ({
      id: todo.id,
      col1: todo.task,
      colNumber: todo.number,
      colCheck: (
        <>
          <Checkbox
            checked={todo.isChecked}
            onChange={(e) => handleCheckboxChange(e, todo.id)}
            size="medium"
            color="primary"
          />
        </>

      ),
      col2: todo.status,
      col3: todo.start_date,
      col4: (
        <>
          {  todo.isChecked ? formattedDate : ''}
        </>

      ),
      col5: (
        <>
          {
           todo.isChecked ? calculateTimeDifference(todo.start_date, formattedDate) : ''
          }        </>

      ),
      col6: todo.lastchange,
      col7: todo.lastchange_by,
      col8: todo.created,
      col9: todo.created_by,

      col11: (
        <>
          <IconButton edge="end" aria-label="edit" onClick={() => {
            handleEditClick(todo)
            setUpdateTodo(true)
          }}>
            <EditIcon />
          </IconButton>

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
        cellStyle: { position: 'sticky', right: 0, backgroundColor: '#fff', zIndex: 5 },
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
        setUpdateTodo(false)
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

      <ModuleUpdate
        updateTodo={updateTodo}
        editTodo={editTodo}
        setUpdateTodo={setUpdateTodo}
        setEditTodo={setEditTodo}
        handleUpdate={handleUpdate}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...wBox }}>
            <Button style={{ float: 'right' }} onClick={() => setVisibleOpen(!visibleOpen)}>
              <FaRegEye size={30} />
            </Button>
            <ColumnTooltip visibleOpen={visibleOpen} menuRef={menuRef} columns={columns} visibleColumns={visibleColumns} handleToggleColumn={handleToggleColumn} />
            <Button style={{ float: 'right', }}
              onClick={() => setAddVisibleOpen(!visibleOpen)}>
              <FaPlus size={30} />
            </Button>

            < ModalAdd
              visibleAddOpen={visibleAddOpen}
              setNewTodo={setNewTodo}
              setAddVisibleOpen={setAddVisibleOpen}
              menuRef={menuRef}
              newTodo={newTodo}
              addTodo={addTodo} />

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
                  const isSelected = row.original.id === selectedRowId;
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
                            cursor: 'pointer',
                            backgroundColor: isSelected ? '#f0f0f0' : 'inherit',
                            ...cell.column.cellStyle
                          }}
                          onClick={() => {

                            const excludedAccessors = ['colCheck', 'col11'];

                            if (!excludedAccessors.includes(cell.column.id)) {
                              handleCellClick(row.original.id);
                              console.log(row.original.id);
                            }
                            setSelectedRowId(row.original.id);
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
