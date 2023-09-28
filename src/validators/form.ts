import { z } from "zod";

const MAX_IMAGE_SIZE = 5242880; // 5 MB
const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
];

export const formSchema = z.object({
  id: z.string().uuid().optional(),
  no: z.number().int().positive(),
  name: z.string().min(3).max(50),
  category: z.string().min(3).max(50),
  image: z
  .custom<FileList>((val) => val instanceof FileList, "Required")
  .refine((files) => files.length > 0, `Required`)
  .refine((files) => files.length <= 5, `Maximum of 5 images are allowed.`)
  .refine(
    (files) =>
      Array.from(files).every((file) => file.size <= MAX_IMAGE_SIZE),
    `Each file size should be less than 5 MB.`
  )
  .refine(
    (files) =>
      Array.from(files).every((file) =>
        ALLOWED_IMAGE_TYPES.includes(file.type)
      ),
    "Only these types are allowed .jpg, .jpeg, .png and .webp"
  ),
  freshness: z.enum(["new", "second", "refurbished"], {
    required_error: "You need to select a notification type.",
  }),
  desc: z.string().min(3).max(150),
  price: z.string().min(1, { message: "price must be have a value(s)" }).max(8),
});
