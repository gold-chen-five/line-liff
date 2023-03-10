import fsPromises from 'fs/promises';
import path from 'path'
import { corsMiddleware } from '../../src/middleware/handleCors'

const writeUserId = async (req,res) => {
    await corsMiddleware(req,res,'*')
    const { body } = req
    const { userId} = body

    //read json file
    //process.cwd()
    const filePath = path.join(process.cwd(), 'users.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    objectData.userId.push(userId)
    //write json file
    await fsPromises.writeFile('/tmp/users.json',JSON.stringify(objectData))
    res.json({message: 'ok'})
    
}

export default writeUserId