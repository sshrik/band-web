import { Center } from "@/components/Container";
import { Header } from "@/components/Typography";
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
        width: "3rem",
        height: "3rem",
        backgroundColor: red,
      }}
    >
      <Header
        style={{
          color: white,
          marginBottom: "-0.25rem",
          fontWeight: 900,
        }}
      >
        {order}
      </Header>
    </Center>
  );
};

export default OrderBadge;
