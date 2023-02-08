import {useState,useEffect} from 'react'
export const useSendUserId = (userId) => {
    const [data,setData] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        try{
            const res = await fetch('https://line-liff-delta.vercel.app/api/writeUserId',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({userId})
            }).then(data => data.json())
            setIsLoading(false)
            setData(res)
        }
        catch(err){
            setIsError(true)
        }
        
    }

    useEffect(() => {
        if(userId){
            fetchData()
        }
    },[userId])

    return {
        data,
        isLoading,
        isError
    }
}