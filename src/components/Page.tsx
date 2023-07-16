type Props = {
  title: string;
  description: string;
  date: string;
  href: string;
};
export default function Page({ date, description, href, title }: Props) {
  return (
    <a
      href={href}
      className="no-underline bounce bg-black/30 p-2 w-full border border-white/5 cursor-pointer hover:border-accient-yellow/10 h-fit"
    >
      <div className="flex justify-between items-center">
        <h1>{title}</h1>
        <p className="opacity-25 magno mr-2 mt-1">{date}</p>
      </div>
      <div className="flex whitespace-normal flex-wrap w-full mt-2">
        <p className="opacity-50 whitespace-normal">{description}</p>
      </div>
    </a>
  );
}
