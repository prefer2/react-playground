interface DigitProps {
  digitNumber: number;
  onClick: () => void;
}

const Digit = ({ digitNumber, onClick }: DigitProps) => {
  return (
    <button className={`${digitNumber === 0 ? 'wide' : ''}`} onClick={onClick}>
      {digitNumber}
    </button>
  );
};

export default Digit;
