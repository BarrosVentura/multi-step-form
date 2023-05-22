interface SwitchProps {
  value: string;
  onChange: (e: {
    target: {
      value: string;
    };
  }) => void;
}

export function Switch({ value, onChange }: SwitchProps) {
  return (
    <div className="w-full bg-magnolia mt-6 p-3 flex justify-center items-center gap-5 rounded-md">
      <span
        className={`text-sm font-medium text-cool-gray ${
          value === "monthly" && "text-marine-blue"
        } `}
      >
        Monthly
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value={value}
          className="sr-only peer"
          onChange={({ target }) => {
            if (target.checked) {
              onChange({
                target: {
                  value: "yearly",
                },
              });
            } else {
              onChange({
                target: {
                  value: "monthly",
                },
              });
            }
          }}
        />
        <div className="w-9 h-5 bg-marine-blue peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
      </label>
      <span
        className={`text-sm font-medium text-cool-gray ${
          value === "yearly" && "text-marine-blue"
        } `}
      >
        Yearly
      </span>
    </div>
  );
}
