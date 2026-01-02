import Image from "next/image";

export default function Testimonial({
  author,
  occupation,
}: {
  author: string;
  occupation: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <cite className="auth-testimonial-author">{`- ${author}.`}</cite>
        <p className="max-md:text-xs text-gray-500">{occupation}</p>
      </div>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Image
            src={"/assets/icons/star.svg"}
            alt="Star"
            key={star}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        ))}
      </div>
    </div>
  );
}
