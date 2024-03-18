import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Product(props) {
    return (
        <div>
            <h1>Product Admine Page</h1>

            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    );
}

export default Product;