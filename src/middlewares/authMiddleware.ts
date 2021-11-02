import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const secretJwtKey: string | undefined = process.env.SECRET_JWT

function auth(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return response.status(403).send('A token is required for authentication')
  }
  try {
    if (secretJwtKey) {
      const decoded = verify(token, secretJwtKey)
      return response.json({
        user: decoded,
      })
    }
  } catch (err) {
    return response.status(401).send('Invalid Token')
  }
}

export { auth }
