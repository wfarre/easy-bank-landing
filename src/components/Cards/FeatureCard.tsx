interface Props {
  title: string;
  content: string;
  picture: string;
}

const FeatureCard = (props: Props) => {
  return (
    <article className="mx-auto flex flex-col items-center gap-7 md:max-w-[260px] lg:items-start lg:gap-9">
      <div>
        <img src={props.picture} alt="" />
      </div>
      <h3 className="text-xl">{props.title}</h3>
      <p>{props.content}</p>
    </article>
  );
};

export default FeatureCard;
