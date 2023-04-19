import WorkSpace from "../../componets/WorkSpace/WorkSpace";
import React, { useEffect, useState, useContext } from "react";
import changeStyleForAppItem from "../../utils/changeStyleForAppItem";
import AuthService from "../../API/auth-service";
import { AuthorizationContext } from "../../contexts/auth-context";

const Main = () => {

    const [theme, setTheme] = useState(true);

    useEffect(() => {
        changeStyleForAppItem.changeCurrentTheme(theme);
    }, [theme])

    return (
        <WorkSpace theme={theme} changeTheme={setTheme} />
    )
}

export default Main;