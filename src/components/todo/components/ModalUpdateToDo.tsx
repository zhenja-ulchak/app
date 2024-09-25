import {
    Grid, TextField, Button, Box, InputLabel, Modal

} from '@mui/material';

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

  
const ModalUpdate = ({ updateTodo, editTodo, setUpdateTodo, setEditTodo, handleUpdate } : any) => {


    return (

        <>
            {editTodo.id && (
                <Modal
                    open={updateTodo}
                    onClose={() => setUpdateTodo(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{ ...updateBox }}>
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
                                    label="Update Todo"
                                    variant="outlined"
                                    sx={{
                                        width: '96%',

                                        margin: '15px',
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
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ float: 'right' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => setEditTodo({ id: null, task: '' })}
                                    >
                                        Cancel
                                    </Button>
                                    <Button sx={{ marginLeft: '10px' }} variant="contained" color="primary" onClick={handleUpdate}>
                                        Update
                                    </Button>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            )}
        </>
    )
}

export default ModalUpdate;