import { useSelector, useDispatch } from "react-redux";
import { columns } from "./table-column";
import {
  fetchProducts,
  selectProducts,
  productsStatus,
  productsError,
} from "@/stores/product-data";
import { Cell, ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { AppDispatch } from "@/stores/store";

interface CellComponentProps<TData> {
  cell: Cell<TData, unknown>;
}

export const ProductTable = React.memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(productsStatus);
  const error = useSelector(productsError);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      if (status === "idle") {
        dispatch(fetchProducts());
      }
    }
    return () => {
      ignore = true;
    };
  }, [status, dispatch]);

  let tabel;
  if (status === "loading") {
    tabel = <Skeleton className="w-[100px] h-[20px] rounded-full" />;
  } else if (status === "succeeded") {
    tabel = <TableComponent />;
  } else if (status === "failed") {
    tabel = <div className="text-center">{error}</div>;
  }

  return (
    <div>
      <div className="border-[1px] border-black rounded-lg">{tabel}</div>
      <div className="text-center mt-4">
        <h2 className="text-base font-mono">
          <strong>API</strong>
          <Link
            to="https://mocki.io/v1/cd86a97f-1f9c-4828-853b-4085dac3aff9"
            className="text-blue-400"
          >
            https://mocki.io/v1/cd86a97f-1f9c-4828-853b-4085dac3aff9
          </Link>
        </h2>
        <h5 className="mt-12">
          Made by <span className="text-red-500">Naufaln</span> with{" "}
          <span className="underline">
            React, Tailwind, Shadcn, React Hook Form, Zod, TypeScript
          </span>
        </h5>
      </div>
    </div>
  );
});

function TableComponent() {
  const products = useSelector(selectProducts);

  const table = useReactTable({
    data: products,
    columns: columns as ColumnDef<unknown, unknown>[],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className="border-[1px] border-gray-200 text-center rounded-lg"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => {
                  return <CellComponent key={cell.id} cell={cell} />;
                })}
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

function CellComponent<TData>({ cell }: CellComponentProps<TData>) {
  return (
    <TableCell className="text-center border-[1px] border-gray-200 rounded-lg">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  );
}
