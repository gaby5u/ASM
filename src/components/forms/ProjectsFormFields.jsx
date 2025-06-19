
import InputText from "../../components/inputs/InputText.jsx";
import DateInput from "../../components/inputs/DateInput.jsx";
import Textarea from "../../components/inputs/Textarea";
import MultipleInputs from "../../components/inputs/MultipleInputs";
import BlueButton from "../../components/buttons/BlueButton";
import ImageUploader from "../../components/inputs/ImageUploader";
import ErrorText from "../alerts/ErrorText.jsx";
import { projectsSchema } from "../../validations/projectsSchema.jsx";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ProjectsFormFields = ({ onSubmit, defaultValues, isEdit = false }) => {

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectsSchema),
    defaultValues,
  });

  const {
    fields: objectionFields,
    append: appendObjection,
    remove: removeObjection,
  } = useFieldArray({ control, name: "objection" });

  const {
    fields: activityFields,
    append: appendActivity,
    remove: removeActivity,
  } = useFieldArray({ control, name: "mainActivities" });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-sm text-blue-500 bg-white rounded-xl max-w-[920px] mx-auto p-4 my-4 sm:p-8 sm:my-8 lg:p-12 lg:my-16"
    >
      <p className="text-base font-bold text-center mb-2 lg:text-2xl lg:mb-4">
        {isEdit ? "Editează proiect" : "Adăugare proiect"}
      </p>
      <InputText
        placeholder="Titlu"
        {...register("title")}
        error={errors.title?.message}
      />
      {errors.title && <ErrorText errorMessage={errors.title?.message} />}

      <DateInput
        title="Data organizării"
        {...register("date")}
        error={errors.date?.message}
      />
      {errors.date && (
        <ErrorText errorMessage={errors.date?.message} />
      )}
      <Textarea
        placeholder="Descriere"
        {...register("description")}
        error={errors.description?.message}
      />
      {errors.description && (
        <ErrorText errorMessage={errors.description?.message} />
      )}
      <MultipleInputs
        title="Obiectivul"
        fields={objectionFields}
        name="objection"
        register={register}
        append={appendObjection}
        remove={removeObjection}
        errors={errors.objection}
      />
      {errors.objection && (
        <ErrorText errorMessage={errors.objection?.message} />
      )}
      <MultipleInputs
        title="Activitate principală"
        fields={activityFields}
        name="mainActivities"
        register={register}
        append={appendActivity}
        remove={removeActivity}
        errors={errors.mainActivities}
      />
      {errors.mainActivities && (
        <ErrorText errorMessage={errors.mainActivities?.message} />
      )}
      <Textarea
        placeholder="Detalii"
        {...register("details")}
        error={errors.details?.message}
      />
      {errors.details && <ErrorText errorMessage={errors.details?.message} />}
        <ImageUploader
          initialImageUrl={watch("image") || null}
          onUpload={(url) => {
            setValue("image", url);
          }}
        />
      {errors.image && <ErrorText errorMessage={errors.image?.message} />}
      <div className="text-center mt-6">
        <BlueButton
          type="submit"
          text={isEdit ? "Salvează modificările" : "Adaugă proiectul"}
        />
      </div>
    </form>
  )
}

export default ProjectsFormFields