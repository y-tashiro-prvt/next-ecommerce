import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BASIC_AUTH_USERNAME = process.env.BASIC_AUTH_USERNAME || 'ID';
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD || 'PASS';

export function middleware(request: NextRequest) {
  const auth = request.headers.get('authorization');

  if (auth) {
    const [username, password] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');

    if (username === BASIC_AUTH_USERNAME && password === BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ['/((?!api/).*)'], // Match all routes except API routes
};
