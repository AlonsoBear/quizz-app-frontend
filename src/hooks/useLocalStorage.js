import { useState, useEffect } from "react"

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {        
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default useLocalStorage

