import {
    Grid, TextField, Button, Box, InputLabel, IconButton, Modal
  
  } from '@mui/material';


const ModalAdd = ({visibleAddOpen, setNewTodo, setAddVisibleOpen, menuRef, newTodo, addTodo}: any) => {


    return (

        <>
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
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <InputLabel
                                        sx={{
                                            display: 'block',
                                            marginBottom: '8px',
                                            marginLeft: '2%',
                                            fontWeight: 'bold',
                                            fontSize: '16px',
                                        }}
                                    >
                                        Task
                                    </InputLabel>
                                    <TextField
                                        sx={{ width: '95%', marginRight: '15px', marginLeft: '15px' }}
                                        label="New Todo"
                                        variant="outlined"
                                        value={newTodo}
                                        onChange={(e) => setNewTodo(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ float: 'right' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setAddVisibleOpen(false)}
                                        >
                                            Cancel
                                        </Button>
                                        <Button sx={{ marginLeft: '10px' }} variant="contained" color="primary" onClick={addTodo}>
                                            Add
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Modal>
                )
                :
                (<Box></Box>)

            }
        </>
    )
}

export default ModalAdd;