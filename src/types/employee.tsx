export interface employee {
  employee_id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title: string;
  start_date: Date;
  salary: number;
}
export type employees = employee[];
