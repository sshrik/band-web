import { Header } from "@/components/base/Typography";

type PageTitleProps = {
  children?: string;
  style?: React.CSSProperties;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { children, style } = props;

  return (
    <Header $ff="nove" $size="lg" style={style}>
      {children}
    </Header>
  );
};

export default PageTitle;
