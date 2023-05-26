import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"

const useData = () => {
    const context = useContext(DataContext)

    if (!context) {
        throw new Error('useData must be used within DataProvider')
    }

    return context
}

export default useData;