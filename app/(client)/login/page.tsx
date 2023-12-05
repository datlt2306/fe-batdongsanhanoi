"use client"
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { FormLogin, schemaLogin } from "@/schemas/auths";
import { yupResolver } from '@hookform/resolvers/yup';
import { Signin } from "@/app/api/auths";
import Swal from 'sweetalert2';
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useLocalStorage } from "@/app/useLocalStore/useLocalStore";

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useLocalStorage('myacctoken', null);
    const { register, handleSubmit, formState: { errors } } = useForm<FormLogin>({
        resolver: yupResolver(schemaLogin)
    })

    const onHandleSubmit = async (data: FormLogin) => {
        try {
            const reponse = await Signin(data);
            setUser({
                token: reponse.token,
                user: reponse.user
            })
            if (reponse.error === true) {
                Swal.fire({
                    title: 'Opps!',
                    text: 'Thông tin tài khoản hoặc mật khẩu không chính xác!',
                    icon: 'error',
                    confirmButtonText: 'Quay lại'
                })
                return;
            } else {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Đăng nhập thành công!',
                    showConfirmButton: false,
                    timer: 1500
                })
                router.push("/admin")
            }
        } catch (error) {
            Swal.fire({
                title: 'Opps!',
                text: 'Có lỗi xảy ra vui lòng thử lại!',
                icon: 'error',
            })
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="w-full h-max mt-[69px] p-[24px_0_50px_0] bg-[#f9f9f9]">
            <div className="w-full lg:w-[500px] h-max p-[32px] m-auto bg-white rounded-[8px] shadow-lg">
                <h5 className="w-full mt-[48px] text-lg font-medium leading-8 ">Xin chào bạn</h5>
                <h3 className="w-full m-[4px_0_32px] text-3xl font-medium leading-8 ">Đăng nhập tài khoản</h3>
                <form className="w-full h-max" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="w-full h-[47px] relative">
                        <div className="absolute top-[50%] left-[10px] translate-y-[-50%] "><AiOutlineUser className="w-[24px] h-[24px]" /></div>
                        <Input
                            {...register('email')}
                            type="text"
                            placeholder="SĐT chính hoặc email"
                            className="w-full h-full rounded-[8px] pl-[40px] focus-visible:ring-offset-0 focus-visible:ring-0 focus:border-slate-900"
                        />
                    </div>
                    <div className="text-red-500 text-sm my-2">
                        {errors.email && errors.email.message}
                    </div>
                    <div className="w-full h-[47px] mt-5 relative">
                        <div className="absolute top-[50%] left-[10px] translate-y-[-50%] "><BiLockAlt className="w-[24px] h-[24px]" /></div>
                        <Input
                            {...register('password')}
                            type="password"
                            placeholder="Mật khẩu"
                            className="w-full h-full rounded-[8px] pl-[40px] focus-visible:ring-offset-0 focus-visible:ring-0 focus:border-slate-900"
                        />
                    </div>
                    <div className="text-red-500 text-sm my-2">
                        {errors.password && errors.password.message}
                    </div>
                    <Button type="submit" className="w-full h-[48px] bg-blue-500 rounded-[8px] hover:bg-[#ff837a] active:bg-[#74150f]">Đăng nhập</Button>
                    <div className="text-center mt-5">
                        <span> Bạn chưa có tài khoản? </span>
                        <Link
                            href="/signup"
                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 no-underline"
                        >
                            Đăng ký!
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login