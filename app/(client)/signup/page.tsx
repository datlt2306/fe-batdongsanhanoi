"use client";
import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { FormSignup, schemaSignup } from "@/schemas/auths";
import { yupResolver } from "@hookform/resolvers/yup";
import { Signup } from "@/app/api/auths";
import { useRouter } from "next/navigation";
import Link from "next/link";

const signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSignup>({
    resolver: yupResolver(schemaSignup)
  });
  const onHandleSubmit = async (data: FormSignup) => {
    try {
      const results = await Signup(data);
      if (results.success == false) {
        Swal.fire({
          title: 'Opps!',
          text: 'Email hoặc Số điện thoại tồn tại!',
          icon: 'error',
          confirmButtonText: 'Quay lại'
        })
        return;
      } else {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Đăng ký thành công!',
          showConfirmButton: false,
          timer: 2500
        })
        router.push("/login")
      }

    } catch (error) {
      Swal.fire({
        title: 'Opps!',
        text: 'Có lỗi xảy ra vui lòng thử lại!',
        icon: 'error',
      })
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="system-ui bg-gray-300 pt-8 md:p-8">
      <div className="container mx-auto p-0">
        <div className="flex justify-center my-12">
          <div className="w-full lg:xl:w-3/4 justify-center flex">
            <div className="w-full lg:w-7/12 bg-white lg:p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 lg:text-3xl text-center ">
                ĐĂNG KÝ TÀI KHOẢN! 👤
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit(onHandleSubmit)}
              >
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="Name"
                    type="Name"
                    placeholder="Name"
                  />
                  <div className="text-red-500 text-sm my-2">
                    {errors.name && errors.name.message}
                  </div>
                </div>


                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="text-red-500 text-sm my-2">
                    {errors.email && errors.email.message}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="Số Đt"
                  />
                  <div className="text-red-500 text-sm my-2">
                    {errors.phone && errors.phone.message}
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 w-[100%]">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Mật khẩu
                    </label>
                    <input
                      {...register("password")}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <div className="text-red-500 text-sm my-2">
                      {errors.password && errors.password.message}
                    </div>
                  </div>

                  <div className="md:ml-2 w-[100%]">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Xác nhận mật khẩu
                    </label>
                    <input
                      {...register("confirm_password")}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                    />
                    <div className="text-red-500 text-sm my-2">
                      {errors.confirm_password &&
                        errors.confirm_password.message}
                    </div>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full  focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    ĐĂNG KÝ NGAY
                  </button>
                </div>
                <div className="mb-6 text-center relative">
                  <div className="flex justify-between items-center">
                    <hr className="border-t w-1/3" />
                    <p className="text-sm bg-white">HOẶC</p>
                    <hr className="border-t w-1/3" />
                  </div>
                </div>

                <div className="text-center">
                  <span> Bạn đã có tài khoản? </span>

                  <Link
                    href="/login"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 no-underline"
                  >
                    Đăng nhập!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 lg:p-4  rounded-b-lg"></div>
    </div>
  );
};

export default signup;
