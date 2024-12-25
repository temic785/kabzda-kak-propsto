import React, {useState} from "react";
import styles from "./Select.module.css"

type ItemsType = {
    title: string
    value: string
}
type SelectPropsType = {
    value: string
    onClick: (value: any) => void
    item: ItemsType[]
}

export const SelectSecret = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: string) => {
        props.onClick(value);
        toggleItems();
    }

    const selectedItem = props.item.find((i) => i.value === props.value)
    const hoveredItem = props.item.find((i) => i.value === hoveredElementValue)
    return (
        <div className={styles.select}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={styles.items}>
                    {props.item.map((i, index) =>
                        <div onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }}
                             className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                             key={index}
                             onClick={() => {
                                 onItemClick(i.value)
                             }}>
                            {i.title}</div>)}
                </div>}

        </div>
    );
};


export const Select = React.memo(SelectSecret)