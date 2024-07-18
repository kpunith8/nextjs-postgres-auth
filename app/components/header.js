import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

export async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const authenticated = await isAuthenticated()
  const user = await getUser()

  return (
    <header className="px-20 py-10">
      <nav className="container flex justify-between">
        <h1 className="text-3xl">Tasks</h1>
        {!authenticated ? (
          <div className="flex gap-x-3">
            <LoginLink className="rounded-md border px-3 py-1">
              Sign in
            </LoginLink>
            <RegisterLink className="rounded-md border bg-black px-3 py-1 text-white">
              Sign up
            </RegisterLink>
          </div>
        ) : (
          <div className="flex gap-4">
            <div>{user.given_name + ' ' + user.family_name}</div>
            <LogoutLink className="underline">Logout</LogoutLink>
          </div>
        )}
      </nav>
    </header>
  )
}
