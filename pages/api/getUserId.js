import fsPromises from 'fs/promises';
import path from 'path'
import { corsMiddleware } from '../../src/middleware/handleCors'

const getUserId = async (req,res) => {
    await corsMiddleware(req,res,'*')
    const filePath = path.join(process.cwd(), 'users.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    
    res.json(objectData)
}

export default getUserId