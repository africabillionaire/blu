"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // In a real app, you would handle authentication here
      alert("Login successful! (demo)")
    }, 1000)
  }

  return (
    <div className="min-h-svh flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo / Brand */}
        <div className="text-center space-y-4">
          <Link href="/" className="text-2xl font-bold">
            Citi Adolph
          </Link>
          <p className="text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full"
              disabled={isSubmitting}
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full"
              disabled={isSubmitting}
              placeholder="••••••••"
            />
          </div>

          <Button
            type="submit"
            variant="brand"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="me-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                <span>Signing in...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        {/* Additional Links */}
        <div className="text-center space-y-3 text-sm">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium hover:underline">
              Sign up
            </Link>
          </p>
          <p>
            <Link href="/forgot-password" className="text-muted-foreground hover:underline">
              Forgot password?
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center text-sm text-muted-foreground">
          <div className="w-full border-t border-gray-200/50"></div>
          <div className="px-4">Or continue with</div>
          <div className="w-full border-t border-gray-200/50"></div>
        </div>

        {/* Social Login (placeholder) */}
        <div className="flex flex-col space-y-3">
          <Button variant="outline" className="w-full">
            <span className="flex items-center justify-center space-x-2">
              {/* Placeholder for icon */}
              Continue with Google
            </span>
          </Button>
          <Button variant="outline" className="w-full">
            <span className="flex items-center justify-center space-x-2">
              Continue with LinkedIn
            </span>
          </Button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-muted-foreground">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}