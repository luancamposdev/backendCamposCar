import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export const multerConfig = {
  dest: path.resolve(__dirname, '..', 'uploads'),
  storage: multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename: (req: any, file: any, cb: any) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        const fileName = `${hash.toString('hex')}-${file.originalname}`

        cb(null, fileName)
      })
    },
  }),
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
  filter: (req: any, file: any, cb: any) => {
    const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/jpg', 'image/png']
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type.'))
    }
  },
}
