import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddProject, DeleteProject, UpdateProject } from "@/app/api/projects";

type FormControlType = {
  project_name: string;
  map_link: string;
  project_location: string;
  project_district: string;
  project_wards: string;
  project_price: number;
  project_acreage: number;
  project_room: number;
  project_image: [];
  project_view: number;
  categoryId: string;
  status: number;
  userId: string;
  description_group: object;
};

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useProjectMutation = ({
  action,
  defaultValues = {
    project_name: "",
    map_link: "",
    project_location: "",
    project_district: "",
    project_wards: "",
    project_price: "",
    project_acreage: "",
    project_room: "",
    project_image: "",
    project_view: "",
    categoryId: "",
    description_group: {
      overview: {
        overview_description: "",
        overview_image: "",
      },
      location: {
        // Vị trí
        location_description: "",
        location_image: [],
        location_image_description: "",
      },
      utilities: {
        // tiện ích
        utilities_title: "",
        utilities_description: "",
        image: [
          {
            utilities_image: "",
            utilities_image_description: "",
          },
        ],
      },
      floor_design: [
        // thiết kế mặt bằng
        {
          floor_design_title: "",
          floor_design_image: "",
          floor_design_image_description: "",
          floor_design_description_detail: "",
        },
      ],
      utilities_additional: [
        {
          // tiện ích bổ sung
          utilities_additional_title: "",
        },
      ],
    },
    status: "",
    userId: "",
  },
  onSuccess,
}: useProductMutationProps) => {
  const queryClient = useQueryClient();

  const form = useForm<FormControlType>({
    // resolver: yupResolver(schemaAddCate),
    defaultValues,
  });
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: any) => {
      switch (action) {
        case "CREATE":
          return await AddProject(product);
        case "UPDATE":
          return await UpdateProject(product);
        case "DELETE":
          return await DeleteProject(product._id!);
        default:
          return null;
      }
    },
    onSuccess: () => {
      // thêm | cập nhật thành công
      queryClient.invalidateQueries({
        queryKey: ["PROJECT_ID"],
      });
      onSuccess && onSuccess();
    },
  });
  const onSubmit: SubmitHandler<FormControlType> = (values) => {
    mutate(values as any);
  };

  return {
    form,
    onSubmit,
    ...rest,
  };
};
