import connect_Api from "./instances";

export const getAllProjects = () => {
  return connect_Api.get(`/projects`);
};
//get byId
export const getOneProject = (id: string | string) => {
  return connect_Api.get(`/projects/${id}`);
};

// add
export const AddProject = (data: any) => {
  return connect_Api.post(`/projects`, data);
};
//update
export const UpdateProject = (data: any) => {
  return connect_Api.patch(`/projects/${data?._id}`, {
    category_description: data.category_description,
    category_name: data.category_name,
  });
};

//xóa
export const DeleteProject = (id: any) => {
  return connect_Api.delete(`/projects/${id}`);
};
