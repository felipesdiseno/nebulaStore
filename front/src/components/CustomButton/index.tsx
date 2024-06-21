import { IButtonProps } from "@/interfaces/IButton";

export default function CustomButton({
  text,
  onClick,
  disabled,
  className,
}: IButtonProps) {
  return (
    <div>
      <button onClick={onClick} disabled={disabled} className={className}>
        {text}
      </button>
    </div>
  );
}
