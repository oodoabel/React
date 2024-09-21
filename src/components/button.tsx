interface Main {
  holder: string;
}

const Button = ({ holder }: Main) => {
  return <button>{holder}</button>;
};

export default Button;
