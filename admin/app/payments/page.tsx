import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "payment-1",
      user: "John Doe",
      userId: "user-1",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "payment-2",
      user: "Hello World",
      userId: "user-2",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "payment-3",
      user: "Wren Evans",
      userId: "user-3",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "payment-4",
      user: "Havold",
      userId: "user-4",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "payment-5",
      user: "John Doe",
      userId: "user-1",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "payment-6",
      user: "Hello World",
      userId: "user-2",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "payment-7",
      user: "Wren Evans",
      userId: "user-3",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "payment-8",
      user: "Havold",
      userId: "user-4",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "payment-9",
      user: "John Doe",
      userId: "user-1",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "payment-10",
      user: "Hello World",
      userId: "user-2",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "payment-11",
      user: "Wren Evans",
      userId: "user-3",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "payment-12",
      user: "Havold",
      userId: "user-4",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "payment-13",
      user: "John Doe",
      userId: "user-1",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "payment-14",
      user: "Hello World",
      userId: "user-2",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "payment-15",
      user: "Wren Evans",
      userId: "user-3",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "payment-16",
      user: "Havold",
      userId: "user-4",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "payment-17",
      user: "John Doe",
      userId: "user-1",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "payment-18",
      user: "Hello World",
      userId: "user-2",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "payment-19",
      user: "Wren Evans",
      userId: "user-3",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "payment-20",
      user: "Havold",
      userId: "user-4",
      status: "failed",
      amount: 4000,
      email: "havold@gmail.com",
    },
    {
      id: "payment-21",
      user: "John Doe",
      userId: "user-1",
      status: "pending",
      amount: 1000,
      email: "john.doe@gmail.com",
    },
    {
      id: "payment-22",
      user: "Hello World",
      userId: "user-2",
      status: "processing",
      amount: 2000,
      email: "hello.world@gmail.com",
    },
    {
      id: "payment-23",
      user: "Wren Evans",
      userId: "user-3",
      status: "success",
      amount: 3000,
      email: "wren.envans@gmail.com",
    },
    {
      id: "payment-24",
      user: "Havold",
      userId: "user-4",
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
