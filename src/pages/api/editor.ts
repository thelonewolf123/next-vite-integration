import { readFile } from 'fs/promises'
import { NextApiResponse } from 'next'
import { NextRequest } from 'next/server'
import path from 'path'

export default async function handler(req: NextRequest, res: NextApiResponse) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    console.log('req', __dirname)
    res.write(
        await readFile(
            path.join(process.env.PROJECT_ROOT || '', 'dist/index.html'),
            'utf-8'
        )
    )
    res.end()
}
