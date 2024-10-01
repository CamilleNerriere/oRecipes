import './Instructions.scss';

interface InstructionsProps {
  instructions: array<string>;
}

function Instructions({ instructions }: InstructionsProps) {
  return (
    <ul className="instructions">
      {instructions.map((instruction) => (
        <li className="instructions__item" key={instruction}>
          <span>-</span> {instruction}
        </li>
      ))}
    </ul>
  );
}

export default Instructions;
