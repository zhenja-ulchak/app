import React, { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import {
    FormControlLabel,
    Checkbox,
    Typography,
    Box,
} from '@mui/material';

const ColumnTooltip = ({ visibleOpen, menuRef, columns, visibleColumns, handleToggleColumn, setVisibleOpen }: any) => {
 

    return (
        <>
            {visibleOpen && (
                <Box
                    ref={menuRef}
                    style={{
                        float: 'right',
                        position: 'absolute',
                        zIndex: '99999',
                        right: '60px',
                        top: '30px',
                        background: '#fff',
                        border: '1px solid rgb(177 177 177)',
                        padding: '22px',
                    }}
                >
                    {columns.map((column: { accessor: Key | null | undefined; Header: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                        <FormControlLabel
                            key={column.accessor}
                            control={
                                <Checkbox
                                    checked={visibleColumns.includes(column.accessor)}
                                    onChange={() => handleToggleColumn(column.accessor)}
                                    color="primary"
                                />
                            }
                            label={<Typography>{column.Header}</Typography>}
                            sx={{ display: 'flex', marginBottom: '8px' }}
                        />
                    ))}
                </Box>
            )}
        </>
    );
};

export default ColumnTooltip;
