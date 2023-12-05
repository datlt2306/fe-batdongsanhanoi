"use client"
import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { useCategoryQuery } from '@/app/Hooks/categories/useCategoriesQuery';
import { useCategoriesMutation } from '@/app/Hooks/categories/useCategoriesMutation';
import Swal from 'sweetalert2';

const ListCategories = React.memo(() => {
  const { data, isLoading, error } = useCategoryQuery();
  const listCate = data?.data?.response?.data;
  const { onSubmit } = useCategoriesMutation({
    action: "DELETE",
    onSuccess: () => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Xóa thành công!",
        showConfirmButton: false,
        timer: 1500
      });
    },

  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <div className='flex justify-between items-center my-5'>
        <h2 className='text-3xl'>
          Danh sách danh mục
        </h2>
        <Button className='mr-2' variant="outline"><Link href={`/admin/category/add`}>Thêm danh mục</Link></Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >#</TableHead>
            <TableHead>Tên danh mục </TableHead>
            <TableHead>Mô tả </TableHead>
            <TableHead className="text-right">Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listCate?.map((invoice: any, index: number) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{invoice.category_name}</TableCell>
              <TableCell>{invoice.category_description}</TableCell>
              <TableCell className="text-right">
                <Button className='mr-2' variant="outline"><Link href={`/admin/category/update/${invoice?._id}`}>Cập nhật</Link></Button>
                <Button className='' variant="outline" onClick={() => onSubmit(invoice)}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
});

export default ListCategories
