import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addProduct, selectProducts } from "@/stores/product-data";
import photo from "/assets/product-sample.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Products } from "./table-column";
import { formSchema } from "@/validators/form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type FormValues = z.infer<typeof formSchema>;

export function ProductForm() {
  const dispatch = useDispatch();
  const dataProduct: Products[] = useSelector(selectProducts);
  const id = dataProduct.length + 1;
  const [modalMessage, setModalMessage] = useState({
    title: "",
    description: "",
  });
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: uuidv4(),
      no: id,
      name: "",
      category: undefined,
      image: undefined,
      freshness: undefined,
      desc: "",
      price: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    data.no = id;
    const image = data.image[0];
    data.image = URL.createObjectURL(image) as unknown as FileList;
    dispatch(addProduct(data));
  }

  useEffect(() => {
    form.formState.isSubmitted &&
      !form.formState.isSubmitSuccessful &&
      setModalMessage({
        title: "Failed",
        description: "Your product has not been added",
      });
    form.formState.isSubmitted &&
      form.formState.isSubmitSuccessful &&
      setModalMessage({
        title: "Success",
        description: "Your product has been added",
      });
  }, [form.formState.isSubmitted, form.formState.isSubmitSuccessful]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="sm:max-w-2xl lg:max-w-4xl w-[400px] max-w-full sm:w-full mx-auto border-2 border-gray-400 py-4 p-1 sm:p-5 md:p-10 rounded-lg mb-8"
      >
        <div className="max-w-lg sm:max-w-none sm:flex sm:justify-around sm:gap-6 md:gap-12 md:px-8">
          <div className="px-4 sm:px-0 sm:w-1/2 mx-auto">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="max-w-[300px] mx-auto sm:max-w-none">
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input id="product-name" placeholder="product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="max-w-[300px] mx-auto sm:max-w-none">
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="electronics">electronics</SelectItem>
                      <SelectItem value="fashions">fashions</SelectItem>
                      <SelectItem value="edible">edible</SelectItem>
                      <SelectItem value="things or stuff">things or stuff</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="image"
              render={({ field: { onChange }, ...field }) => (
                <FormItem className="max-w-[300px] mx-auto sm:max-w-none">
                  <FormLabel>Image of Product</FormLabel>
                  <Input
                    id="product-image"
                    type="file"
                    accept="image/*"
                    multiple={true}
                    disabled={form.formState.isSubmitting}
                    {...field}
                    onChange={(event) => {
                      const image = document.getElementById("image") as HTMLImageElement;
                      image.src = URL.createObjectURL(event.target.files![0]);
                      const dataTransfer = new DataTransfer();

                      Array.from(event.target.files!).forEach((image) => {
                        dataTransfer.items.add(image);
                      });

                      const newFiles = dataTransfer.files;
                      onChange(newFiles);
                    }}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center mt-2">
              <img id="image" src={photo} alt="product sample" className="h-48" />
            </div>
          </div>
          <div className="hidden sm:inline-block w-[1px] h-auto bg-black"></div>
          <div className="px-4 sm:px-0 sm:w-1/2 mx-auto">
            <FormField
              control={form.control}
              name="freshness"
              render={({ field }) => (
                <FormItem className="max-w-[300px] mx-auto sm:max-w-none space-y-3">
                  <FormLabel>Product Freshness</FormLabel>
                  <FormControl>
                    <RadioGroup
                      id="product-freshness"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="new" />
                        </FormControl>
                        <FormLabel className="font-normal">New</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="second" />
                        </FormControl>
                        <FormLabel className="font-normal">Second</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="refurbished" />
                        </FormControl>
                        <FormLabel className="font-normal">Refurbished</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem className="max-w-[300px] mx-auto sm:max-w-none mt-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell about the product"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="max-w-[300px] mx-auto sm:max-w-none mt-1">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="price" {...field} />
                  </FormControl>
                  <FormDescription>Input price using USD currency</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="px-4 max-w-[328px] mx-auto sm:max-w-none">
          <Dialog>
            <DialogTrigger className="w-full">
              <Button className="px-8 mt-5 w-full" type="submit">
                Submit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{modalMessage.title}</DialogTitle>
                <DialogDescription>{modalMessage.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </Form>
  );
}
