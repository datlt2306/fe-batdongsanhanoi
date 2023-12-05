import useSWR, { mutate } from "swr";
import axios from "axios";

const apiUrl = `${process.env.NEXT_PUBLIC_BDS_API_PROJECT}`;

const fetcher = (url: any) => fetch(url).then((res) => res.json());
export const fetchUser = (id: string) => {
  const url = `/api/projects/${id}`;
  return useSWR(url, fetcher);
};

export const searchProduct = async ({ _project_district }: any) => {
  const response = await fetch(
    `${apiUrl}?_project_district=${_project_district}`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Không thể lấy thông tin danh mục.");
  }
};

export const updateProject = async (projectId: any, projectData: any) => {
  const response = await fetch(`${apiUrl}/${projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });
  if (response.ok) {
    mutate(apiUrl);
    return true;
  } else {
    throw new Error("Cập nhật dự án thất bại.");
  }
};

export const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
