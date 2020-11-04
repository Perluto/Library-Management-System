import React, { useState, useRef, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "../../style/dropdown.css";

function useOutsideAlerter(ref, setDropdown) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.classList.add("clicked");
        let target = event.target;
        let parentNode = ref.current.parentNode;
        if (
          !(target === parentNode.childNodes[0]) &&
          !(target === parentNode.childNodes[0].childNodes[0])
        ) {
          setDropdown(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Dropdown = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.setDropdown);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      ref={wrapperRef}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path} className={item.cName}>
              {item.icon()} {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
