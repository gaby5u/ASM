import * as yup from "yup";

export const acquisitionsSchema = yup.object().shape({
  title: yup.string().required("Titlul este obligatoriu"),
  description: yup.string().required("Descrierea este obligatorie"),
  startDate: yup.date().required("Data de început este obligatorie"),
  finishDate: yup
    .date()
    .required("Data de final este obligatorie")
    .min(
      yup.ref("startDate"),
      "Data de final trebuie să fie după data de început"
    ),
  location: yup.string().required("Locația este obligatorie"),
  services: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required("Completează serviciul"),
      })
    )
    .min(1, "Cel puțin un serviciu este necesar"),
  selectionCriteria: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required("Completează criteriul"),
      })
    )
    .min(1, "Cel puțin un criteriu este necesar"),
offerElements: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required("Completează elementul ofertei"),
      })
    )
    .min(1, "Cel puțin un element al ofertei este necesar"),
  emailSubject: yup.string().required("Subiectul email-ului este obligatoriu"),
  details: yup.string().required("Detaliile sunt obligatorii"),
});
