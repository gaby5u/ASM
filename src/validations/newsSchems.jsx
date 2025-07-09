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
  associatedProject: yup.string(),
  description: yup.string().when("isCompleted", {
    is: true,
    then: (schema) =>
      schema
        .required("Descrierea este obligatorie")
        .max(518, "Descrierea nu poate depăși numarul de caractere"),
    otherwise: (schema) => schema.notRequired(),
  }),
  objection: yup.array().when("isCompleted", {
    is: true,
    then: (schema) =>
      schema
        .of(
          yup.object().shape({
            value: yup.string().required("Completează obiectivul"),
          })
        )
        .min(1, "Cel puțin un obiectiv este necesar"),
    otherwise: (schema) =>
      schema.of(
        yup.object().shape({
          value: yup.string().notRequired(),
        })
      ),
  }),
  mainActivities: yup.array().when("isCompleted", {
    is: true,
    then: (schema) =>
      schema
        .of(
          yup.object().shape({
            value: yup.string().required("Completează activitatea"),
          })
        )
        .min(1, "Cel puțin o activitate este necesară"),
    otherwise: (schema) =>
      schema.of(
        yup.object().shape({
          value: yup.string().notRequired(),
        })
      ),
  }),
  details: yup.string(),
  participateLink: yup
    .string()
    .url("Linkul de participare trebuie să fie un URL valid"),
  images: yup
    .array()
    .when("isCompleted", {
      is: true,
      then: (schema) =>
        schema
          .of(yup.string().url("Imaginea trebuie să fie un URL valid"))
          .required("Imaginile sunt obligatorii")
          .min(4, "Toate imaginile sunt obligatorii"),
      otherwise: (schema) => schema.of(yup.string().notRequired()),
    }),
});
