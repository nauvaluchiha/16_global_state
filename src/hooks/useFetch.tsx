import { Products } from "@/pages/product/components/table-column";

export async function useFetch(url: string): Promise<Products[]> {
  const data = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return data as Products[];
}
