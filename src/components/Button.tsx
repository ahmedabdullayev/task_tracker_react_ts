import React from "react";

interface props {
    color: string;
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = ({color, text, onClick} : props) => {
    return (
        <button onClick={onClick} style={{backgroundColor: color}} className={'btn'}>{text}</button>
    );
};

Button.defaultProps = {
    color: 'steelblue'
}

export default Button;
