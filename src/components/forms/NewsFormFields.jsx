import InputText from "../../components/inputs/InputText.jsx";
import DateInput from "../../components/inputs/DateInput.jsx";
import Textarea from "../../components/inputs/Textarea";
import MultipleInputs from "../../components/inputs/MultipleInputs";
import BlueButton from "../../components/buttons/BlueButton";
import ImageUploader from "../../components/inputs/ImageUploader";
import ErrorText from "../alerts/ErrorText.jsx";
import { newsSchema } from "../../validations/newsSchems";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const NewsFormFields = ({ onSubmit, defaultValues, isEdit = false }) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newsSchema),
    defaultValues,
  });

  const images = watch("images") || [];

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

  const handleImageUpload = (url) => {
    const current = getValues("images");
    if (current.length < 4) {
      setValue("images", [...current, url]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) =>
        console.log("ERRORS", errors)
      )}
      className="shadow-sm text-blue-500 bg-white rounded-xl max-w-[920px] mx-auto p-4 my-4 sm:p-8 sm:my-8 lg:p-12 lg:my-16"
    >
      <p className="text-base font-bold text-center mb-2 lg:text-2xl lg:mb-4">
        {isEdit ? "Editează noutatea" : "Adăugare noutate"}
      </p>
      <InputText
        placeholder="Titlu*"
        {...register("title")}
        error={errors.title?.message}
      />
      {errors.title && <ErrorText errorMessage={errors.title?.message} />}
      <div className="flex items-center gap-2 my-2">
        <input type="checkbox" id="finalizat" {...register("isCompleted")} />
        <label htmlFor="finalizat">Finalizat</label>
      </div>
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
        placeholder="Categorie*"
        {...register("category")}
        error={errors.category?.message}
      />
      {errors.category && <ErrorText errorMessage={errors.category?.message} />}
      <InputText
        placeholder="Proiect asociat*"
        {...register("associatedProject")}
        error={errors.associatedProject?.message}
      />
      {errors.associatedProject && (
        <ErrorText errorMessage={errors.associatedProject?.message} />
      )}
      <Textarea
        placeholder="Descriere*"
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
        placeholder="Detalii*"
        {...register("details")}
        error={errors.details?.message}
      />
      {errors.details && <ErrorText errorMessage={errors.details?.message} />}
      {[...Array(4)].map((_, i) => (
        <ImageUploader
          key={i}
          initialImageUrl={images[i] || null}
          onUpload={(url) => {
            const updatedImages = [...images];
            updatedImages[i] = url;
            setValue("images", updatedImages);
          }}
        />
      ))}
      {errors.images && <ErrorText errorMessage={errors.images?.message}></ErrorText>}
      <div className="text-center mt-6">
        <BlueButton
          type="submit"
          text={isEdit ? "Salvează modificările" : "Adaugă noutatea"}
        />
      </div>
    </form>
  );
};

export default NewsFormFields;
