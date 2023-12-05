import connect_Api from "./instances";

export const getAllCategories = () => {
  return connect_Api.get(`/category`);
};
//get byId
export const getOneCategories = (id: string | string) => {
  return connect_Api.get(`/category/${id}`);
};

// add
export const AddCategories = (data: any) => {
  return connect_Api.post(`/category`, data);
};
//update
export const UpdateCategories = (data: any) => {
  return connect_Api.patch(`/category/${data?._id}`, {
    category_description: data.category_description,
    category_name: data.category_name,
  });
};

//xóa
export const DeleteCategories = (id: any) => {
  return connect_Api.delete(`/category/${id}`);
};
