import { createColumnHelper } from "@tanstack/react-table";
import { employees } from "../types/employee";

const columnHelper = createColumnHelper<employees>();

export const column = [
  columnHelper.accessor("employee_id", {
    header: "employee id",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("first_name", {
    header: "first name",
  }),
  columnHelper.accessor("last_name", {
    header: "last name",
  }),
  columnHelper.accessor("email", {
    header: "email",
  }),
  columnHelper.accessor("gender", {
    header: "gender",
  }),
  columnHelper.accessor("job_title", {
    header: "job title",
  }),
  columnHelper.accessor("start_date", {
    header: "start date",
  }),
  columnHelper.accessor("salary", {
    header: "salary",
  }),
];
