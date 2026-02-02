"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        console.log("Attempting login with:", email);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            console.log("Supabase response:", { data, error });

            if (error) {
                console.error("Login Error:", error);
                alert("Login Failed: " + error.message);
                setLoading(false);
            } else if (data?.user) {
                console.log("Login successful, user:", data.user);
                // router.push("/admin/dashboard");
                // Fallback to window.location to force reload if router hangs
                window.location.href = "/admin/dashboard";
            } else {
                console.warn("No user data returned but no error?");
                alert("Login succeeded but no user session found.");
                setLoading(false);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred.");
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
            fontFamily: "sans-serif"
        }}>
            <div style={{
                background: "white",
                padding: "3rem",
                borderRadius: "12px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <div style={{
                        width: "60px",
                        height: "60px",
                        background: "#f3f4f6",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                        color: "#1e3a8a"
                    }}>
                        <Lock size={30} />
                    </div>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1e3a8a" }}>Admin Portal</h1>
                    <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>Sign in to manage bookings</p>
                </div>

                <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>Email Address</label>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                                <User size={18} />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 1rem 0.75rem 2.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    outline: "none",
                                    fontSize: "0.95rem"
                                }}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>Password</label>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                                <Lock size={18} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 2.5rem 0.75rem 2.5rem", // Extra padding right for eye icon
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    outline: "none",
                                    fontSize: "0.95rem"
                                }}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: "absolute",
                                    right: "12px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    background: "none",
                                    border: "none",
                                    color: "#9ca3af",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.875rem" }}>
                        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", color: "#374151" }}>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                style={{ accentColor: "#1e3a8a", cursor: "pointer" }}
                            />
                            Remember me
                        </label>
                        <a href="#" style={{ color: "#1e3a8a", fontWeight: "600", textDecoration: "none" }}>Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            background: "#c5a467",
                            color: "white",
                            padding: "0.75rem",
                            borderRadius: "6px",
                            fontWeight: "600",
                            border: "none",
                            cursor: loading ? "not-allowed" : "pointer",
                            transition: "background 0.2s",
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    <div style={{ textAlign: "center", fontSize: "0.85rem", color: "#6b7280" }}>
                        <p>Powered by Supabase Auth</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
