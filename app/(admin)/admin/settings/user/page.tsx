"use client"

import { useUserQuery } from '@/app/Hooks/user/useUserQuery';
import Link from 'next/link';
const page = () => {
  const { data } = useUserQuery();
  const datauser = data?.data?.user;

  return (
    <div className="overflow-x-auto text-black">
      <form >
        <div className="min-h-32 lg:col-span-3 ">
          <div className='bg-white border border-slate-300 p-5 rounded-md'>
            <h3 className=" text-slate-700 font-semibold text-[35px] uppercase text-center">Hồ sơ của tôi</h3>
            <div className="grid grid-cols-[30%,70%] gap-4 mt-5">
              <div>
                <div className="flex justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/2048px-OOjs_UI_icon_userAvatar-constructive.svg.png"
                    alt=""
                    className="w-[200px] " />
                </div>

              </div>
              <div className="px-5">
                <div className='col-span-2'>
                  <label className="block text-slate-800 text-sm font-medium ">
                    Tên người dùng
                  </label>
                  <div className="border-solid border p-2 mt-2">
                    {datauser?.name}
                  </div>
                </div>

                <div className='col-span-2 mt-4'>
                  <label className="block text-slate-800 text-sm font-medium ">
                    Email
                  </label>
                  <div className="border-solid border p-2 mt-2">
                    {datauser?.email}
                  </div>
                </div>

                <div className='col-span-2 mt-4'>
                  <label className="block text-slate-800 text-sm font-medium ">
                    SĐT
                  </label>
                  <div className="border-solid border p-2 mt-2">
                    {datauser?.phone}
                  </div>
                </div>

              </div>

              <div className="col-span-2 mt-6 flex items-center justify-end gap-x-5 px-5">

                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <Link href={`/admin/settings/user/update`}>Cập nhật</Link>
                </button>
              </div>
            </div>
          </div>


        </div >
      </form >
    </div >
  );
};
export default page;
