import Button from "./Button";

interface props {
    title: string;
}
const Header = ({title}:props) => {
    const onClick = () => {
      console.log("click")
    }
    return (
        <header className={'header'}>
            <h1>Task Tracker {title}</h1>
            <Button color={'green'} text={'Add'} onClick={onClick}/>
        </header>
    );
};
Header.defaultProps = {
    title: "hi"
}

export default Header;
