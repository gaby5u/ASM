import { useState, useEffect } from "react";

const ImageUploader = ({ onUpload, initialImageUrl }) => {
  const [preview, setPreview] = useState(initialImageUrl || null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setPreview(initialImageUrl);
  }, [initialImageUrl]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "frontend-upload");
    formData.append("cloud_name", "dyisa4p9w");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dyisa4p9w/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      onUpload(data.secure_url);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {preview && <img src={preview} alt="Preview" className="w-40 h-auto mb-2 rounded-md" />}
      <input type="file" accept="image/*" placeholder="Image" onChange={handleImageChange} className="bg-blue-100 text-blue-400 cursor-pointer placeholder-blue-400 border-1 w-full border-blue-400 rounded-xl text-sm py-2 px-3 my-1 transition-all duration-200 focus:ring-1 focus:ring-blue-400 focus:outline-none sm:my-3 sm:py-4 sm:px-6 lg:text-lg"/>
      {uploading && <p className="text-sm text-blue-500">Se încarcă...</p>}
    </div>
  );
};

export default ImageUploader;