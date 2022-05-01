import Hero2 from "../questao02/Hero2";
import Enemy2 from "../questao02/Enemy2";

const Arena3 = (props) => {
    const {nameHero, imgHero, nameEnemy, imgEnemy} = props;
    return (
        <div >
            <h1 className="fight">FIGHT</h1>
            <span className="arena">
                <Hero2 name={nameHero} imgUrl={imgHero} />
                <Enemy2 name={nameEnemy} imgUrl={imgEnemy} />
            </span>
        </div>
    );
};

export default Arena3;