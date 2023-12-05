import * as yup from "yup";

export const schemaSignup = yup.object().shape({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    email: yup.string()
        .email("Email không đúng địng dạng")
        .required("Trường dữ liệu bắt buộc"),
    phone: yup.string().test('is-phone-number', 'Số điện thoại không hợp lệ', function (value) {
        if (!value) return true; // Bỏ qua nếu giá trị không được cung cấp
        const isValidPhoneNumber = /^0[0-9]{9}$/.test(value);
        return isValidPhoneNumber;
    }).required("Trường dữ liệu bắt buộc"),
    password: yup.string()
        .required('Trường dữ liệu bắt buộc')
        .min(6, 'Tối thiểu 6 ký tự'),
    confirm_password: yup.string()
        .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp')

})
export type FormSignup = yup.InferType<typeof schemaSignup>
export const schemaLogin = yup.object().shape({
    email: yup.string().email("Email không đúng địng dạng").required("Trường dữ liệu bắt buộc"),
    password: yup.string().min(6, "Tối thiểu 6 ký tự"),
})
export type FormLogin = yup.InferType<typeof schemaLogin>
