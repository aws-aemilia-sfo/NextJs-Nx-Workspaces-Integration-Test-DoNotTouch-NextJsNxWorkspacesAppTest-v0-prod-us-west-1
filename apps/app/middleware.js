import { NextResponse } from 'next/server'

export function middleware(request) {
  if (request.nextUrl.pathname === '/middleware') {
    return NextResponse.redirect(new URL('/redirects', request.url))
  }
  if (request.nextUrl.pathname === '/another-middleware') {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/middleware/:path*', '/another-middleware/:path*'],
}