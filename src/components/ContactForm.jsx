import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";

import InputText from "./inputs/InputText";
import Textarea from "./inputs/Textarea";
import CustomNotification from "./alerts/CustomNotification";
import ErrorText from "./alerts/ErrorText";
import BlueButton from "./buttons/BlueButton";
import { useState } from "react";

const schema = yup.object().shape({
  firstName: yup.string().required("Prenumele este obligatoriu!"),
  secondName: yup.string().required("Numele este obligatoriu!"),
  email: yup
    .string()
    .email("Email invalid")
    .test(
      "is-valid-domain",
      "Emailul trebuie să conțină un domeniu valid (ex. gmail.com)",
      (value) => {
        if (!value) return false;
        const domain = value.split("@")[1];
        return domain && domain.includes(".");
      }
    )
    .required("Emailul este obligatoriu!"),
  message: yup
    .string()
    .min(20, "Mesajul trebuie să aibă cel puțin 20 caractere")
    .required("Mesajul este obligatoriu!"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [notification, setNotification] = useState(null);

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: data.firstName,
          secondName: data.secondName,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setNotification({ message: "Mesaj trimis cu succes!", type: "success" });
      reset();
    } catch (err) {
      console.log("EmailJS Error:", err);
      setNotification({
        message: "Eroare la trimiterea mesajului",
        type: "error",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-sm w-full p-4 sm:p-8 lg:p-12"
    >
      <h2 className="text-blue-500 font-rubik font-bold text-xl lg:text-[32px]">
        Devino membru al echipei noastre!
      </h2>
      <div className="flex items-center justify-between gap-2 mt-4 md:gap-6">
        <div className="w-full">
          <InputText {...register("secondName")} placeholder="Nume*" />
          {errors.secondName && (
            <ErrorText errorMessage={errors.secondName?.message} />
          )}
        </div>
        <div className="w-full">
          <InputText {...register("firstName")} placeholder="Prenume*" />
          {errors.firstName && (
            <ErrorText errorMessage={errors.firstName?.message} />
          )}
        </div>
      </div>

      <InputText
        {...register("email")}
        placeholder="Email*"
        className="w-full"
      />
      {errors.email && <ErrorText errorMessage={errors.email?.message} />}

      <Textarea {...register("message")} placeholder="Mesaj*" />
      {errors.message && <ErrorText errorMessage={errors.message.message} />}
      <br />

      <div className="text-center">
        <BlueButton
          text="Trimite"
          type="submit"
          disabled={isSubmitting}
          className="px-12"
        />
        <p className="text-blue-400 text-base mt-6 lg:text-xl">
          Vrei să devii voluntar? Aplică{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeReTR2RWHb6OgGnNGOLpbzkg1S3BS0MtoKPX6Wal7a8Y742w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 underline"
          >
            aici
          </a>
          !
        </p>
      </div>

      {notification && (
        <CustomNotification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </form>
  );
};

export default ContactForm;
