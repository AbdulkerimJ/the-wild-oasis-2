import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";

function NewUsers() {
  return (
    <div className="p-4 sm:p-8 flex flex-col gap-8">
      <Logo />
      <SignupForm />
    </div>
  );
}

export default NewUsers;
