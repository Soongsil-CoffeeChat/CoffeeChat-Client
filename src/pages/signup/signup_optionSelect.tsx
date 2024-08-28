import * as S from "./signup.styles";

interface OptionSelectStepProps {
  title: string;
  subtitle: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  nextStep: string;
  goToStep: (step: string) => void;
}

export default function OptionSelectStep({
  title,
  subtitle,
  options,
  selectedOption,
  setSelectedOption,
  nextStep,
  goToStep,
}: OptionSelectStepProps) {
  const handleClear = () => {
    goToStep(nextStep);
  };

  return (
    <>
      <S.FormBoxContainer>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.ButtonContainer>
          {options.map((option) => (
            <S.OptionButton
              key={option}
              isSelected={selectedOption === option}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </S.OptionButton>
          ))}
        </S.ButtonContainer>
      </S.FormBoxContainer>
      <S.Button onClick={handleClear}>다음</S.Button>
    </>
  );
}
