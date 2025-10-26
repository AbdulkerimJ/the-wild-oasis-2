import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

import useUser from "./useUser";
import useUpdateUser from "./useUpdateUser";
import toast from "react-hot-toast";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();
  const {updateUser, isUpdatingUser} = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if(!fullName) {
      toast.error("Full Name is required");
      return;
    };
    updateUser({ fullName, avatar }, {
      onSuccess: () => {
        setAvatar(null);
        e.target.reset();
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* Email */}

      <Input label="Email Address" value={email} disabled />

      {/* Full Name */}

      <Input
        label="Full Name"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        id="fullName"
        disabled={isUpdatingUser}
      />

      {/* Avatar */}

      <FileInput
        label="Profile Picture"
        id="avatar"
        accept="image/*"
        onChange={(e) => setAvatar(e.target.files[0])}
        className="bg-transparent border-0 shadow-none"
        disabled={isUpdatingUser}
      />

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        <Button type="submit" disabled= {isUpdatingUser}>Update Account</Button>
      </div>
    </Form>
  );
}

export default UpdateUserDataForm;
