import * as yup from "yup";

export const newsSchema = yup.object().shape({
  title: yup.string().required("Titlul este obligatoriu"),
  isCompleted: yup.boolean(),
  startDate: yup.date().required("Data de început este obligatorie"),
  finishDate: yup
    .date()
    .required("Data de final este obligatorie")
    .min(
      yup.ref("startDate"),
      "Data de final trebuie să fie după data de început"
    ),
  category: yup.string().required("Categoria este obligatorie"),
  associatedProject: yup
    .string()
    .required("Proiectul asociat este obligatoriu"),
  description: yup.string().required("Descrierea este obligatorie"),
  objection: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required("Completează obiectivul"),
      })
    )
    .min(1, "Cel puțin un obiectiv este necesar"),
  mainActivities: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required("Completează activitatea"),
      })
    )
    .min(1, "Cel puțin o activitate este necesară"),
  details: yup.string().required("Detaliile sunt obligatorii"),
  images: yup
    .array()
    .of(yup.string().url("Imaginea trebuie să fie un URL valid")).required("Imaginile sunt obligatorii")
    // .min(4, "Toate imaginile sunt obligatorii")
});
