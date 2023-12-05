import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AddCategories,
  DeleteCategories,
  UpdateCategories,
} from "../../api/categories";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddCate } from "@/schemas/categories";

type FormControlType = {
  category_name: string;
  category_description: string;
};

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useCategoriesMutation = ({
  action,
  defaultValues = { category_name: "", category_description: "" },
  onSuccess,
}: useProductMutationProps) => {
  const queryClient = useQueryClient();

  const form = useForm<FormControlType>({
    resolver: yupResolver(schemaAddCate),
    defaultValues,
  });
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: any) => {
      switch (action) {
        case "CREATE":
          return await AddCategories(product);
        case "UPDATE":
          return await UpdateCategories(product);
        case "DELETE":
          return await DeleteCategories(product._id!);
        default:
          return null;
      }
    },
    onSuccess: () => {
      // thêm | cập nhật thành công
      queryClient.invalidateQueries({
        queryKey: ["CATERORY_ID"],
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
