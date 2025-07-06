"use client";
import MaxWidth from "@/components/shared/maxWidth";
import { useForm } from "react-hook-form";

// ...other imports
type FormData = {
  fullName: string;
  email: string;
  reason: string; // NEW FIELD
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
   
      <MaxWidth className="px-4 lg:px-0 sm:py-12 py-6 w-full ">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-800">Contact Me</h2>
          <p className="text-sm text-gray-500 mt-2">
            Feel free to reach out for collaboration, questions, or just a
            friendly hello.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              autoComplete="name"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-transparent outline-none focus:outline-slate-400 focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-transparent outline-none focus:outline-slate-400 focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Reason for Contact - NEW */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Reason for Contact
            </label>
            <select
              {...register("reason", { required: "Please select a reason" })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-transparent outline-none focus:outline-slate-400 focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                -- Select an option --
              </option>
              <option value="collaboration">Collaboration</option>
              <option value="freelance">Freelance/Project Work</option>
              <option value="question">Question/Help</option>
              <option value="just_saying_hi">Just Saying Hi</option>
              <option value="Other">Other</option>
            </select>
            {errors.reason && (
              <p className="text-sm text-red-500 mt-1">
                {errors.reason.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              {...register("message", { required: "Message is required" })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-transparent outline-none focus:outline-slate-400 focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className=" text-sm font-semibold cursor-pointer text-white bg-slate-800 hover:bg-slate-900 px-8 py-2.5 rounded-md transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </MaxWidth>
   
  );
};

export default Contact;
