import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function DialogDemo() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline">hello</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Tìm kiếm bất động sản</DialogTitle>
                </DialogHeader>
                <form className=" py-4">
                    <div>
                        <label htmlFor="" className="font-semibold mb-2">Mức giá</label>
                        <select className="rounded py-2 pl-[10px] w-full my-2 outline-none border-2 border-r-[#EBEBEB]">
                            <option value="">Tất cả mức giá</option>
                            <option value="">Dưới 500 triệu</option>
                            <option value="">500 - 800 triệu</option>
                            <option value="">800 - 1 tỷ</option>
                            <option value="">1 - 2 tỷ</option>
                            <option value="">2 - 3 tỷ</option>
                            <option value="">2 - 3 tỷ</option>
                            <option value="">4 - 5 tỷ</option>
                            <option value="">6 - 7 tỷ</option>
                            <option value="">7 - 8 tỷ</option>
                            <option value="">8 - 9 tỷ</option>
                            <option value="">10 - 11 tỷ</option>
                            <option value="">11 - 12 tỷ</option>
                            <option value="">12 - 13 tỷ</option>
                        </select>
                        <select className="rounded-md text-white pl-[10px] bg-inherit w-full my-2 py-2 outline-none border ">
                            <option value="" className="text-[#303030]">Hà Nội</option>
                            <option value="" className="text-[#303030]">Tất cả dự án</option>
                            <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                            <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                            <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                            <option value="" className="text-[#303030]">Khu đô thị mới</option>
                            <option value="" className="text-[#303030]">Khu phức hợp</option>
                        </select>
                        <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit py-2 outline-none border w-full ">
                            <option value="" className="text-[#303030]">Mức Giá</option>
                            <option value="" className="text-[#303030]">Tất cả dự án</option>
                            <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                            <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                            <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                            <option value="" className="text-[#303030]">Khu đô thị mới</option>
                            <option value="" className="text-[#303030]">Khu phức hợp</option>
                        </select>
                        <select name="" id="" className="rounded-md text-white pl-[10px] bg-inherit py-2 outline-none border w-full my-2">
                            <option value="" className="text-[#303030]">Diện Tích</option>
                            <option value="" className="text-[#303030]">Tất cả dự án</option>
                            <option value="" className="text-[#303030]">Căn hộ chung cư</option>
                            <option value="" className="text-[#303030]">Cao ốc văn phòng</option>
                            <option value="" className="text-[#303030]">Trung tâm thương mại</option>
                            <option value="" className="text-[#303030]">Khu đô thị mới</option>
                            <option value="" className="text-[#303030]">Khu phức hợp</option>
                        </select>

                    </div>


                </form>
                <DialogFooter>
                    <Button type="submit">Tìm kiếm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

