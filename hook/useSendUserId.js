import {useState,useEffect} from 'react'
export const useSendUserId = (userId) => {
    const [data,setData] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [errMsg,setErrMsg] = useState()

    const fetchData = async () => {
        setIsLoading(true)
        try{
            const res = await fetch('/api/writeUserId',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({userId:userId})
            }).then(data => data.json())
            setIsLoading(false)
            setData(res)
        }
        catch(err){
            setErrMsg(err)
            setIsError(true)
            setIsLoading(false)
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
        isError,
        errMsg
    }
}