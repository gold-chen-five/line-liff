import Cors from 'cors'

function corsMiddleware(req, res,corsOrigin ){
    const cors = Cors({
        origin: corsOrigin,
        methods: ['GET', 'POST','HEAD'],
    })

    return new Promise((resolve, reject) => {
        cors(req, res, (result) => {
            if (result instanceof Error) {
            return reject(result)
            }

            return resolve(result)
        })
    })
}

export {corsMiddleware}