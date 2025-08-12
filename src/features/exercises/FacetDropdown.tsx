import { useId } from "react";

type Props = {
  title: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  defaultOpen?: boolean;
};

const FacetDropdown = ({
  title,
  options,
  value,
  onChange,
  defaultOpen,
}: Props) => {
  const baseId = useId();

  const toggle = (opt: string, checked: boolean) => {
    onChange(checked ? [...value, opt] : value.filter((v) => v !== opt));
  };

  return (
    <details
      className="group bg-white border border-[#d6d7d7] rounded-lg"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex justify-between items-center px-3 py-2 cursor-pointer list-none select-none">
        <span className="font-medium text-sm">{title}</span>
        <span
          aria-hidden
          className="transition-transform group-open:rotate-180"
        >
          ▾
        </span>
      </summary>

      <div className="px-3 pb-3 ease-linear">
        <ul className="space-y-1 pr-2 max-h-56 overflow-y-auto">
          {options.map((opt, i) => {
            const id = `${baseId}-${i}`;
            const checked = value.includes(opt);
            return (
              <li key={opt} className="block">
                {" "}
                <label htmlFor={id} className="flex items-center gap-2 text-sm">
                  <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => toggle(opt, e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="truncate">{opt}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
};

export default FacetDropdown;
