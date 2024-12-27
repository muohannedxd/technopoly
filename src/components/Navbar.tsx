import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import LogoIcon from "@/assets/logo/Inline_Dark_Transparent_PNG.png";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "About Us",
  },
  {
    href: "#agenda",
    label: "Agenda",
  },
  {
    href: "#sponsors",
    label: "Sponsors",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-grid-pattern bg-white text-foreground  shadow-md">
      <div className="mx-auto">
        <div className="h-14 px-4 flex justify-between items-center">
          <div className="font-bold flex">
            <HashLink
              rel="noreferrer noopener"
              to="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img className="h-10" src={LogoIcon} />
            </HashLink>
          </div>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <HashLink
                      rel="noreferrer noopener"
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </HashLink>
                  ))}
                  <HashLink
                    rel="noreferrer noopener"
                    to="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </HashLink>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex lg:gap-6">
            {routeList.map((route: RouteProps, i) => (
              <HashLink
                rel="noreferrer noopener"
                to={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "link",
                })}`}
              >
                {route.label}
              </HashLink>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <HashLink
              rel="noreferrer noopener"
              to="/register"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              Register
            </HashLink>
          </div>
        </div>
      </div>
    </header>
  );
};
