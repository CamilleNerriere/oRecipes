import './Instructions.scss';

interface InstructionsProps {
  instructions: array<string>;
}

function Instructions({ instructions }: InstructionsProps) {
  return (
    <ul className="instructions">
      {instructions.map((instruction) => (
        <li className="instructions__item" key={instruction}>
          <span className="instructions__item--dash">&mdash;</span>{' '}
          {instruction}
        </li>
      ))}
    </ul>
  );
}

export default Instructions;
