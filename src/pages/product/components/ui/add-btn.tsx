import { Button } from "@/components/ui/button";

export function AddButton({
  showForm,
  setShowForm,
}: {
  showForm: boolean;
  setShowForm: (value: boolean) => void;
}) {
  return (
    <Button
      className={`${
        showForm ? "bg-red-500" : "bg-blue-500"
      } text-nowrap whitespace-nowrap w-full h-10 text-white text-center rounded-lg`}
      onClick={() => {
        setShowForm(!showForm);
      }}
    >
      {showForm ? (
        <span className="relative bottom-[0.095em]">Cancel</span>
      ) : (
        <div>
          <span className="relative bottom-[0.12em]">+</span>
          <span className="relative bottom-[0.06em]"> Add Product</span>
        </div>
      )}
    </Button>
  );
}
