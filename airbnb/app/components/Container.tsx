import React from "react";

interface ContainerProps {
    children: React.ReactNode
}

//Se você deseja restringir os tipos de retorno de componentes, use React.FC.
const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <div>Container</div>
    )
}

export default Container;