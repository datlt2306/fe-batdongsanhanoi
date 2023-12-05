import * as yup from "yup";
const schemaProject = yup.object({
  category_name: yup
    .string()
    .min(3, "Tối thiểu 3 ký tự!")
    .required("Trường dữ liệu bắt buộc !"),
  category_description: yup
    .string()
    .min(3, "Tối thiểu 3 ký tự!")
    .required("Trường dữ liệu bắt buộc !"),
});

export { schemaProject };
