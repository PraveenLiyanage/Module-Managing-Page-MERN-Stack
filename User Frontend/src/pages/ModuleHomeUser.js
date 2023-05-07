import { useEffect } from 'react'
import { useModuleContext } from "../hooks/useModuleContextUser"

// Components
//import ModuleDetails from '../components/ModuleDetails'
import ModuleForm from '../components/ModuleFormUser'
import ModuleUpload from '../components/ModuleUploadUser'
import ModuleSearchBar from '../components/ModuleSearchBarUser'

const Home = () => {
    const {dispatch}= useModuleContext()

    useEffect(() => {
        const fetchModules = async() => {
            const response = await fetch('/api/module')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_MODULES', payload: json})
            }
        }

        fetchModules()
    }, [dispatch])

    return (
        <div className = "home">
            <ModuleSearchBar/>
            <ModuleForm />
            
        </div>
    )
}

export default Home