import React from "react";
import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import * as Toast from "@radix-ui/react-toast";
import { passwordStrength } from "check-password-strength";
import axios from "axios";
import Router from "next/router";

type Props = {};

function Signup({}: Props) {
  const [open, setOpen] = useState(false);
  const [toastError, setToastError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (username === "" || password === "" || confirmPassword === "") {
      setToastError("Please fill in all the fields");
      setOpen(true);
      return;
    } else if (password !== confirmPassword) {
      setToastError("Passwords do not match");
      setOpen(true);
      return;
    }

    if (passwordStrength(password).value === "Too weak") {
      setToastError("Password is too weak");
      setOpen(true);
      return;
    }

    console.log("submitted succesfully", username, password, confirmPassword);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/api/user",
        { username, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      Router.push("http://localhost:3000/chats");
    } catch (error) {
      // @ts-ignore
      setToastError(error.response.data.message);
    }

    setUsername("");
    setPassword("");
    setConfirmPassword("");
    // setOpen(true);
  };

  return (
    <div>
      <Form.Root className="flex w-full flex-col items-center gap-8">
        {/* username field */}
        <Form.Field name="username" className="relative w-full">
          <div className="absolute top-[-1.1rem] left-1 text-xs text-red-400">
            <Form.Message match="valueMissing">
              Please enter your username
            </Form.Message>
            <Form.Message match="tooShort">
              Your username is too short
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              required
              minLength={5}
              value={username}
              className="w-full rounded border border-my-white/50 bg-my-blue/10 py-2 text-center placeholder:text-center placeholder:text-my-white/80 hover:border-my-white/80"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Control>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2 left-2"
          >
            <path
              d="M21.126 21.9667C20.1944 20.7332 18.989 19.7328 17.6049 19.0445C16.2208 18.3562 14.6958 17.9986 13.15 18C11.6042 17.9986 10.0792 18.3562 8.69511 19.0445C7.31102 19.7328 6.10567 20.7332 5.17402 21.9667M21.126 21.9667C22.944 20.3496 24.2262 18.2181 24.8049 15.8548C25.3837 13.4915 25.2304 11.0081 24.3653 8.73397C23.5002 6.45983 21.9643 4.50237 19.9612 3.1212C17.9581 1.74003 15.5825 1.0004 13.1494 1.0004C10.7162 1.0004 8.3406 1.74003 6.33749 3.1212C4.33439 4.50237 2.79846 6.45983 1.9334 8.73397C1.06834 11.0081 0.915024 13.4915 1.49378 15.8548C2.07254 18.2181 3.35602 20.3496 5.17402 21.9667M21.126 21.9667C18.9314 23.9242 16.0909 25.0042 13.15 25C10.2087 25.0045 7.369 23.9245 5.17402 21.9667M17.15 10C17.15 11.0609 16.7286 12.0783 15.9784 12.8284C15.2283 13.5786 14.2109 14 13.15 14C12.0892 14 11.0717 13.5786 10.3216 12.8284C9.57145 12.0783 9.15002 11.0609 9.15002 10C9.15002 8.93914 9.57145 7.92172 10.3216 7.17158C11.0717 6.42143 12.0892 6 13.15 6C14.2109 6 15.2283 6.42143 15.9784 7.17158C16.7286 7.92172 17.15 8.93914 17.15 10Z"
              stroke="#EFD1EF"
              strokeOpacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Form.Field>

        {/* password field */}
        <Form.Field name="password" className="relative w-full">
          <div className="absolute top-[-1.1rem] left-1 text-xs text-red-400">
            <Form.Message match="valueMissing">
              Please enter your password
            </Form.Message>
            <Form.Message match="tooShort">
              Your password is too short
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              className="w-full rounded border border-my-white/50 bg-my-blue/10 py-2 px-1 text-center placeholder:text-center placeholder:text-my-white/80 hover:border-my-white/80"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Control>
          <svg
            width="22"
            height="28"
            viewBox="0 0 22 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[0.45rem] left-2"
          >
            <path
              d="M17 12V7C17 5.4087 16.3679 3.88258 15.2426 2.75736C14.1174 1.63214 12.5913 1 11 1C9.4087 1 7.88258 1.63214 6.75736 2.75736C5.63214 3.88258 5 5.4087 5 7V12M4 27H18C18.7956 27 19.5587 26.6839 20.1213 26.1213C20.6839 25.5587 21 24.7957 21 24V15C21 14.2044 20.6839 13.4413 20.1213 12.8787C19.5587 12.3161 18.7956 12 18 12H4C3.20435 12 2.44129 12.3161 1.87868 12.8787C1.31607 13.4413 1 14.2044 1 15V24C1 24.7957 1.31607 25.5587 1.87868 26.1213C2.44129 26.6839 3.20435 27 4 27Z"
              stroke="#EFD1EF"
              strokeOpacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Form.Field>

        {/* confirm password */}

        <Form.Field name="confirmPassword" className="relative w-full">
          <div className="absolute top-[-1.1rem] left-1 text-xs text-red-400">
            <Form.Message match="valueMissing">
              Please enter your password
            </Form.Message>
            <Form.Message match="tooShort">
              Your password is too short
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="password"
              required
              minLength={8}
              value={confirmPassword}
              className="w-full rounded border border-my-white/50 bg-my-blue/10 py-2 px-1 text-center placeholder:text-center placeholder:text-my-white/80 hover:border-my-white/80"
              placeholder="Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Control>
          <svg
            width="22"
            height="28"
            viewBox="0 0 22 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[0.45rem] left-2"
          >
            <path
              d="M17 12V7C17 5.4087 16.3679 3.88258 15.2426 2.75736C14.1174 1.63214 12.5913 1 11 1C9.4087 1 7.88258 1.63214 6.75736 2.75736C5.63214 3.88258 5 5.4087 5 7V12M4 27H18C18.7956 27 19.5587 26.6839 20.1213 26.1213C20.6839 25.5587 21 24.7957 21 24V15C21 14.2044 20.6839 13.4413 20.1213 12.8787C19.5587 12.3161 18.7956 12 18 12H4C3.20435 12 2.44129 12.3161 1.87868 12.8787C1.31607 13.4413 1 14.2044 1 15V24C1 24.7957 1.31607 25.5587 1.87868 26.1213C2.44129 26.6839 3.20435 27 4 27Z"
              stroke="#EFD1EF"
              strokeOpacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Form.Field>

        <Form.Submit asChild onClick={(e) => submitHandler(e)}>
          <button className="relative w-full rounded border border-my-white/50 bg-my-black2/50 py-2 hover:border-my-white/80">
            Sign Up
            <svg
              width="26"
              height="22"
              viewBox="0 0 26 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2 right-2"
            >
              <path
                d="M15.025 1L25.15 11M25.15 11L15.025 21M25.15 11H0.849976"
                stroke="#EFD1EF"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Form.Submit>
      </Form.Root>
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={open}
          onOpenChange={setOpen}
          className="mt-3 flex flex-col items-center"
        >
          <Toast.Title className="text-xl text-red-400">Error</Toast.Title>
          <Toast.Description asChild>
            {toastError && <p>{toastError}</p>}
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </div>
  );
}

export default Signup;
