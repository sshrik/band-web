import { Center } from "@/components/base/Container";
import { Header } from "@/components/base/Typography";
import { red, white } from "@/styles/color";

type OrderBadgeProps = {
  order: number;
  style?: React.CSSProperties;
};

const OrderBadge: React.FC<OrderBadgeProps> = (props) => {
  const { order, style } = props;

  return (
    <Center
      style={{
        ...style,
        borderRadius: "200px",
        width: "3.5rem",
        height: "3.5rem",
        backgroundColor: red,
      }}
    >
      <Header
        style={{
          color: white,
          fontWeight: 900,
          fontFamily: "Dela Gothic One",
          marginTop: "-0.25rem",
        }}
      >
        {order}
      </Header>
    </Center>
  );
};

export default OrderBadge;
