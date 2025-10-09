import React from 'react';
import styles from './Cart.module.css';

import { Text } from '@ui/Text/ReactTextWrapper';

const Cart = () => {
    return (
        <div className={styles.container}>
            <Text variant="large" text="My cart" />
        </div>
    );
}

export default Cart;