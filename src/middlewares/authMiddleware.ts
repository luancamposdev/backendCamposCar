import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export const secretJwtKey: string = '93eea6a2c12628b3a3b7618f6882c912'

function auth(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return response.status(403).send('A token is required for authentication')
  }
  try {
    const decoded = verify(token, secretJwtKey)
    return response.json({
      user: decoded,
    })
  } catch (err) {
    return response.status(401).send('Invalid Token')
  }
}

export { auth }
