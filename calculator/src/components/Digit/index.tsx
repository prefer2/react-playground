interface DigitProps {
  digitNumber: number;
  onClick: (digit: number) => void;
}

const Digit = ({ digitNumber, onClick }: DigitProps) => {
  return (
    <button
      className={`${digitNumber === 0 ? 'wide' : ''}`}
      onClick={() => onClick(digitNumber)}
    >
      {digitNumber}
    </button>
  );
};

export default Digit;
