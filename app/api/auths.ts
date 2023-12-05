import { FormSignup } from "@/schemas/auths";
import { FormLogin } from "@/schemas/auths";
import useSWR from "swr";
import connect_Api from "./instances";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const fetchUser = (id: string) => {
  const url = `/api/user/${id}`;

  return useSWR(url, fetcher);
};
const apiUrl = `${process.env.NEXT_PUBLIC_BDS_API}`;

export const Signup = async (data: FormSignup) => {
  const url = `${apiUrl}/signup`;
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const Signin = async (data: FormLogin) => {
  const url = `${apiUrl}/signin`;
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

// Hàm get one

export const inFoUser = () => {
  const uri = "/user/profile";
  const user = JSON.parse(localStorage.getItem("myacctoken") as string);
  const token = user?.token;
  return connect_Api.get(uri, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
