interface props {
    title: string;
}
const Header = ({title}:props) => {
    return (
        <header>
            <h1>Task Tracker {title}</h1>
        </header>
    );
};
Header.defaultProps = {
    title: "hi"
}

export default Header;
