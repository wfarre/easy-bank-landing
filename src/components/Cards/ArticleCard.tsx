interface Props {
  title: string;
  content: string;
  picture: string;
  author: string;
}
const ArticleCard = (props: Props) => {
  return (
    <li className="w-full flex-grow bg-white md:w-64 lg:flex-auto">
      <article>
        <div className="relative h-[200px] w-full bg-red-200">
          <img
            className="absolute left-0 top-0 h-full w-full object-cover"
            src={props.picture}
            alt=""
          />
        </div>
        <div className="mt-8 flex flex-col gap-3 px-5 pb-6">
          <span className="text-xs">By {props.author}</span>
          <h3 className="text-sm">{props.title}</h3>
          <p className="text-xs">{props.content}</p>
        </div>
      </article>
    </li>
  );
};

export default ArticleCard;
