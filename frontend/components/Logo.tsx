import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  color?: string;
  src?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  color = "text-[#7ACA2A]",
  src = "/assets/logo.png",
  className = "mr-2 w-8 md:w-10 h-auto",
}) => {
  return (
    <Link
      href="/"
      className={`${color} font-bold flex items-center text-lg md:text-xl lg:text-2xl`}
    >
      <Image
        src={src}
        alt="Logo"
        width={500}
        height={500}
        className={className}
      />
    </Link>
  );
};

export default Logo;