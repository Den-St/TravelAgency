import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/react';
import { ChevronDown, ChevronUp } from '@/shared/ui-kit/Icons';

import type { IconType } from 'react-icons/lib';

import { ListboxCheckboxOption } from './ListboxCheckboxOption';

type ListboxSelectProps = {
  value: string[]; // selected options
  onChange: () => void;
  options: string[]; // options to display
  Icon: IconType | React.ComponentType<{ className?: string; size?: number }>;
  placeholder: string;
  multiple?: boolean; // multiple selection,
  className?: string;
};

export const ListboxSelect = ({
  value,
  onChange,
  options,
  Icon,
  placeholder,
  multiple,
  className = '',
}: ListboxSelectProps) => {
  return (
    <div className={`${className}`}>
      <Listbox value={value} onChange={onChange} multiple={multiple}>
        {({ open }) => (
          <div>
            <ListboxButton
              className={`flex items-center w-full  min-w-[160px] h-14 px-3 gap-2 bg-white border rounded-lg hover:shadow-[0px_2px_10px_0px_rgba(2,126,172,0.2)] hover:border-transparent  outline-none focus:shadow-[0px_2px_10px_0px_rgba(2,126,172,0.2)] ${
                open ? 'border-blue-500' : 'border-gray-300'
              }`}
            >
              <Icon className="w-6 h-6 text-blue-900" />

              <div className="flex-1 truncate text-blue-900 text-sm text-left">
                {value.length > 0 ? value.join(', ') : placeholder}
              </div>

              {open ? (
                <ChevronUp className="w-5.5 h-5.5 text-blue-900 hover:cursor-pointer" />
              ) : (
                <ChevronDown className="w-6 h-6 text-blue-900 hover:cursor-pointer" />
              )}
            </ListboxButton>

            <ListboxOptions
              anchor="bottom"
              className="mt-2 w-(--button-width) bg-white border border-gray-300 rounded-lg shadow-[0px_2px_10px_6px_rgba(2,126,172,0.1)] outline-none"
            >
              {options.map((option) => (
                <ListboxCheckboxOption
                  key={option}
                  value={option}
                  selected={value.some((v) => v === option)}
                >
                  {option}
                </ListboxCheckboxOption>
              ))}
            </ListboxOptions>
          </div>
        )}
      </Listbox>
    </div>
  );
};
