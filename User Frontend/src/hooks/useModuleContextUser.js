import { ModuleContext } from "../context/ModuleContextUser";
import { useContext } from "react";

export const useModuleContext = () => {
    const context = useContext(ModuleContext)

    if (!context) {
        throw Error('useModuleConstext must be used inside a ModuleContextProvider')
    }

    return context
}