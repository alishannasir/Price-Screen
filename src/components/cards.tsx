import { lusitana } from "@/components/ui/fonts";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BsLightningCharge } from "react-icons/bs";
import { TypographyH1 } from "./price-heading";
import { GiCheckMark } from "react-icons/gi";
import { IoLayers } from "react-icons/io5";


type CardProps = React.ComponentProps<typeof Card>

export function Cards({ className, ...props }: CardProps) {
  return (
    <>
   <div className="flex flex-col gap-4 md:flex-row">
   <Card className={cn("w-[380px] h-[522px] hover:border hover:border-blue-300 overflow-hidden", className)} {...props}>
      <CardHeader className="flex flex-col items-center justify-center space-y-0 pb-5">
        <CardTitle className="text-2xl font-bold pb-3 flex flex-row items-center justify-center">
            <div className="flex items-center justify-center border-4 rounded-full w-10 h-10 border-gray-100  bg-blue-100">
                <BsLightningCharge className="text-blue-500 w-5 h-5" />
            </div>
        </CardTitle>
        <CardDescription className={`${lusitana.className} text-blue-700`}>Basic Plan</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
          <div className=" flex flex-col justify-center items-center">
             <TypographyH1 
             title="$1500/mth"
             />
            <p className="text-sm text-muted-foreground">
               Billed annually.
            </p>
        </div>
        <div className="rounded w-32 h-7 text-red-400 bg-red-50 flex justify-center items-center">
             <span className="text-sm">Limited features</span>
        </div>
        <div className="flex flex-row mt-3">
          <ul>
            <li className="flex flex-row  pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">Access to all basic features</span>
            </li>
            <li className="flex flex-row  pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">Basic reporting and analytics</span>
            </li>
            <li className="flex flex-row pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">Up to 10 individual users</span>
            </li>
            <li className="flex flex-row  pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">20GB individual data each user</span>
            </li>
            <li className="flex flex-row  pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">Basic chat and email support</span>
            </li>
            
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-5 flex rounded-b-lg justify-center items-center bg-gray-100">
        <Button className="w-full h-10 bg-blue-500 text-white">
           Get Started
        </Button>
      </CardFooter>
    </Card>
      {/* second card */}
     <Card className={cn("w-[380px] h-[522px hover:border hover:border-blue-300 overflow-hidden]", className)} {...props}>
      <CardHeader className="flex flex-col items-center justify-center space-y-0 pb-5">
        <CardTitle className="text-2xl font-bold pb-3 flex flex-row items-center justify-center">
            <div className="flex items-center justify-center border-4 rounded-full w-10 h-10 border-gray-100  bg-blue-100">
                <IoLayers className="text-blue-500 w-5 h-5"/>
            </div>
        </CardTitle>
        <CardDescription className={`${lusitana.className} text-blue-700`}>Enterprise Plan</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
          <div className=" flex flex-col justify-center items-center">
             <TypographyH1 
             title="$2500/mth"
             />
            <p className="text-sm text-muted-foreground">
               Billed annually.
            </p>
        </div>
        <div className="rounded w-28 h-7 text-green-400 bg-green-50 flex justify-center items-center">
             <span className="text-sm">All features</span>
        </div>
        <div className="flex flex-row mt-3">
          <ul>
            <li className="flex flex-row  pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">Access to all basic and advanced features</span>
            </li>
            <li className="flex flex-row  pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">Advanced reporting and analytics</span>
            </li>
            <li className="flex flex-row pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">Up to 100 individual users</span>
            </li>
            <li className="flex flex-row  pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">100GB individual data each user</span>
            </li>
            <li className="flex flex-row  pt-2 gap-2">
            <div className="rounded-full w-7 h-7 bg-blue-50 flex justify-center items-center">
            <GiCheckMark className="text-blue-500" />
            </div>
            <span className="text-sm">Advanced chat and email support</span>
            </li>
            
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-5 flex rounded-b-lg justify-center items-center bg-gray-100">
        <Button className="w-full h-10 bg-blue-500 text-white">
           Get Started
        </Button>
      </CardFooter>
    </Card>
   </div>
    </>
  )
}
