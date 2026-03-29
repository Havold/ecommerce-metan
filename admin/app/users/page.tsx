import { columns, User } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<User[]> {
  return [
    {
      id: "user-1",
      user: "John Doe",
      status: "active",
      email: "john.doe@gmail.com",
      avatar: "/users/1.png",
    },
    {
      id: "user-2",
      user: "Hello World",
      status: "inactive",
      email: "hello.world@gmail.com",
      avatar: "/users/2.png",
    },
    {
      id: "user-3",
      user: "Havold",
      status: "active",
      email: "havold@gmail.com",
      avatar: "/users/3.png",
    },
    {
      id: "user-4",
      user: "Wren Evans",
      status: "inactive",
      email: "wren.evans@gmail.com",
      avatar: "/users/4.png",
    },
  ];
}

export default async function UsersPage() {
  const data = await getData();
  return (
    <div className="p-4">
      <h1 className="mb-4 text-sm font-semibold">All Users</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
