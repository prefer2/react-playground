interface OperatorProps {
  operator: string;
  onClick: (operator: string) => void;
}

const Operator = ({ operator, onClick }: OperatorProps) => {
  return (
    <button className="operator" onClick={() => onClick(operator)}>
      {operator}
    </button>
  );
};

export default Operator;
