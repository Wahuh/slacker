import React from "react";
import Button from "../Button";
import "./BackButton.scss";

const BackButton = (props) => {
    return (
        <Button onClick={props.onClick}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>keyboard_backspace</title>
                <path d="M21 11.016v1.969h-14.156l3.563 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.563 3.609h14.156z"></path>
            </svg>
        </Button>
    );
}

export default BackButton;