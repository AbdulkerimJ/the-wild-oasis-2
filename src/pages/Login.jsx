import LoginForm from "../ui/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="flex flex-col gap-4 bg-gray-50">
        <Logo />
        <LoginForm />
    </div>
  );
}

export default Login;
