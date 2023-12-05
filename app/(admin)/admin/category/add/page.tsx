"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { useRouter } from "next/navigation";
import { useCategoriesMutation } from "@/app/Hooks/categories/useCategoriesMutation"
import Swal from "sweetalert2"
import axios from "axios"



const AddCategories = React.memo(() => {
    const router = useRouter();

    const { form, onSubmit } = useCategoriesMutation({
        action: "CREATE",
        onSuccess: () => {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Thêm thành công",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
            router.push("/admin/category");
        },
    })

    return (
        <div className="flex justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:w-[60%] md:w-[70%] w-[100%] ">
                    <FormField
                        control={form.control}
                        name="category_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập tên danh mục..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category_description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <textarea
                                        className="w-full border border-solid border-[rgb(224,224,224)] p-2 rounded-[5px]"
                                        placeholder="Nhập mô tả danh mục..."
                                        {...field}
                                        rows={4}  // Số dòng muốn hiển thị
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
});

export default AddCategories
