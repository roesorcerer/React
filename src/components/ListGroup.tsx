import { useState } from "react";

//pass object with two properties with interface
interface Props {
  items: string[];
  heading: string;
  // calling parameter for calling fuction
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //selection indexing to help highlight one item at a time
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //empty brackets means Fragment - there is no need to code and import in React
    //Instead of doing for loop in List using .map function
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
