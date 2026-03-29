import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    price: 39.9,
    color: "gray",
    image: "/products/1g.png",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    price: 59.9,
    color: "green",
    image: "/products/2gr.png",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    price: 69.9,
    color: "black",
    image: "/products/3bl.png",
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    price: 29.9,
    color: "pink",
    image: "/products/4p.png",
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    price: 49.9,
    color: "red",
    image: "/products/5r.png",
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Order Payment",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Order Payment",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Order Payment",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Order Payment",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Order Payment",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

const CardList = ({
  type,
}: {
  type: "Latest Transactions" | "Popular Products";
}) => {
  return (
    <div className="flex flex-col gap-4">
      {type === "Latest Transactions"
        ? latestTransactions.map((item) => (
            <Card
              className="flex justify-between items-center px-4"
              key={item.id}
            >
              <div className="relative w-12 h-12 rounded-sm overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-0 flex flex-col gap-2">
                <span className="text-xs font-medium">{item.title}</span>
                <Badge variant="secondary" className="text-[8px]">
                  {item.badge}
                </Badge>
              </CardContent>
              <CardFooter className="text-xs bg-transparent border-none p-0">
                {item.count / 1000}K
              </CardFooter>
            </Card>
          ))
        : popularProducts.map((item) => (
            <Card
              className="flex justify-between items-center px-4"
              key={item.id}
            >
              <div className="relative w-12 h-12 rounded-sm overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-0 flex flex-col gap-2">
                <span className="text-xs font-medium">{item.name}</span>
              </CardContent>
              <CardFooter className="text-xs bg-transparent border-none p-0">
                {item.price}K
              </CardFooter>
            </Card>
          ))}
    </div>
  );
};

export default CardList;
