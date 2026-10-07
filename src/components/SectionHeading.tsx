interface Props {
  title: string;
  subtext: string;
}

export default function SectionHeading({ title, subtext }: Props) {
  return (
    <div className="itembox_sectop">
      <div className="heading heading_sec">
        <div className="heading-main">
          <h2 className="heading-text">{title}</h2>
        </div>
        <span className="heading-subtext">{subtext}</span>
      </div>
    </div>
  );
}
