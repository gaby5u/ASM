import Document from "../components/cards/Document";

const DocumentsCategory = ({title, list }) => {
  return (
    <div>
      {list.length > 0 && (
        <h2 className="font-rubik font-bold text-xl lg:text-[32px]">{title}</h2>
      ) 
      }
      {list.map((doc) => (
          <Document
            key={doc.id}
            title={doc.title}
            viewUrl={doc.viewUrl}
            downloadUrl={doc.downloadUrl}
          />
        ))}
    </div>
  );
};

export default DocumentsCategory;
