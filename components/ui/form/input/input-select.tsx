'use client';
import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import { FC, SelectHTMLAttributes, forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { inputVariants } from '../input';

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>, // Use SelectHTMLAttributes
    VariantProps<typeof inputVariants> {
  choices: string[];
  loader?: JSX.Element;
}

const InputSelect: FC<SelectProps> = forwardRef<HTMLInputElement, SelectProps>(
  //@ts-ignore
  ({ className, choices, loader, placeholder, ...props }, ref) => {
    return (
      <>
        {!loader ? (
          <select
            className={cn(
              className,
              'body placeholder:body cursor-pointer rounded-lg  px-extra-small py-[1.1rem] '
            )}
            name={props.id}
            aria-label={props.id}
            {...props}
          >
            {placeholder && (
              <option value="" className="" disabled hidden>
                {placeholder}
              </option>
            )}
            {choices.map((choice) => {
              return (
                <option key={uuidv4()} value={choice}>
                  {choice}
                </option>
              );
            })}
          </select>
        ) : (
          <span
            ref={ref}
            className={cn(
              'absolute top-16 box-border flex h-full w-full items-center justify-center rounded-lg border shadow-inner',
              className
            )}
          >
            {loader}
            <select
              className={cn(`body placeholder:body w-full p-extra-small `, className)}
              name={props.id}
              //@ts-ignore
              placeholder={placeholder ? placeholder : ''}
              aria-label={props.id}
              disabled={choices[0] === '' || choices[0] === 'No community is matching'}
              {...props}
            >
              {placeholder && choices[0] !== 'No community is matching' ? (
                <option value="" className="" disabled hidden>
                  {placeholder}
                </option>
              ) : null}

              {choices.map((choice) => {
                return (
                  <option key={uuidv4()} value={choice}>
                    {choice}
                  </option>
                );
              })}
            </select>
          </span>
        )}
      </>
    );
  }
);

InputSelect.displayName = 'Select';

export default InputSelect;
