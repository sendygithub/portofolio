"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { notesApi } from "@/lib/notes-api";

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
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-surface border border-secondary/20 p-8">
        <p className="font-label uppercase tracking-[0.2em] text-secondary text-xs mb-2">
          Private Notes
        </p>
        <h1 className="font-display text-3xl font-bold uppercase text-primary mb-1">
          Catatan Proyek
        </h1>
        <p className="text-sm text-secondary mb-8">
          Login untuk membuka dashboard catatan pribadi.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block font-label uppercase tracking-[0.14em] text-xs text-secondary mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              autoComplete="username"
              required
              className="w-full bg-background border border-secondary/30 px-4 py-3 text-primary placeholder:text-secondary/50 outline-none focus:border-tertiary transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-label uppercase tracking-[0.14em] text-xs text-secondary mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••"
              autoComplete="current-password"
              required
              className="w-full bg-background border border-secondary/30 px-4 py-3 text-primary placeholder:text-secondary/50 outline-none focus:border-tertiary transition-colors"
            />
          </div>

          {error && <p className="text-sm text-tertiary">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-xs text-secondary/60 mt-6 text-center">
          Demo: username <span className="text-primary">admin</span> / password{" "}
          <span className="text-primary">123</span>
        </p>

        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-xs text-secondary hover:text-primary transition-colors"
          >
            ← Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
