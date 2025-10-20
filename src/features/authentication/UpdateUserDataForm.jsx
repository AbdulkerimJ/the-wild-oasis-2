import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

import useUser from "./useUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Handle update logic here
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
      />

      {/* Avatar */}

      <FileInput
        label="Profile Picture"
        id="avatar"
        accept="image/*"
        onChange={(e) => setAvatar(e.target.files[0])}
        className="bg-transparent border-0 shadow-none"
      />

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-4">
  <Button type="reset" className="bg-gray-400 hover:bg-gray-500">
    Cancel
  </Button>
  <Button type="submit">Update Account</Button>
</div>

    </Form>
  );
}

export default UpdateUserDataForm;
