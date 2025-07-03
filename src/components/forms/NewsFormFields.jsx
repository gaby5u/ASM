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
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.jsx";
import ErrorModal from "../alerts/ErrorModal.jsx";

const NewsFormFields = ({ onSubmit, defaultValues, isEdit = false }) => {
  
  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newsSchema),
    defaultValues,
  });
  
  const images = watch("images") || [];
  const [projects, setProjects] = useState([]);
  
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
  
useEffect(() => {
  if (defaultValues && projects.length > 0) {
    reset(defaultValues);
  }
}, [defaultValues, projects, reset]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, "projects"));
        const projectList = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
        }));
        setProjects(projectList);
      } catch (error) {
        console.error("Eroare la încărcarea proiectelor:", error);
        return <ErrorModal />
      }
    };

    fetchProjects();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-sm text-blue-500 bg-white rounded-xl max-w-[920px] mx-auto p-4 my-4 sm:p-8 sm:my-8 lg:p-12 lg:my-16"
    >
      <p className="text-base font-bold text-center mb-2 lg:text-2xl lg:mb-4">
        {isEdit ? "Editează noutatea" : "Adăugare noutate"}
      </p>
      <InputText
        placeholder="Titlu"
        {...register("title")}
        error={errors.title?.message}
      />
      {errors.title && <ErrorText errorMessage={errors.title?.message} />}
      <div className="flex items-center gap-2 my-2">
        <input type="checkbox" id="finalizat" {...register("isCompleted")} />
        <label htmlFor="finalizat" className="text-sm lg:text-lg">Finalizat</label>
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
      <select
        {...register("category")}
        defaultValue="Evenimente"
        className="bg-blue-100 text-blue-400 placeholder-blue-400 border-1 w-full border-blue-400 rounded-xl text-sm py-2 px-3 my-1 transition-all duration-200 focus:ring-1 focus:ring-blue-400 focus:outline-none sm:my-3 sm:py-4 sm:px-6 lg:text-lg"
      >
        <option value="" disabled>
          Selectează categoria
        </option>
        <option value="Evenimente">Evenimente</option>
        <option value="Cercetări">Cercetări</option>
        <option value="Admitere">Admitere</option>
        <option value="Advocacy">Advocacy</option>
        <option value="Întâlniri">Întâlniri</option>
        <option value="Colaborări">Colaborări</option>
        <option value="Inițiative">Inițiative</option>
      </select>
      {errors.category && <ErrorText errorMessage={errors.category?.message} />}
      <select
        {...register("associatedProject")}
        className="bg-blue-100 text-blue-400 placeholder-blue-400 border-1 w-full border-blue-400 rounded-xl text-sm py-2 px-3 my-1 transition-all duration-200 focus:ring-1 focus:ring-blue-400 focus:outline-none sm:my-3 sm:py-4 sm:px-6 lg:text-lg"
      >
        <option value="" disabled>
          Selectează proiectul asociat
        </option>
        {projects.map((project) => (
          <option key={project.id} value={project.title}>
            {project.title}
          </option>
        ))}
      </select>
      {errors.associatedProject && (
        <ErrorText errorMessage={errors.associatedProject?.message} />
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
      {errors.images && (
        <ErrorText errorMessage={errors.images?.message}></ErrorText>
      )}
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
