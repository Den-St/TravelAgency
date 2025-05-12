import { Controller, useForm } from 'react-hook-form';

import { ListboxSelect } from '../FormElements/ListboxSelect/ListboxSelect';

import { Resort, Meal } from '@/shared/ui-kit/Icons';
import { Button } from '@/components/ui/Button/Button';

import {
  MEALS_SELECT_OPTIONS,
  TOUR_TYPE_SELECT_OPTIONS,
} from '../../constants/form';

type FormValues = {
  selectedMeals: string[];
  selectedTourTypes: string[];
};

export function ToursFilterForm() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      selectedMeals: [],
      selectedTourTypes: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap gap-4">
        <Controller
          name="selectedMeals"
          control={control}
          render={({ field }) => (
            <ListboxSelect
              {...field}
              options={MEALS_SELECT_OPTIONS}
              placeholder="Meals"
              multiple
              className="min-w-[160px] lg:w-[200px]"
              Icon={Meal}
            />
          )}
        />

        <Controller
          name="selectedTourTypes"
          control={control}
          render={({ field }) => (
            <ListboxSelect
              {...field}
              options={TOUR_TYPE_SELECT_OPTIONS}
              placeholder="Resorts"
              multiple
              className="min-w-[160px] lg:w-[179px]"
              Icon={Resort}
            />
          )}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
