import * as yup from "yup";

export const documentsSchema = yup.object().shape({
  title: yup.string().required("Titlul este obligatoriu"),
  category: yup.string().required("Categoria este obligatorie"),
  viewUrl: yup
    .string()
    .required("Linkul pentru vizualizare este obligatoriu")
    .url("Linkul trebuie să fie un URL valid"),
  downloadUrl: yup
    .string()
    .required("Linkul pentru descărcare este obligatoriu")
    .url("Linkul trebuie să fie un URL valid")
    .matches(
      /^https:\/\/drive\.google\.com\/uc\?export=download&id=[\w-]+$/,
      "Linkul trebuie să fie de tip Google Drive download (ex: https://drive.google.com/uc?export=download&id=id_ul_documentului)"
    ),
});
