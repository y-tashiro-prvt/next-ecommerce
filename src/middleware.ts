import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/:path*']
}

export function middleware(req: NextRequest) {
  const isLocalDevelopment = process.env.NODE_ENV === 'development';

  if (isLocalDevelopment || !process.env.ID || !process.env.PASS) {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get('authorization');
  if (!basicAuth) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  try {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === process.env.ID && pwd === process.env.PASS) {
      return NextResponse.next();
    }
  } catch (e) {
    return new Response('Invalid Authentication', { status: 400 });
  }

  return new Response('Unauthorized', { status: 401 });
}
