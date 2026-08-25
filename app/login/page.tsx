import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "@/lib/session";
import { LoginForm } from "@/components/notes/LoginForm";

// Halaman login — kalau sudah login, langsung arahkan ke /notes
export default async function LoginPage() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (token) {
    const userId = await verifySession(token);
    if (userId) redirect("/notes");
  }

  return <LoginForm />;
}
