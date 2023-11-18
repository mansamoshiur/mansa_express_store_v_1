import Link from "next/link";

interface NaveItemsProps{
    href:string;
    label:string
}


const NaveItems = ({label,href}:NaveItemsProps) => {
  return <Link className="hover:text-[#e94560]" href={href}>{label}</Link>;
};

export default NaveItems;
