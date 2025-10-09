import React from 'react';
import styles from './MainContent.module.css';

import ItemList from '@components/ItemList/ItemList';
import Cart from '@components/Cart/Cart';

const MainContent = () => {
    return (
        <div className={styles.container}>
            <ItemList />
            <Cart />
        </div>
    );
}

export default MainContent;