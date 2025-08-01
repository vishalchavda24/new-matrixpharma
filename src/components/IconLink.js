import Link from "next/link";

const IconLink = ({ href, children, className = "" }) => {
  return (
    <Link href={href} className={`icon-link flex items-center gap-1 ${className}`}>
      <span>{children}</span>
    </Link>
  );
};

export default IconLink;
