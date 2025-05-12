import { ListboxOption } from '@headlessui/react';
import { CheckMark } from '@/shared/ui-kit/Icons';

type ListboxCheckboxOptionProps = {
  value: string;
  selected: boolean;
  children: React.ReactNode;
};

export const ListboxCheckboxOption = ({
  value,
  selected,
  children,
}: ListboxCheckboxOptionProps) => {
  return (
    <ListboxOption
      value={value}
      className={({ focus }) =>
        `flex items-center px-4 py-2 gap-2 cursor-pointer ${
          focus ? 'bg-blue-100' : ''
        }`
      }
    >
      <div
        className={`w-6 h-6 border-1 rounded ${
          selected ? 'bg-blue-500' : 'bg-white'
        } flex items-center justify-center border-blue-500`}
      >
        {selected && <CheckMark className="w-6 h-6 text-white" />}
      </div>

      <span className="text-blue-900 text-sm font-normal">{children}</span>
    </ListboxOption>
  );
};
