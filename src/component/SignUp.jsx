import { useFormik } from "formik";
import { useMemo, useState } from "react";
import * as Yup from "yup";
import { addSubscriber } from "../utils/subscribe";

function SignUp() {
  const [message, setMessage] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email"),
    }),
    onSubmit: async ({ email }) => {
      setMessage("");
      setSubscribeStatus("loading");
      const status = (await addSubscriber(email)).status;
      switch (status) {
        case "added":
          setSubscribeStatus("success");
          setMessage("You have been added to our waitlist");
          break;
        case "validation error":
          setSubscribeStatus("error");
          setMessage("Unauthorized request");
          break;
        case "already exist":
          setSubscribeStatus("error");
          setMessage("You are already in the waitlist");
          break;

        case "api limit":
          setSubscribeStatus("error");
          setMessage(
            "Too many submissions at this time, please try again later"
          );
          break;

        case "failed":
          setSubscribeStatus("error");
          setMessage("Something went wrong");
          break;

        default:
          setSubscribeStatus("idle");
          break;
      }
    },
  });

  const emailError = useMemo(
    () =>
      formik.errors.email && formik.touched.email
        ? formik.errors.email
        : subscribeStatus === "error"
          ? message
          : "",
    [formik.errors.email, formik.touched.email, message, subscribeStatus]
  );

  return (
    <section id="buy" className="py-[103px] bg-[#FFFFFF0D] action-bg">
      <div className="container bg-black">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center bg-[#ffffff1c] border border-[#FFFFFF0D] py-[74px] px-[48px] w-full">
          <div className="lg:max-w-[386px]">
            <h2 className="font-medium text-3xl ">
              <span className="block lg:inline-block mr-2">Sign Up for</span>
              <span className="block lg:inline-block mt-1">Updates</span>
            </h2>
            <p className="font-lexend  py-3 text-base text-faint-60 lg:max-w-[348px]">
              Be the first to know about the $TENSOR token sale and upcoming
              milestones
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="lg:w-[50%] flex items-start"
          >
            <div className="inline-block md:w-[40%] lg:w-[50%] mr-3 my-3 md:my-0">
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="Enter your email"
                className="border-b-[1px] bg-transparent p-2 block md:inline-block w-full text-white font-rubik focus:outline-none"
              />
              {emailError ? (
                <p className="text-sm font-light text-red-500 mt-2">
                  {emailError}
                </p>
              ) : (
                subscribeStatus === "success" && (
                  <p className="text-sm font-light text-green-500 mt-2">
                    {message}
                  </p>
                )
              )}
            </div>
            <button
              type="submit"
              className="p-2 bg-[#ffffff] text-[#000000] arc-border w-full md:w-[120px]"
            >
              {subscribeStatus === "loading" ? "Signing up" : "Sign up"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
