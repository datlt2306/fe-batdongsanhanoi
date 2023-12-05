import useSWR, { mutate } from "swr";

const fetcher = async (url: any) => {
  const tokendata = JSON.parse(localStorage.getItem("myacctoken") as string);
  const tokens = tokendata.token;
  const options = {
    headers: {
      Authorization: `Bearer ${tokens}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const useFetchData = () => {
  const { data, error } = useSWR(
    `http://127.0.0.1:8080/api/user/profile`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const updateuser = async (updatedUserData: any) => {
  const apiUrl = "http://127.0.0.1:8080/api/user/update";

  const tokendata = JSON.parse(localStorage.getItem("myacctoken") as string);
  const tokens = tokendata.token;
  const response = await fetch(apiUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokens}`,
    },
    body: JSON.stringify(updatedUserData),
  });

  if (response.ok) {
    mutate(apiUrl);
    return true;
  } else {
    throw new Error("Cập nhật user thất bại ");
  }
};
