import ProjectsForm from "./ProjectsForm";
import { Helmet } from "react-helmet";

const AddProject = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="font-dm text-blue-500 bg-blue-100 px-2 pt-16 pb-0 sm:px-4 lg:px-10 xl:px-20 xl:py-25 2xl:px-50">
        <ProjectsForm />
      </section>
    </>
  );
};

export default AddProject;
