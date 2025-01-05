import { ButtonProps, Button } from "./ui/button";

interface CustomButtonProps extends ButtonProps {
  title: string;
  px?: number;
  py?: number;
}

export default function CustomButton({
  title,
  size='md',
  ...rest
}: CustomButtonProps) {
  return (
    <Button variant="orange" size={size} className={`relative font-['Montserrat']`} {...rest}>
      {title}
      <span className="absolute inset-x-0 bottom-0 h-2 bg-black rounded-b-lg -z-10 translate-y-1"></span>
    </Button>
  );
}
