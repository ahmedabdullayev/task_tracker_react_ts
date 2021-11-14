import Button from "./Button";

interface props {
    title: string;
}
const Header = ({title}:props) => {
    return (
        <header className={'header'}>
            <h1>Task Tracker {title}</h1>
            <Button color={'green'} text={'Add'}/>
        </header>
    );
};
Header.defaultProps = {
    title: "hi"
}

export default Header;
