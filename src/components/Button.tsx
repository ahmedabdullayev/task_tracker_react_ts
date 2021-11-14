interface props {
    color: string;
    text: string;
}
const Button = ({color, text} : props) => {
    return (
        <button style={{backgroundColor: color}} className={'btn'}>{text}</button>
    );
};

Button.defaultProps = {
    color: 'steelblue'
}

export default Button;
