export interface IProject1 {
  id?: number | string;
  project_name: string;
  project_image: string;
}
export interface ListAllProjecs {
  response: ListAllProject;
}
export interface ListAllProject {
  data: IProject[];
}
export interface IProject {
  _id?: number | string;
  project_name: string;
  project_location: string;
  project_district: string;
  project_address: string;
  project_content: string;
  project_price: number;
  project_acreage: number;
  project_room: number;
  project_image: ImgProject[];
  project_view: number;
  categoryId: Object | string;
  userID: Object | string;
  status?: Object | string;
  description_group: Object | string;
  map_link?: string;
  created_At?: Date;
  update_At?: Date;
  delete_At?: Date;
  deleted?: boolean;
}
export interface ImgProject {
  public_id?: string;
  image_url: string;
}
export interface IprojectResponse {
  data: IProject[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}
