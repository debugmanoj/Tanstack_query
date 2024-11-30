import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../TypiocdeApi/TypeCodeApi";

export const useCommentsQuery = () => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });
};
