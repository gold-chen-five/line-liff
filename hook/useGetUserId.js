import {useState,useEffect} from 'react'

export const useGetUserId = () => {
    const [userData,setUserData] = useState()
    const [isUserLoading,setIsUserloading] = useState(false)
    const [isUserError,setIsUserError] = useState(false)

    const fetchUserId = async () => {
        try{
            setIsUserloading(true)
            const res = await fetch('/api/getUserId').then(data => data.json())
            setIsUserloading(false)
            const userId = res.userId
            setUserData(userId)
        }
        catch(err){
            setIsUserError(true)
        }
    }

    useEffect(() => {
        fetchUserId()
    },[])

    return {
        userData,
        isUserLoading,
        isUserError
    }
}