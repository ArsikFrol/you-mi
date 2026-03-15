import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    })

    if (!token) {
        const protectedPaths = [
            '/profile',
            '/profile/:path*',
            '/messages',
            '/messages/:path*',
        ]

        const isProtectedPath = protectedPaths.some(path => {
            if (path.includes(':path*')) {
                const basePath = path.replace('/:path*', '')
                return pathname.startsWith(basePath)
            }
            return pathname === path
        })

        if (isProtectedPath) {
            const signInUrl = new URL('/signIn', request.url)
            signInUrl.searchParams.set('callbackUrl', pathname)
            return NextResponse.redirect(signInUrl)
        }

        return NextResponse.next()
    }

    if (pathname.startsWith('/psychologist')) {
        if (token.role !== 'admin') {
            const dashboardUrl = new URL('/profile', request.url)
            return NextResponse.redirect(dashboardUrl)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/profile',
        '/profile/:path*',
        '/messages/:path*',
    ]
}