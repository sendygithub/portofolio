"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, LogIn } from "lucide-react";
import { notesApi } from "@/lib/notes-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await notesApi.login(username.trim(), password);
      router.push("/notes");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal login");
      setLoading(false);
    }
  }

  return (
    <main className="notes-theme flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-sm border border-border bg-card p-8">
        <div className="border-b border-border pb-5">
          <p className="eyebrow-accent">Private</p>
          <h1 className="display-2 mt-2">Catatan</h1>
          <p className="body-sm mt-2">
            Masuk untuk membuka catatan pribadimu.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 pt-6">
          <div>
            <Label htmlFor="username" className="label-elegant">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              autoComplete="username"
              className="h-11"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="label-elegant">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••"
              autoComplete="current-password"
              className="h-11"
              required
            />
          </div>

          {error && (
            <p className="border-l-2 border-destructive pl-3 font-body text-[13px] text-destructive">
              {error}
            </p>
          )}

          <Button type="submit" disabled={loading} className="h-11 w-full">
            <LogIn className="h-4 w-4" />
            {loading ? "Memproses..." : "Masuk"}
          </Button>
        </form>

        <div className="mt-6 flex flex-col items-center gap-4 border-t border-border pt-5">
          <p className="eyebrow text-center">
            Demo: <span className="text-foreground">admin</span> /{" "}
            <span className="text-foreground">123</span>
          </p>

          <Link href="/" className="link-plain justify-center">
            <ArrowLeft className="h-3 w-3" />
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
