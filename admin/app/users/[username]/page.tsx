import AppLineChart from "@/components/AppLineChart";
import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Candy, CircleCheck, Citrus, Shield } from "lucide-react";

const SingleUserPage = () => {
  return (
    <div className="p-4">
      <Breadcrumb>
        <BreadcrumbList className="text-xs">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">User</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="/john-doe">John Doe</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="p-4 bg-primary-foreground rounded-lg ">
            <h1 className="text-md font-medium">User Badges</h1>
            <div className="mt-4 flex gap-4">
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger>
                  <CircleCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 p-2 border border-blue-500/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="text-sm font-bold mb-1">Verified User</h1>
                  <p className="text-xs text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-500/30 p-2 border border-green-500/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="text-sm font-bold mb-1">Admin</h1>
                  <p className="text-xs text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 p-2 border border-yellow-500/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="text-sm font-bold mb-1">Awarded</h1>
                  <p className="text-xs text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 p-2 border border-orange-500/50"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="text-sm font-bold mb-1">Popular</h1>
                  <p className="text-xs text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="p-4 bg-primary-foreground rounded-lg">
            <div className="flex justify-between">
              <h1 className="text-md font-medium">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="p-4 cursor-pointer">Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="flex flex-col gap-2 my-4">
              <span className="text-xs text-muted-foreground">
                Profile completion
              </span>
              <Progress value={77} />
            </div>
            <div className="flex flex-col gap-4 mb-4 mt-5">
              <div className="flex gap-2 items-center">
                <span className="font-medium">Username:</span>
                <span className="text-sm">john.doe</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-medium">Email:</span>
                <span className="text-sm">john.doe</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-medium">Location:</span>
                <span className="text-sm">john.doe</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-medium">Phone:</span>
                <span className="text-sm">john.doe</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-medium">Role:</span>
                <span className="text-sm">
                  <Badge variant="default">Admin</Badge>
                </span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">
              Joined on 2025.01.01
            </span>
          </div>
          <div className="p-4 bg-primary-foreground rounded-lg">
            <h1 className="text-md font-medium mb-4">Recent Transactions</h1>
            <CardList type="Latest Transactions" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-2/3 space-y-8">
          <div className="p-4 bg-primary-foreground rounded-lg space-y-4">
            <div className="flex items-center gap-2">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="JD" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-lg font-medium">John Doe</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, maiores mollitia aliquam voluptas fuga officia, tempora
              dignissimos dolorum molestiae, expedita cum laudantium eum
              assumenda repellendus! Commodi esse asperiores sequi earum?
            </p>
          </div>
          <div className="p-4 bg-primary-foreground rounded-lg">
            <h1 className="text-md font-medium mb-8">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
