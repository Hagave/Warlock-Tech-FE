import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";
//import jwt from "jsonwebtoken";

const publicRoutes = [
  {
    path: "/sign-in",
    whenAuthenticated: "redirect",
  },
  {
    path: "/sign-up",
    whenAuthenticated: "redirect",
  },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/sign-in";

// Middleware principal
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);

  // Extraindo o token do cookie
  const cookie = request.headers.get("cookie");
  const cookies = cookie ? parse(cookie) : {};
  const token = cookies.token; // Supondo que o token esteja no cookie como 'token'

  // Permite usuário acessar rotas públicas (sign-in, sign-up) sem estar autenticado
  if (!token && publicRoute) {
    return NextResponse.next();
  }

  // Se não estiver autenticado e tentar acessar uma rota protegida, redireciona para sign-in
  if (!token && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  // Se o usuário estiver autenticado, valida o token
  if (token && !publicRoute) {
    return NextResponse.next();

    //Aqui, poderiamos validar a data de expiracao do token
    try {
      // Verifica se o token é válido usando o segredo JWT
      // jwt.verify(token, process.env.SECRET_KEY as string);
      // console.log("JWT Secret Key:", process.env.JWT_SECRET_KEY);
    } catch (error) {
      console.log(`Erro no middleware ao verificar o token: ${error}`);
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next(); // Continua a requisição se o token for válido
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)", // Exclui essas rotas do middleware
  ],
};
