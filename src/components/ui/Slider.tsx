type Props = {
  className?: string;
  min?: number;
  max?: number;
  value?: number;
};

export default function Slider({ className, min, max, value }: Props) {
  return (
    <div>
      <input
        className={`
                  ${className}

                `}
        type="range"
        min={min}
        max={max}
        value={value}
        readOnly
      ></input>
    </div>
  );
}
