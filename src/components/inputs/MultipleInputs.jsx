import InputText from "./InputText";

const MultipleInputs = ({
  title,
  fields,
  name,
  register,
  append,
  remove,
  errors,
}) => {
  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 items-center">
          <InputText
            {...register(`${name}[${index}].value`)}
            defaultValue={field.value}
            placeholder={`${title} ${index + 1}`}
          />
          <button
            type="button"
            onClick={() => remove(index)}
            disabled={fields.length === 1}
            className="bg-blue-400 transition-all rounded-xl border-2 border-blue-400 duration-200 hover:bg-blue-500 hover:border-blue-500 active:bg-blue-500 active:border-blue-500 p-2 sm:p-4 lg:p-5"
          >
            <svg
              className="w-[15px] rotate-[45deg] lg:w-[20px]"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10H19M10 1V19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ))}
      {errors?.[0]?.value && (
        <p className="text-red-500 text-sm mb-2">{errors[0].value.message}</p>
      )}
      <div className="text-center w-full">
        <button
          type="button"
          onClick={() => append("")}
          className="bg-blue-400 text-white rounded-xl transition-all duration-200 hover:bg-blue-500 text-sm px-3 py-2 sm:px-6 lg:text-lg"
        >
          + Adaugă
        </button>
      </div>
    </div>
  );
};

export default MultipleInputs;
