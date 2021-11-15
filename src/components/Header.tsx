import Button from "./Button";

interface props {
    title: string;
    onAdd: any
    showAdd: any
}
const Header = ({title, onAdd, showAdd}:props) => {
    const onClick = () => {
      console.log("click")
    }
    return (
        <header className={'header'}>
            <h1>Task Tracker {title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    );
};
Header.defaultProps = {
    title: "hi"
}

export default Header;
