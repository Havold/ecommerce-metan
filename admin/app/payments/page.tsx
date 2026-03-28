import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "1",
      user: "John Doe",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "2",
      user: "Hello World",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "3",
      user: "Wren Evans",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "4",
      user: "Havold",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "1",
      user: "John Doe",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "2",
      user: "Hello World",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "3",
      user: "Wren Evans",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "4",
      user: "Havold",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "1",
      user: "John Doe",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "2",
      user: "Hello World",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "3",
      user: "Wren Evans",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "4",
      user: "Havold",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "1",
      user: "John Doe",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "2",
      user: "Hello World",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "3",
      user: "Wren Evans",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "4",
      user: "Havold",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "1",
      user: "John Doe",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "2",
      user: "Hello World",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "3",
      user: "Wren Evans",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "4",
      user: "Havold",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "1",
      user: "John Doe",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "2",
      user: "Hello World",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "3",
      user: "Wren Evans",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "4",
      user: "Havold",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
  ];
}

export default async function PaymentTable() {
  const data = await getData();
  return (
    <div className="p-4">
      <h1 className="mb-4 text-sm font-semibold">All Payments</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
