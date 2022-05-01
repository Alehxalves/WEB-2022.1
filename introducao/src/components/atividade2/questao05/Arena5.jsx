import Hero5 from "./Hero5";
import Enemy5 from "./Enemy5";

const Arena5 = (props) => {
    const {nameArena, nameHero, imgHero, nameEnemy, imgEnemy} = props;
    return (
        <div>
            <h1 className="nameArena">{nameArena}</h1>
            <h1 className="fight">FIGHT</h1>
            <span className="arena">
                <Hero5 name={nameHero} imgUrl={imgHero} />
                <Enemy5 name={nameEnemy} imgUrl={imgEnemy} />
            </span>
        </div>
    );
};

export default Arena5;