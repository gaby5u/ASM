import * as yup from "yup";

export const projectsSchema = yup.object().shape({
  title: yup.string().required("Titlul este obligatoriu"),
  date: yup.date().required("Data de început este obligatorie"),
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
  image: yup
    .string()
    .url("Imaginea trebuie să fie un URL valid")
    // .required("Imaginea este obligatorie"),
});
