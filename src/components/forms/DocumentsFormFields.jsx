import InputText from "../../components/inputs/InputText.jsx";
import BlueButton from "../../components/buttons/BlueButton";
import ErrorText from "../alerts/ErrorText.jsx";
import { documentsSchema } from "../../validations/documentsSchema.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const DocumentsFormFields = ({ onSubmit, defaultValues, isEdit = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(documentsSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-sm text-blue-500 bg-white rounded-xl max-w-[920px] mx-auto p-4 my-4 sm:p-8 sm:my-8 lg:p-12 lg:my-16"
    >
      <p className="text-base font-bold text-center mb-2 lg:text-2xl lg:mb-4">
        {isEdit ? "Editează document" : "Adăugare document"}
      </p>
      <InputText
        placeholder="Titlu"
        {...register("title")}
        error={errors.title?.message}
      />
      {errors.title && <ErrorText errorMessage={errors.title?.message} />}
      <select
        {...register("category")}
        defaultValue="Politici"
        className="bg-blue-100 text-blue-400 placeholder-blue-400 border-1 w-full border-blue-400 rounded-xl text-sm py-2 px-3 my-1 transition-all duration-200 focus:ring-1 focus:ring-blue-400 focus:outline-none sm:my-3 sm:py-4 sm:px-6 lg:text-lg"
      >
        <option value="" disabled>
          Selectează categoria
        </option>
        <option value="Politici">Politici</option>
        <option value="Documente legale și administrative">
          Documente legale și administrative
        </option>
        <option value="Planuri strategice și de activitate">
          Planuri strategice și de activitate
        </option>
        <option value="Rapoarte">Rapoarte</option>
        <option value="Decizii și hotărâri">Decizii și hotărâri</option>
        <option value="Procese verbale">Procese verbale</option>
        <option value="Chestionare și analize sociologice">
          Chestionare și analize sociologice
        </option>
        <option value="Contracte si acorduri">Contracte si acorduri</option>
      </select>
      <InputText
        placeholder="Link drive"
        {...register("viewUrl")}
        error={errors.viewUrl?.message}
      />
      {errors.viewUrl && <ErrorText errorMessage={errors.viewUrl?.message} />}
      <InputText
        placeholder="Link pentru descărcare"
        {...register("downloadUrl")}
        error={errors.downloadUrl?.message}
      />
      {errors.downloadUrl && (
        <ErrorText errorMessage={errors.downloadUrl?.message} />
      )}
      <div className="text-center mt-6">
        <BlueButton
          type="submit"
          text={isEdit ? "Salvează modificările" : "Adaugă documentul"}
        />
      </div>
    </form>
  );
};

export default DocumentsFormFields;
