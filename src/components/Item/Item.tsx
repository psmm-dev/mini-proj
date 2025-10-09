import React from "react";
import styles from "./Item.module.css";

import { Text } from "@ui/Text/ReactTextWrapper";
import { Button } from "@ui/Button/ReactButtonWrapper";

import cartIcon from "@assets/cart.svg";

type ItemProps = {
  imgSrc: string;
  name: string;
  price: number;
};

const Item = (itemProps: ItemProps) => {
  const { imgSrc, name, price } = itemProps;
  return (
    <div className={styles.container}>
      <img className="item-image" src={imgSrc} alt="Item" />
      <Text variant="bold" text={name} />
      <div className={styles.bottomRow}>
        <Text variant="regular" text={"₱" + price} />
        <Button label="" width="100%" icon={cartIcon} />
      </div>
    </div>
  );
};

export default Item;
