import React from "react";

const Arena4 = ({children, arena}) => {
    return (
        <div>
            <h1 className="fight">FIGHT</h1>
            <div className="arena">
            {
                React.Children.map(children, (filho) => {
                    return React.cloneElement(filho, {arena});
                })
            }
            </div>

        </div>
    );
};

export default Arena4;