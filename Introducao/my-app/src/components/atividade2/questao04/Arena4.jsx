import Hero4 from "./Hero4";
import Enemy4 from "./Enemy4";

const Arena4 = (props) => {
    const {nameArena} = props;
    return (
        <div>
            <h1 className="nameArena">{nameArena}</h1>
            <h1 className="fight">FIGHT</h1>
            <span className="arena"></span>
        </div>
    );
};

export default Arena4;