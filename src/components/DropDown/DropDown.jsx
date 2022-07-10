import { Container, Bar, List, Backdrop, Item } from "./styles";
import { createContext, useState, useContext } from "react";

const DropDownContext = createContext(null);

export function DropDown({ children, onChange }) {
  const initState = {
    value: "choose",
    listOpen: false,
    backdropOpen: false,
  };
  const [state, setState] = useState(initState);

  const toggle = () => {
    const { listOpen, backdropOpen } = state;
    setState(() => ({
      ...state,
      listOpen: !listOpen,
      backdropOpen: !backdropOpen,
    }));
  };

  const { value, listOpen, backdropOpen } = state;
  return (
    <>
      <Container>
        <DropDownContext.Provider value={[state, setState, onChange]}>
          <Bar onClick={() => toggle(state, setState)}><span>{value}</span> <span>^</span></Bar>
          <List show={listOpen}>{children}</List>
        </DropDownContext.Provider>
      </Container>
      <Backdrop
        show={backdropOpen ? "block" : "none"}
        onClick={() => toggle(state, setState)}
      />
    </>
  );
}

DropDown.Item = function ListItem({ children, value }) {
  const [state, setState, onChange] = useContext(DropDownContext);
  const setValue = (newValue) => {
    const { listOpen, backdropOpen } = state;
    onChange(newValue)
    setState(() => ({
      ...state,
      listOpen: !listOpen,
      backdropOpen: !backdropOpen,
      value: newValue,
    }));
  };
  return (
    <Item
      onClick={() => {
        setValue(value);
      }}
    >
      {children}
    </Item>
  );
};
