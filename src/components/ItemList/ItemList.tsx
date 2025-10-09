import React from "react";
import styles from "./ItemList.module.css";

import Item from "@components/Item/Item";
import { Input } from "@ui/Input/ReactInputWrapper";
import { Button } from "@ui/Button/ReactButtonWrapper";

import searchIcon from "@assets/search.svg";

const ItemList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <Input
          className={styles.searchBox}
          placeholder="Search item..."
          icon={searchIcon}
          width="100%"
        />
        <Button
          className={styles.searchButton}
          label="Search"
          icon={searchIcon}
          //   width="10%"
        />
      </div>
      <div className={styles.itemListContainer}>
        <Item
          imgSrc="https://t4.ftcdn.net/jpg/01/43/42/83/360_F_143428338_gcxw3Jcd0tJpkvvb53pfEztwtU9sxsgT.jpg"
          name="item name"
          price={100}
        />
      </div>
    </div>
  );
};

export default ItemList;
