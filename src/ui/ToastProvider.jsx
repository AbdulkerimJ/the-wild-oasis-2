import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        // Default options
        duration: 2000,
        style: {
          borderRadius: "12px",
          padding: "16px 24px",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: "500",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          maxWidth: "400px",
          color: "#1f2937",
          background: "#ffffff",
        },
        // Success toast
        success: {
          style: {
            background: "#f0fdf4",
            border: "1px solid #16a34a",
            color: "#166534",
          },
          iconTheme: {
            primary: "#16a34a",
            secondary: "#f0fdf4",
          },
        },
        // Error toast
        error: {
          style: {
            background: "#fef2f2",
            border: "1px solid #dc2626",
            color: "#991b1b",
          },
          iconTheme: {
            primary: "#dc2626",
            secondary: "#fef2f2",
          },
        },
        // Loading toast
        loading: {
          style: {
            background: "#f3f4f6",
            border: "1px solid #6b7280",
            color: "#374151",
          },
          iconTheme: {
            primary: "#6b7280",
            secondary: "#f3f4f6",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
