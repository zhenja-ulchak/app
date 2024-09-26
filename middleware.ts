import { parse, splitCookiesString } from 'set-cookie-parser'


import { NextRequest, NextResponse } from 'next/server'


export async function middleware(request: NextRequest) {

  const token = request.cookies.get('cookie')?.value;
 
  // Якщо токену немає, перенаправляємо на сторінку логіну
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Можна додати додаткову логіку перевірки, наприклад, валідацію токена
  // if (!validateToken(token)) {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }

  return NextResponse.next(); // Якщо токен є, доз
 


  
}
export const config = {
  matcher: ['/sidebar'], // Шляхи, на яких потрібно виконувати middleware
};
