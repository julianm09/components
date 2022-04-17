import styled from "styled-components";
import { Search } from "react-feather";
import { useState } from "react";

export default function SearchBar({
  background = "#FFFFFF",
  border = "#8D8D8D",
  color = "#383838",
  icon = "#6B6B6B",
  m = "0",
}) {
  const [input, setInput] = useState("");
  const handleEnter = (e) => {
    if (e.code === "Enter") {
      setInput("");
    }
  };

  return (
    <SearchBarCont m={m}>
      <SearchBarIcon>
        <Search color={icon} />
      </SearchBarIcon>
      <SearchBarInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleEnter(e)}
        background={background}
        border={border}
        color={color}
      />
    </SearchBarCont>
  );
}

const SearchBarCont = styled.div`
  width: 500px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 25px;
  margin: ${(props) => props.m};
`;

const SearchBarIcon = styled.div`
  position: absolute;
  z-index: 1000;
`;

const SearchBarInput = styled.input`
  width: 500px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  outline: 0;
  border: 1px solid ${(props) => props.border};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 0 75px;
  border-radius: 5px;
  font-size: 18px;
`;
