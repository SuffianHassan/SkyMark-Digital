"use client";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/components/services/firebase.config";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const ADMIN_EMAIL = "admin@smd.com";


const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );


      if (userCredential.user.email !== ADMIN_EMAIL) {
        toast.warning("Access denied: not authorized as admin.");
        return;
      }


      toast.success("Login successful!");


      // ✅ Next.js navigation
      router.push("/dashboard");


    } catch (error) {
      toast.error("Invalid email or password");
    }
  };


  const styles: Record<string, React.CSSProperties> = {
    page: {
      minHeight: "100vh",
      display: "flex",
      background: "#0F172A",
      fontFamily: "Inter, sans-serif",
      flexDirection: isMobile ? "column" : "row",
    },


    imageSide: {
      flex: 1,
      backgroundImage: "url('/images/services/cyber.jpg')", // 🔁 CHANGE IMAGE HERE
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      minWidth: "800px",
      display: isMobile ? "none" : "block",
    },


    imageOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(135deg, rgba(15,23,42,0.2), rgba(15,23,42,0.1))",
    },


    imageText: {
      position: "absolute",
      bottom: "60px",
      left: "60px",
      color: "#fff",
      maxWidth: "450px",
    },

    imageTitle: {
      fontSize: "34px",
      fontWeight: "bold",
      margin: 0,
    },


    imageSubtitle: {
      fontSize: "1.1rem",
      opacity: 0.9,
    },


    formSide: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // background: "#F1F5F9",
      // background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      background: "#fff",
      boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
      padding: isMobile ? "20px" : "40px",
    },


    card: {
      width: "100%",
      maxWidth: isMobile ? "100%" : "420px",
      background: "#ffffff",
      padding: isMobile ? "28px" : "40px",
      borderRadius: "20px",
      boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
      color: "#0f172a",
    },

    title: {
      fontSize: isMobile ? "1.6rem" : "2rem",
      fontWeight: 800,
      marginBottom: "6px",
      textAlign: "center",
      color: "#006911",
    },


    subtitle: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "0.95rem",
      opacity: 0.8,
    },


    label: {
      display: "block",
      fontSize: "0.85rem",
      fontWeight: 600,
      marginBottom: "6px",
    },


    input: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: "10px",
      border: "1px solid #e2e8f0",
      outline: "none",
      fontSize: "0.95rem",
      marginBottom: "6px",
      background: "#ffffff",            // ✅ FIX
      color: "#0f172a",                 // dark text
      transition: "all 0.2s ease",
    },


    inputFocus: {
      border: "1px solid #0F172A",
      boxShadow: "0 0 0 2px rgba(15,23,42,0.1)",
    },


    error: {
      fontSize: "0.75rem",
      color: "#7f1d1d",
      marginBottom: "10px",
    },


    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "12px",
      border: "none",
      // background: "linear-gradient(135deg, #0F172A, #1e293b)",
      background: "#006911",
      color: "#fff",
      fontSize: "1rem",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "10px",
      transition: "all 0.3s ease",
    },


    footer: {
      textAlign: "center",
      marginTop: "18px",
      fontSize: "0.75rem",
      opacity: 0.7,
    },
    eyeIcon: {
      position: "absolute",
      right: "12px",     // ✅ FIX
      top: "70%",        // better alignment
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#64748b",
    },
    logoRow: {
      display: "flex",
      alignItems: "center",   // 🔥 THIS centers vertically
      justifyContent: "flex-start", // instead of "left"
      gap: "12px",
      marginBottom: "12px",
    },

    logoInline: {
      height: "100px",
      width: "auto",
      objectFit: "contain",
    },

    logo: {
      height: "50px",
      width: "auto",
      objectFit: "contain",
    }
  };


  return (
    <div style={styles.page}>
      <div style={styles.imageSide}>
        <div style={styles.imageOverlay}></div>


        <div style={styles.imageText}>
          {/* Row: Logo + Title */}
          <div style={styles.logoRow}>
            <img src="/images/logo-white.png" alt="Logo" style={styles.logoInline} />
            <h1 style={styles.imageTitle}>Admin Control Panel</h1>
          </div>


          {/* Subtitle */}
          <p style={styles.imageSubtitle}>
            Manage content, media, and site sections securely from one place.
          </p>


        </div>
      </div>


      {/* Right Login Form */}
      <div style={styles.formSide}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>Sign in to continue</p>


          <form onSubmit={handleSubmit(onSubmit)}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              {...register("email")}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, { border: "1px solid #e2e8f0", boxShadow: "none" })}
            />
            {errors.email && (
              <div style={styles.error}>{errors.email.message}</div>
            )}


            <div style={{ position: "relative" }}>
              <label style={styles.label}>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                style={{ ...styles.input, paddingRight: "15px" }}
                placeholder=""
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            {errors.password && (
              <div style={styles.error}>{errors.password.message}</div>
            )}

            <button type="submit" style={styles.button}>
              Sign In
            </button>
          </form>


          <div style={styles.footer}>
            © {new Date().getFullYear()} Skymark Digital Admin
          </div>
        </div>
      </div>
    </div>
  );
}
