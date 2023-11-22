"use client"
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
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
import { removeCategories, useFetchData } from '@/app/api/category';

const ListCategories = React.memo(() => {
  const { data: cate, isLoading, isError } = useFetchData();
  const [categorys, setcategorys] = useState([])

  useEffect(() => {
    setcategorys(cate?.response.data)
  }, [cate?.response.data])

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading data</div>;
  }
  const HandleRemove = async (id: string) => {

    try {

      Swal.fire({
        title: 'Bạn có chắc muốn xóa ?',
        showCancelButton: true,
        confirmButtonText: 'ok',

      }).then(async (result) => {
        if (result.isConfirmed) {
          await removeCategories(id)
            .then(({ message }) => {
              const updatedCategories = categorys.filter((item: any) => item._id !== id);
              setcategorys(updatedCategories);
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: `${message}`,
                showConfirmButton: false,
                timer: 1500
              });
            })
            .catch((error) => {
              Swal.fire({
                position: 'top',
                icon: 'error',
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
              });
            });
        }
      })
    } catch (error) {
      console.error(error)
    }
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
          {categorys?.map((invoice: any, index: number) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{invoice.category_name}</TableCell>
              <TableCell>{invoice.category_description}</TableCell>
              <TableCell className="text-right">
                <Button className='mr-2' variant="outline"><Link href={`/admin/category/update/${invoice?._id}`}>Cập nhật</Link></Button>
                <Button className='' variant="outline" onClick={() => HandleRemove(invoice._id)}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
});

export default ListCategories
