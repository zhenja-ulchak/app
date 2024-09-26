import React, { useState, useEffect, useRef } from 'react';

import { CustomersTodoStatusTypeEnum, CustomerTodoType } from '../../types/ToDoCustomerType'
import {
  fetchTodos,
  createToDoList,
  updateToDoList
} from '../../api/ToDoApiProvaider';
import {
  Grid,
  Button,
  Box,
  IconButton,
  Select,
  MenuItem,
  Typography,
  
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// @ts-ignore
import { useTable, usePagination, Column } from 'react-table';
import { useRouter } from 'next/router';
import { FaRegEye } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { GiCheckMark } from 'react-icons/gi';
import { GrDocumentTime } from 'react-icons/gr';
import { styled, Theme } from '@mui/material/styles';
import ModalAdd from './components/ModalAddToDo';
import ModuleUpdate from './components/ModalUpdateToDo';
import ColumnTooltip from './components/AddColumnTooltip';
// import useVisibleStore from '../../store/TaskStore';
import { useTranslation } from 'react-i18next';
import { JSX } from 'react/jsx-runtime';
import { MUIStyledCommonProps } from '@mui/system';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<CustomerTodoType[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editTodo, setEditTodo] = useState<{ id: number | null; task: string }>({
    id: null,
    task: '',
  });
  const [updateTodo, setUpdateTodo] = useState<boolean>(false);
  const [visibleOpen, setVisibleOpen] = useState<boolean>(false);
  const [visibleAddOpen, setAddVisibleOpen] = useState<boolean>(false);
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    'col1',
    'colNumber',
    'colCheck',
    'col2',
    'col3',
    'col4',
    'col5',
    'col11',
  ]);
  // @ts-ignore
  // const { idTask }: { idTask: number } = useVisibleStore();
  const route = useRouter()
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const colorId = useRef<string | null>(null);



  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setVisibleOpen(false); // Закриваємо блок при кліку поза ним
    }
  };

  useEffect(() => {
    // Додаємо обробник події при монтуванні компонента
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Вилучаємо обробник події при демонтажі компонента
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const StyledTableRow = styled('tr')({
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  });

  const wBox = {
    width: '87%',
    marginRight: '20px',
    marginLeft: '13%'
  };
  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      // @ts-ignore
      const tasks: Todo[] = data.data['customer_todo']; // Переконайтесь, що тут правильний тип
      setTodos(tasks);
    };
    loadTodos();
  }, [updateTodo]);

  const addTodo = async () => {

    const addedTodo: CustomerTodoType = await createToDoList({
      task: newTodo,
      id: '0',
      number: '0',
      diff_time: null,
      status: CustomersTodoStatusTypeEnum.Pending,
      start_date: Number(''),
      end_date: '',
      lastchange: null,
      lastchange_by: null,
      created: null,
      created_by: null,
      customer_id: '0',
      solution: '',
      message_history: null
    });
    setTodos([...todos, addedTodo]);
    setNewTodo('');
  };

  const handleEditClick = (todo: CustomerTodoType) => {
    setEditTodo({
      id: Number(todo.id),
      task: todo.task,
    });
    setUpdateTodo(true);
  };

  const handleUpdate = async () => {
    if (editTodo.id === null) return;
    try {
      // @ts-ignore
      const updatedTodo: CustomerTodoType = await updateToDoList(editTodo.id, { task: editTodo.task });
      setTodos(
        todos.map((todo) =>
          todo.id === String(editTodo.id) ? updatedTodo : todo
        )
      );
      setEditTodo({ id: null, task: '' });
      setUpdateTodo(false);
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };
  const DiffTimeTask = (time: number | null): string => {
    if (!time) return 'N/A';
    const totalSeconds = Math.floor(time / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days} day ${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const data = React.useMemo(
    () =>
      todos.map((todo) => ({
        id: todo.id,
        col1: todo.task,
        colNumber: todo.number,
        colCheck: todo.diff_time ? <GiCheckMark /> : <GrDocumentTime />,
        col2: todo.status,
        col3: todo.start_date,
        col4: todo.end_date,
        col5: DiffTimeTask(Number(todo.diff_time)),
        col6: todo.lastchange,
        col7: todo.lastchange_by,
        col8: todo.created,
        col9: todo.created_by,
        col11: (
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => {
              handleEditClick(todo);
              setUpdateTodo(true);
            }}
          >
            <EditIcon />
          </IconButton>
        ),
      })),
    [todos]
  );

  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: t('todo.task'),
        accessor: 'col1',
        Cell: ({ value }: any) => t(value)
      },
      { Header: t('todo.number'), accessor: 'colNumber' },
      { Header: t('todo.check'), accessor: 'colCheck' },
      { Header: t('todo.status'), accessor: 'col2' },
      { Header: t('todo.start_date'), accessor: 'col3' },
      { Header: t('todo.end_date'), accessor: 'col4' },
      { Header: t('todo.diff_time'), accessor: 'col5' },
      { Header: t('todo.last_change'), accessor: 'col6' },
      { Header: t('todo.last_change_by'), accessor: 'col7' },
      { Header: t('todo.created'), accessor: 'col8' },
      { Header: t('todo.created_by'), accessor: 'col9' },
      {
        Header: t('todo.actions'),
        accessor: 'col11',
        headerStyle:
        {
          backgroundColor: '#fff',
          color: '#000',
          textAlign: 'center',
          fontWeight: 'bold',
          position: 'sticky',
          right: 0, zIndex: 10
        },
        cellStyle:
        {
          position: 'sticky',
          right: 0,
          backgroundColor: '#fff',
          zIndex: 5
        },
      },
    ],
    [t]
  );

  const filteredColumns = React.useMemo(() => {
    return columns.filter((column) =>
      visibleColumns.includes(column.accessor as string)
    );
  }, [visibleColumns, columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns: filteredColumns, data, initialState: { pageSize: 5 } },
    usePagination
  );

  const handleCellClick = (todoId: number) => {
    route.push(`/details/${todoId}`);
  };

  const handleToggleColumn = (columnId: string) => {
    setVisibleColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((col) => col !== columnId)
        : [...prev, columnId]
    );
  };

  return (
    <>
      <ModuleUpdate
        updateTodo={updateTodo}
        editTodo={editTodo}
        setUpdateTodo={setUpdateTodo}
        setEditTodo={setEditTodo}
        handleUpdate={handleUpdate}
      />
      <Grid container spacing={2} sx={{ marginTop: '40px' }}>
        <Grid item xs={12}>
          <Box sx={{ ...wBox }}>
            <Button style={{ float: 'right' }} onClick={() => setVisibleOpen(!visibleOpen)}>
              <FaRegEye size={30} />
            </Button>
            <ColumnTooltip
              visibleOpen={visibleOpen}
              menuRef={menuRef}
              columns={columns}
              visibleColumns={visibleColumns}
              handleToggleColumn={handleToggleColumn}
            />
            <Button style={{ float: 'right', }}
              onClick={() => setAddVisibleOpen(!visibleOpen)}>
              <FaPlus size={30} />
            </Button>
            <ModalAdd
              visibleAddOpen={visibleAddOpen}
              setNewTodo={setNewTodo}
              setAddVisibleOpen={setAddVisibleOpen}
              menuRef={menuRef}
              newTodo={newTodo}
              addTodo={addTodo}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <div style={{ maxHeight: '378px', overflowY: 'auto', overflowX: 'auto' }}>
            <table {...getTableProps()} style={{ marginTop: '20px' }}>
              <thead>
                {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
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
                {page.map((row: { original: { id: number; }; getRowProps: () => JSX.IntrinsicAttributes & MUIStyledCommonProps<Theme> & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; cells: any[]; }) => {
                  const colorIdArray = colorId.current ? JSON.parse(colorId.current) : [];
                  const isSelected = colorIdArray.some((id: number) => row.original.id === id);
                  prepareRow(row);
                  return (
                    <StyledTableRow {...row.getRowProps()}>
                      {row.cells.map((cell) => (
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
                            const excludedAccessors = ['col11'];
                            if (!excludedAccessors.includes(cell.column.id)) {
                              handleCellClick(row.original.id);
                            }
                            // setSelectedRowId(row.original.id);
                          }}
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </StyledTableRow>
                  );
                })}
              </tbody>
            </table>

          </div>
          <Box display="flex" alignItems="center" sx={{ float: "right", marginRight: '20px' }} mt={2}>
            <Button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              variant="contained"
              size="small"
            >
              {'<<'}
            </Button>
            <Button
              onClick={previousPage}
              disabled={!canPreviousPage}
              variant="contained"
              size="small"
              sx={{ mx: 1 }}
            >
              {'<'}
            </Button>
            <Button
              onClick={nextPage}
              disabled={!canNextPage}
              variant="contained"
              size="small"
            >
              {'>'}
            </Button>
            <Button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              variant="contained"
              size="small"
              sx={{ mx: 1 }}
            >
              {'>>'}
            </Button>
            <Typography variant="body1" sx={{ mx: 2 }}>
              Сторінка{' '}
              <strong>
                {pageIndex + 1} з {pageOptions.length}
              </strong>
            </Typography>
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              size="small"
              variant="outlined"
            >
              {[5, 10, 20, 50, 100].map((size) => (
                <MenuItem key={size} value={size}>
                  Показувати {size}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoApp;
