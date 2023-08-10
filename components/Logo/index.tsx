import Link from "next/link";
import Image from "next/image";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link className={`block w-[11.875rem] ${className || ""}`} href="/">
        <Image
            src="/images/brainwave.png"
            width={150}
            height={50}
            priority={true}
            alt="Logo"
        />
    </Link>
);

export default Logo;
