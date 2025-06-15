import InputText from "../../components/inputs/InputText.jsx";
import DateInput from "../../components/inputs/DateInput.jsx";
import Textarea from "../../components/inputs/Textarea";
import MultipleInputs from "../../components/inputs/MultipleInputs";
import BlueButton from "../../components/buttons/BlueButton";
import ErrorText from "../alerts/ErrorText.jsx";
import { acquisitionsSchema } from "../../validations/acquisitionsSchema.jsx";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AcquisitionsFormFields = ({
  onSubmit,
  defaultValues,
  isEdit = false,
}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(acquisitionsSchema),
    defaultValues,
  });

  const {
    fields: servicesFields,
    append: appendService,
    remove: removeService,
  } = useFieldArray({ control, name: "services" });

  const {
    fields: selectionCriteriaFields,
    append: appendCriteria,
    remove: removeCriteria,
  } = useFieldArray({ control, name: "selectionCriteria" });

  const {
    fields: offerElementsFields,
    append: appendOffer,
    remove: removeOffer,
  } = useFieldArray({ control, name: "offerElements" });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-sm text-blue-500 bg-white rounded-xl max-w-[920px] mx-auto p-4 my-4 sm:p-8 sm:my-8 lg:p-12 lg:my-16"
    >
      <p className="text-base font-bold text-center mb-2 lg:text-2xl lg:mb-4">
        {isEdit ? "Editează anunț" : "Adăugare anunț"}
      </p>
      <InputText
        placeholder="Titlu*"
        {...register("title")}
        error={errors.title?.message}
      />
      {errors.title && <ErrorText errorMessage={errors.title?.message} />}
      <Textarea
        placeholder="Descriere*"
        {...register("description")}
        error={errors.description?.message}
      />
      {errors.description && (
        <ErrorText errorMessage={errors.description?.message} />
      )}
      <DateInput
        title="Data de început"
        {...register("startDate")}
        error={errors.startDate?.message}
      />
      {errors.startDate && (
        <ErrorText errorMessage={errors.startDate?.message} />
      )}
      <DateInput
        title="Data de final"
        {...register("finishDate")}
        error={errors.finishDate?.message}
      />
      {errors.finishDate && (
        <ErrorText errorMessage={errors.finishDate?.message} />
      )}
      <InputText
        placeholder="Locație*"
        {...register("location")}
        error={errors.location?.message}
      />
      {errors.location && <ErrorText errorMessage={errors.location?.message} />}
      <MultipleInputs
        title="Serviciul solicitat"
        fields={servicesFields}
        name="services"
        register={register}
        append={appendService}
        remove={removeService}
        errors={errors.services}
      />
      {errors.services && <ErrorText errorMessage={errors.services?.message} />}
      <MultipleInputs
        title="Criteriu de selecție"
        fields={selectionCriteriaFields}
        name="selectionCriteria"
        register={register}
        append={appendCriteria}
        remove={removeCriteria}
        errors={errors.selectionCriteria}
      />
      {errors.selectionCriteria && (
        <ErrorText errorMessage={errors.selectionCriteria?.message} />
      )}
      <MultipleInputs
        title="Element important al ofertei"
        fields={offerElementsFields}
        name="offerElements"
        register={register}
        append={appendOffer}
        remove={removeOffer}
        errors={errors.offerElements}
      />
      {errors.offerElements && (
        <ErrorText errorMessage={errors.offerElements?.message} />
      )}
      <InputText
        placeholder="Subiectul email-ului*"
        {...register("emailSubject")}
        error={errors.emailSubject?.message}
      />
      {errors.emailSubject && <ErrorText errorMessage={errors.emailSubject?.message} />}
      <Textarea
        placeholder="Detalii*"
        {...register("details")}
        error={errors.details?.message}
      />
      {errors.details && <ErrorText errorMessage={errors.details?.message} />}
      <div className="text-center mt-6">
        <BlueButton
          type="submit"
          text={isEdit ? "Salvează modificările" : "Adaugă anunțul"}
        />
      </div>
    </form>
  );
};

export default AcquisitionsFormFields;
